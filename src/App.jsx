import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import Success from "./components/Notification/Success";
import UseContextState from "./hooks/UseContextState";
import { config } from "./utils/config";

const App = () => {
  const { loginSuccess, setLoginSuccess } = UseContextState();
  const pageTitle = config?.result?.settings?.siteTitle;
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <div>
      {loginSuccess && (
        <Success message={loginSuccess} setMessage={setLoginSuccess} />
      )}
      <Navbar
      />
      <Sidebar />
      <div data-v-b00d14ae="" className="main-content">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default App;
