import { createContext, useEffect, useState } from "react";
import { config } from "../utils/config";

export const StateContext = createContext(null);
const StateProvider = ({ children }) => {
  const [loginSuccess, setLoginSuccess] = useState("");
  const [downLineId, setDownLineId] = useState("");
  const [searchId, setSearchId] = useState("");
  const [moreModalCount, setMoreModalCount] = useState("profile");
  const [moreModal, setMoreModal] = useState(false);
  const [moreModalSuccessNotify, setMoreModalSuccessNotify] = useState("");
  const [moreModalErrNotify, setMoreModalErrNotify] = useState("");
  const [changePassNotify, setChangePassNotify] = useState("");
  const [sidebarMobile, setSidebarMobile] = useState(false);

  const [logo, setLogo] = useState("");
  const assetsUrl = config?.result?.endpoint?.assets;
  const siteUrl = config?.result?.settings?.siteUrl;
  useEffect(() => {
    const logo = `${assetsUrl}/${siteUrl}/logo.png`;
    setLogo(logo);
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = `${assetsUrl}/${siteUrl}/theme.css`;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [siteUrl, assetsUrl]);

  const stateInfo = {
    loginSuccess,
    setLoginSuccess,
    downLineId,
    setDownLineId,
    searchId,
    setSearchId,
    moreModalCount,
    setMoreModalCount,
    moreModal,
    setMoreModal,
    moreModalSuccessNotify,
    setMoreModalSuccessNotify,
    moreModalErrNotify,
    setMoreModalErrNotify,
    changePassNotify,
    setChangePassNotify,
    sidebarMobile,
    setSidebarMobile,
    logo,
    setLogo,
  };
  return (
    <StateContext.Provider value={stateInfo}>{children}</StateContext.Provider>
  );
};

export default StateProvider;
