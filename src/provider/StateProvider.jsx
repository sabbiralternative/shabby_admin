import { createContext, useEffect, useState } from "react";

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
  const [generatedToken, setGeneratedToken] = useState("");

  useEffect(() => {
    const getGeneratedTime = () => {
      const currentTimestamp = Math.floor(new Date().getTime() / 1000);
      const multipliedTimestamp = currentTimestamp * 274;
      const randomSixDigitNumber = Math.floor(100000 + Math.random() * 900000);
      const finalToken = `${randomSixDigitNumber}${multipliedTimestamp}`;
      setGeneratedToken(finalToken);
    };
    getGeneratedTime();
    const intervalId = setInterval(getGeneratedTime, 1000);
    return () => clearInterval(intervalId);
  }, []);
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
    generatedToken,
  };
  return (
    <StateContext.Provider value={stateInfo}>{children}</StateContext.Provider>
  );
};

export default StateProvider;
