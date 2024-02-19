import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { config } from "../../utils/config";
import Error from "../Notification/Error";
import UseContextState from "../../hooks/UseContextState";

const VerificationLogin = () => {
  const inputs = useRef([]);
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const [errLogin, setErrLogin] = useState("");
  const authCode = localStorage.getItem("authCode");
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");
  const qrValidate = config?.result?.endpoint?.qrValidate;
  const { setLoginSuccess, logo } = UseContextState();
  const pageTitle = config?.result?.settings?.siteTitle;
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  useEffect(() => {
    if (inputs.current.length > 0) {
      inputs.current[0].focus();
    }
  }, []);

  const handleInput = async (index, e) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = e.target.value;
    setOtpValues(newOtpValues);
    if (e.target.value && index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    } else if (index === inputs.current.length - 1 && e.target.value) {
      const res = await axios.post(
        qrValidate,
        {
          code: otpValues.join(""),
          secret: authCode,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = res.data;
      if (result?.success) {
        setLoginSuccess(result?.message);
        navigate("/");
      } else {
        setErrLogin(result?.message);
        setOtpValues(["", "", "", "", "", ""]);
        inputs.current.forEach((input) => {
          input.value = "";
        });
        if (inputs.current.length > 0) {
          inputs.current[0].focus();
        }
      }
    }
  };
  return (
    <div className="login-auth">
      {errLogin && <Error message={errLogin} setMessage={setErrLogin} />}
      <div className="loginInner1 authentication">
        <div className="log-logo m-b-20 text-center">
          <img src={logo} className="logo-login" />
        </div>
        <div className="featured-box-login featured-box-secundary default">
          <h3 className="text-center">Security Code Verification</h3>
          <div className="mt-3 text-center">
            Enter 6-digit code from your security auth verification App
          </div>
          <form role="form" method="post" className="mt-3">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ display: "flex" }}>
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <input
                      ref={(el) => (inputs.current[index] = el)}
                      min="0"
                      max="9"
                      maxLength="1"
                      pattern="[0-9]"
                      type="tel"
                      className="otp-input"
                      onChange={(e) => handleInput(index, e)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerificationLogin;
