import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Error from "../Notification/Error";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";
import UseContextState from "../../hooks/UseContextState";
import { API, settings } from "../../utils";
const ChangeLoginPassword = () => {
  const token = localStorage.getItem("adminToken");
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [errorMsg, setErrorMsg] = useState("");
  const { logo } = UseContextState();
  useEffect(() => {
    document.title = settings.siteTitle;
  }, []);

  const onSubmit = async ({ confirmPassword, oldPassword, password }) => {
    const generatedToken = UseTokenGenerator();
    const encryptedData = UseEncryptData({
      oldPassword: oldPassword,
      newPassword: password,
      confirmPassword: confirmPassword,
      type: "login",
      token: generatedToken,
    });
    const res = await axios.post(API.changePassword, encryptedData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = res.data;

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
          <img src={logo} style={{ maxWidth: "250px", maxHeight: "100px" }} />
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
