import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Success from "./components/Notification/Success";
import UseContextState from "./hooks/UseContextState";

const App = () => {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const { loginSuccess, setLoginSuccess } = UseContextState();
  return (
    <div
      className={`${toggleSidebar ? "sidebar-enable" : "vertical-collpsed"}`}
    >
      {loginSuccess && (
        <Success message={loginSuccess} setMessage={setLoginSuccess} />
      )}
      <Navbar
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
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
