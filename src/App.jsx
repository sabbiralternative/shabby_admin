import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import Success from "./components/Notification/Success";
import UseContextState from "./hooks/UseContextState";
import { config } from "./utils/config";
import disableDevtool from "disable-devtool";

const App = () => {
  const location = useLocation();
  const { loginSuccess, setLoginSuccess } = UseContextState();
  const pageTitle = config?.result?.settings?.siteTitle;
  const disabledDevtool = config?.result?.settings?.disabledDevtool;
  const navigate = useNavigate();
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  useEffect(() => {
    if (window.location.hostname != "localhost") {
      if (window.location.protocol !== "https:") {
        window.location.replace(
          `https://${window.location.hostname}${window.location.pathname}`
        );
      }
    }
  }, [location]);

  /* Disabled devtool based on settings */
  useEffect(() => {
    if (disabledDevtool) {
      disableDevtool({
        ondevtoolopen: (type) => {
          const info = "devtool opened!; type =" + type;
          if (info) {
            localStorage.clear();
            navigate("/login");
          }
        },
      });
    }
  }, [navigate, disabledDevtool]);

  return (
    <div>
      {loginSuccess && (
        <Success message={loginSuccess} setMessage={setLoginSuccess} />
      )}
      <Navbar />
      <Sidebar />
      <div data-v-b00d14ae="" className="main-content">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default App;
