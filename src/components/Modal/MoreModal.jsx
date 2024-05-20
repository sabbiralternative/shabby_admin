import UseContextState from "../../hooks/UseContextState";
import Profile from "./Profile";
import MoreModalTabs from "./MoreModalTabs";
import ChangePassword from "./ChangePassword";
import UserLock from "./UserLock";
import AccountHistory from "./AccountHistory";
import EditProfile from "./EditProfile";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";
import { API } from "../../utils";

const MoreModal = ({ moreModalAccountType }) => {
  const {
    moreModalCount,
    setMoreModalCount,
    moreModal,
    setMoreModal
  } = UseContextState();
  const modalRef = useRef();
  const token = localStorage.getItem("adminToken");
  const [profileData, setProfileData] = useState();

  /* Get profile data */
  useEffect(() => {
    if (
      moreModalCount === "accountHistory" ||
      moreModalCount === "profile" ||
      moreModalCount === "userLock" ||
      moreModalCount === "editProfile"
    ) {
      const getProfileData = async () => {
        const generatedToken = UseTokenGenerator();
        const encryptedData = UseEncryptData({
          downlineId: moreModalAccountType,
          type: moreModalCount,
          token: generatedToken,
        });
        const res = await axios.post(API.downLineEditForm, encryptedData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = res.data;
        
        if (data.success) {
          setProfileData(data?.result);
        }
      };
      getProfileData();
    }
  }, [moreModalAccountType, token, moreModalCount]);

  /* Close modalRef modal click outside the modal */
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!modalRef.current.contains(e.target)) {
        setMoreModal(!moreModal);
        setMoreModalCount("profile");
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [moreModal, setMoreModal, setMoreModalCount]);

  return (
    <div
      id="__BVID__1951___BV_modal_outer_"
      style={{ position: "absolute", zIndex: "1040" }}
    >
      <div
        id="__BVID__1951"
        role="dialog"
        aria-describedby="__BVID__1951___BV_modal_body_"
        className="modal fade show"
        aria-modal="true"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-xl modal-dialog-scrollable">
          <span tabIndex="0"></span>
          <div
            id="__BVID__1951___BV_modal_content_"
            tabIndex="-1"
            className="modal-content"
            ref={modalRef}
          >
            <header
              id="__BVID__1951___BV_modal_header_"
              className="modal-header bg-primary"
            >
              <h5 className="modal-title text-uppercase text-white">
                {moreModalAccountType}
              </h5>
              <button
                onClick={() => {
                  setMoreModal(!moreModal);
                  setMoreModalCount("profile");
                }}
                type="button"
                data-dismiss="modal"
                className="close text-white"
              >
                ×
              </button>
            </header>
            <div
              id="__BVID__1951___BV_modal_body_"
              className="modal-body theme-bg"
            >
              {/*    <!----> */}
              <div className="tabs" id="__BVID__2237">
                {/* <!----> */}
                <MoreModalTabs />
                {moreModalCount === "profile" && (
                  <Profile profileData={profileData} />
                )}
                {moreModalCount === "changePass" && (
                  <ChangePassword moreModalAccountType={moreModalAccountType} />
                )}
                {moreModalCount === "userLock" && (
                  <UserLock
                    profileData={profileData}
                    moreModalAccountType={moreModalAccountType}
                  />
                )}
                {moreModalCount === "accountHistory" && (
                  <AccountHistory
                    profileData={profileData}
                    moreModalAccountType={moreModalAccountType}
                  />
                )}
                {moreModalCount === "editProfile" && (
                  <EditProfile
                    profileData={profileData}
                    moreModalAccountType={moreModalAccountType}
                  />
                )}
              </div>
            </div>
            {/*  <!----> */}
          </div>
          <span tabIndex="0"></span>
        </div>
      </div>
      <div
        id="__BVID__1951___BV_modal_backdrop_"
        className="modal-backdrop"
      ></div>
    </div>
  );
};

export default MoreModal;
