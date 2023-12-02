import { useEffect, useState } from "react";
import { config } from "../../utils/config";
import { useNavigate } from "react-router-dom";
import Error from "../Notification/Error";
import UseContextState from "../../hooks/UseContextState";

const Login = () => {
  const loginApi = config?.result?.endpoint?.login;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const navigate = useNavigate();
  const { setLoginSuccess } = UseContextState();

  const pageTitle = config?.result?.settings?.siteTitle;
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    fetch(loginApi, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: userName,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.success) {
          localStorage.setItem("adminToken", data?.result?.token);
          localStorage.setItem("loginName", data?.result?.loginname);
          localStorage.setItem("role", data?.result?.role);
          const modal = [
            { banner: data?.result?.banner },
            { bannerTitle: data?.result?.bannerTitle },
          ];
          localStorage.setItem("modal", JSON.stringify(modal));
          if (
            localStorage.getItem("adminToken") &&
            localStorage.getItem("loginName") &&
            data?.result?.changePassword === false
          ) {
            setLoginSuccess("Login Success");
            navigate("/");
          } else if (
            localStorage.getItem("adminToken") &&
            localStorage.getItem("loginName") &&
            data?.result?.changePassword === true
          ) {
            navigate("/change-password-login");
          }
        } else {
          setErrorLogin(data?.error?.status[0]?.description);
        }
      });
  };

  return (
    <>
      <div className="vertical-collpsed login">
        <section className="login-mn">
          <div className="log-logo m-b-20">
            <img
              src="/logo.png"
              style={{
                maxWidth: "250px",
                maxHeight: "100px",
              }}
            />
          </div>
          <div className="log-fld">
            <h2 className="text-center">Sign In</h2>
            {/*  <!----> */}
            <form onSubmit={handleSubmitLogin} className="form-horizontal">
              <div className="form-group">
                {/*   <!----> */}
                <div>
                  <input
                    onChange={(e) => setUserName(e.target.value)}
                    name="username"
                    type="text"
                    placeholder="Enter Username"
                    className="form-control"
                  />{" "}
                  {/* <!----><!----><!----><!----> */}
                </div>
              </div>
              <div id="input-group-2" role="group" className="form-group">
                {/*  <!----> */}
                <div>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    className="form-control"
                  />{" "}
                  {/* <!----><!----><!----><!----> */}
                </div>
              </div>
              <div className="form-group text-center">
                <button
                  type="submit"
                  className="btn btn btn-submit btn-login btn-secondary"
                >
                  Sign In <i className="fas fa-sign-in-alt"></i>
                </button>
              </div>
              {/*    <!----> */}
              {/*    <!----> */}
            </form>
          </div>
        </section>
      </div>
      {/* Notification */}

      {errorLogin && <Error message={errorLogin} setMessage={setErrorLogin} />}
    </>
  );
};

export default Login;
