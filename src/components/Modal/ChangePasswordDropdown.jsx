import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { config } from "../../utils/config";
import UseContextState from "../../hooks/UseContextState";
import Success from "../Notification/Success";
import { useNavigate } from "react-router-dom";
import Error from "../Notification/Error";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";

const ChangePasswordDropdown = ({ setChangePassDropdown }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const changePasswordApi = config?.result?.endpoint?.changePassword;
  const token = localStorage.getItem("adminToken");
  const { changePassNotify, setChangePassNotify } =
    UseContextState();
  const navigate = useNavigate();
  const [passChangeErr, setPassChangeErr] = useState("");

  const onSubmit = async ({
    newPassword,
    newPasswordConfirm,
    transactionCode,
  }) => {
    setError("");
    if (newPassword !== newPasswordConfirm) {
      setError("The Confirm Password confirmation does not match");
    }
    const generatedToken = UseTokenGenerator();
    const encryptedData = UseEncryptData({
      newPassword: newPassword,
      confirmPassword: newPasswordConfirm,
      mpassword: transactionCode,
      type: "panel",
      token: generatedToken,
    });
    const res = await axios.post(changePasswordApi, encryptedData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = res.data;
    if (data?.success) {
      setChangePassNotify(data?.result?.message);
      setTimeout(() => {
        setChangePassNotify("");
        localStorage.clear();
        navigate("/login");
      }, 2000);
    } else {
      setPassChangeErr(data?.error?.status[0]?.description);
    }
  };

  const dropdownRef = useRef();
  /* Close dropdown click outside the dropdown */
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setChangePassDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setChangePassDropdown]);
  return (
    <>
      <div
        id="__BVID__29___BV_modal_outer_"
        style={{ position: "absolute", zIndex: "1040" }}
      >
        <div
          id="__BVID__29"
          role="dialog"
          aria-describedby="__BVID__29___BV_modal_body_"
          className="modal fade show"
          style={{ display: "block" }}
          aria-modal="true"
        >
          <div className="modal-dialog modal-md">
            <span tabIndex="0"></span>
            <div
              id="__BVID__29___BV_modal_content_"
              tabIndex="-1"
              className="modal-content"
              ref={dropdownRef}
            >
              <header
                id="__BVID__29___BV_modal_header_"
                className="modal-header bg-default"
              >
                <h5 className="modal-title text-uppercase">Change Password</h5>
                <button
                  onClick={() => setChangePassDropdown(false)}
                  type="button"
                  data-dismiss="modal"
                  className="close"
                >
                  ×
                </button>
              </header>
              <div id="__BVID__29___BV_modal_body_" className="modal-body">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  data-vv-scope="ChangePassword"
                >
                  <div className="form-group">
                    <input
                      {...register("transactionCode", {
                        required: true,
                      })}
                      placeholder="Transaction Code"
                      data-vv-as="Transaction Code"
                      type="password"
                      name="transactionCode"
                      className={`form-control ${
                        errors.transactionCode?.type === "required"
                          ? "is-invalid"
                          : ""
                      }`}
                      aria-required="true"
                      aria-invalid="false"
                    />
                    {errors.transactionCode?.type === "required" && (
                      <small className="error">
                        Transaction Code is required.
                      </small>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      {...register("newPassword", {
                        required: true,
                        pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/,
                      })}
                      placeholder="New Password"
                      type="password"
                      data-vv-as="New Password"
                      name="newPassword"
                      className={`form-control ${
                        errors.newPassword?.type === "required"
                          ? "is-invalid"
                          : ""
                      }`}
                      aria-required="true"
                      aria-invalid="true"
                    />
                    {errors.newPassword?.type === "required" && (
                      <small className="error">New Password is required.</small>
                    )}
                    {errors.newPassword?.type === "pattern" && (
                      <small className="error">
                        New Password must contain at least: 1 uppercase letter,
                        1 lowercase letter, 1 number
                      </small>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      {...register("newPasswordConfirm", {
                        required: true,
                      })}
                      placeholder="Confirm New Password"
                      data-vv-as="Confirm Password"
                      type="password"
                      name="newPasswordConfirm"
                      className={`form-control ${
                        errors.newPasswordConfirm?.type === "required"
                          ? "is-invalid"
                          : ""
                      }`}
                      aria-required="true"
                      aria-invalid="true"
                    />
                    {errors.newPasswordConfirm?.type === "required" && (
                      <small className="error">New Password is required.</small>
                    )}

                    <small className="error">{error}</small>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">
                      Change Password
                      <i className="fas fa-chevron-circle-right ml-2"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <span tabIndex="0"></span>
          </div>
        </div>
        <div
          id="__BVID__29___BV_modal_backdrop_"
          className="modal-backdrop"
        ></div>
      </div>
      {changePassNotify && (
        <Success message={changePassNotify} setMessage={setChangePassNotify} />
      )}
      {passChangeErr && (
        <Error message={passChangeErr} setMessage={setPassChangeErr} />
      )}
    </>
  );
};

export default ChangePasswordDropdown;
