import axios from "axios";
import { config } from "../../utils/config";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import UseContextState from "../../hooks/UseContextState";
import Error from "../Notification/Error";
const ChangeLoginPassword = () => {
  const changePasswordApi = config?.result?.endpoint?.changePassword;
  const token = localStorage.getItem("adminToken");
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const pageTitle = config?.result?.settings?.siteTitle;
  const { generatedToken } = UseContextState();
  const [errorMsg, setErrorMsg] = useState("");
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
        token: generatedToken,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = res.data;
    console.log(data);
    if (data?.success) {
      localStorage.setItem(
        "transactionPassword",
        data?.result?.transactionPassword
      );
      navigate("/change-password-success");
    } else {
      setErrorMsg(data?.error?.status[0]?.description);
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
              <label className="form-label text-start w-100">
                Old Password:
              </label>
              <div>
                <input
                  {...register("oldPassword", { required: true })}
                  id="input-1"
                  name="oldPassword"
                  type="password"
                  placeholder="Old Password"
                  className="form-control"
                />{" "}
              </div>
            </div>
            <div id="input-group-2" role="group" className="form-group">
              <label className="form-label text-start w-100">
                New Password:
              </label>
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
              <label className="form-label text-start w-100">
                Confirm Password:
              </label>
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
      {errorMsg && <Error message={errorMsg} setMessage={setErrorMsg} />}
    </div>
  );
};

export default ChangeLoginPassword;
