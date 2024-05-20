import { createContext, useEffect, useState } from "react";
import { getSetApis } from "../utils/config";
import { API, settings } from "../utils";

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
  const [noticeLoaded, setNoticeLoaded] = useState(false);
  const [logo, setLogo] = useState("");

  useEffect(() => {
    getSetApis(setNoticeLoaded);
  }, [noticeLoaded]);

  useEffect(() => {
    if (noticeLoaded) {
      const logo = `${API.assets}/${settings.siteUrl}/logo.png`;
      setLogo(logo);
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = `${API.assets}/${settings.siteUrl}/theme.css`;
      document.head.appendChild(link);

      const FavIconLink = document.createElement("link");
      FavIconLink.rel = "icon";
      FavIconLink.type = "image/png";
      FavIconLink.href = `${API.assets}/${settings.siteUrl}/favicon.png`;
      document.head.appendChild(FavIconLink);

      return () => {
        document.head.removeChild(link);
      };
    }
  }, [noticeLoaded]);

  if (!noticeLoaded) {
    return;
  }

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
