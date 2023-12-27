import { createContext, useState } from "react";

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

  };
  return (
    <StateContext.Provider value={stateInfo}>{children}</StateContext.Provider>
  );
};

export default StateProvider;
