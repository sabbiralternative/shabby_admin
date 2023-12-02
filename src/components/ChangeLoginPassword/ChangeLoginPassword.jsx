import axios from "axios";
import { config } from "../../utils/config";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const ChangeLoginPassword = () => {
  const changePasswordApi = config?.result?.endpoint?.changePassword;
  const token = localStorage.getItem("adminToken");
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const pageTitle = config?.result?.settings?.siteTitle;
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  const onSubmit = async ({ confirmPassword, oldPassword, password }) => {
    const res = await axios.post(
      changePasswordApi,
      {
        oldPassword: oldPassword,
        newPassword: password,
        confirmPassword: confirmPassword,
        type: "login",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = res.data;
    if (data?.success) {
      localStorage.setItem(
        "transactionPassword",
        data?.result?.transactionPassword
      );
      navigate("/change-password-success");
    }
  };

  return (
    <div className="vertical-collpsed login">
      <section className="login-mn">
        <div className="log-logo m-b-20">
          <img
            src="https://sitethemedata.com/sitethemes/shabby247.com/front/logo.png"
            style={{ maxWidth: "250px", maxHeight: "100px" }}
          />
        </div>
        <div className="log-fld">
          <h2 className="text-center">Change Password</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
            data-vv-scope="form-login"
            className="form-horizontal"
          >
            <div id="input-group-1" role="group" className="form-group">
              <div>
                <input
                  {...register("oldPassword", { required: true })}
                  id="input-1"
                  name="oldPassword"
                  type="text"
                  placeholder="Old Password"
                  className="form-control"
                />{" "}
              </div>
            </div>
            <div id="input-group-2" role="group" className="form-group">
              <div>
                <input
                  {...register("password", { required: true })}
                  id="input-2"
                  name="password"
                  type="password"
                  placeholder="New Password"
                  className="form-control form-control"
                />{" "}
              </div>
            </div>

            <div id="input-group-3" role="group" className="form-group">
              <div>
                <input
                  {...register("confirmPassword", { required: true })}
                  id="input-3"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="form-control form-control"
                />{" "}
              </div>
            </div>
            <div className="form-group text-center">
              <button
                type="submit"
                className="btn btn btn-submit btn-login btn-secondary"
              >
                Change Password <i className="fas fa-sign-in-alt"></i>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ChangeLoginPassword;
