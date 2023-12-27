import { useEffect, useState } from "react";
import { config } from "../../utils/config";
import UseContextState from "../../hooks/UseContextState";
import axios from "axios";
import UseDownLineData from "../../hooks/UseDownlineData";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";

const EditProfile = ({ profileData, moreModalAccountType }) => {
  const downLineEditApi = config?.result?.endpoint?.downLineEdit;
  const token = localStorage.getItem("adminToken");
  const [changePasswordLock, setChangePasswordLock] = useState(false);
  const [favoriteMaster, setFavoriteMaster] = useState(false);
  const [name, setName] = useState("");
  const [transactionCode, setTransactionCode] = useState("");
  const { setMoreModalSuccessNotify, setMoreModal, setMoreModalErrNotify} =
    UseContextState();
  const [, refetchDownLine] = UseDownLineData();

  useEffect(() => {
    profileData?.length > 0 &&
      profileData.map(({ changePasswordLock, favoriteMaster, name }) => {
        setName(name);
        if (changePasswordLock === 0) {
          setChangePasswordLock(false);
        } else {
          setChangePasswordLock(true);
        }

        if (favoriteMaster === 0) {
          setFavoriteMaster(false);
        } else {
          setFavoriteMaster(true);
        }
      });
  }, [profileData]);

  const handleChangeUserLock = async (e) => {
    e.preventDefault();
    const generatedToken = UseTokenGenerator()
      const encryptedData = UseEncryptData({
        downlineId: moreModalAccountType,
        type: "editProfile",
        name: name,
        changePasswordLock: changePasswordLock ? 1 : 0,
        favoriteMaster: favoriteMaster ? 1 : 0,
        mpassword: transactionCode,
        token:generatedToken
      })
    const res = await axios.post(
      downLineEditApi,encryptedData
      ,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = res.data;
    if (data?.success) {
      setMoreModalSuccessNotify(data?.result?.message);
      setMoreModal(false);
      refetchDownLine();
    } else {
      setMoreModalErrNotify(data?.error?.status[0]?.description);
    }
  };
  return (
    <div
      className="tab-content text-muted"
      id="__BVID__2237__BV_tab_container_"
    >
      <div
        role="tabpanel"
        aria-hidden="false"
        className="tab-pane active"
        id="__BVID__2263"
        aria-labelledby="__BVID__2263___BV_tab_button__"
      >
        <form onSubmit={handleChangeUserLock} data-vv-scope="editprofile">
          <div className="form-group row">
            <label className="col-form-label col-4">Full Name</label>
            <div className="col-8 form-group-feedback-right pl-0">
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="fname"
                className="form-control"
                aria-required="true"
                aria-invalid="false"
                defaultValue={name}
              />
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-form-label col-4">Change Password Lock</label>
            <div className="mb-1 custom-control custom-switch">
              <input
                onClick={() => setChangePasswordLock(!changePasswordLock)}
                type="checkbox"
                className="custom-control-input"
                value="true"
                id="__BVID__2265"
                checked={changePasswordLock ? true : false}
              />
              <label
                className="custom-control-label"
                htmlFor="__BVID__2265"
              ></label>
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-form-label col-4">Favorite Master</label>
            <div className="mb-1 custom-control custom-switch">
              <input
                onClick={() => setFavoriteMaster(!favoriteMaster)}
                type="checkbox"
                className="custom-control-input"
                value="true"
                id="__BVID__2279"
                checked={favoriteMaster ? true : false}
              />
              <label
                className="custom-control-label"
                htmlFor="__BVID__2279"
              ></label>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-4">Transaction Code</label>
            <div className="col-8 form-group-feedback-right pl-0">
              <input
                onChange={(e) => setTransactionCode(e.target.value)}
                placeholder="Transaction Code"
                type="password"
                name="mpass"
                className="form-control"
                aria-required="true"
                aria-invalid="false"
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-12 text-right">
              <button type="submit" className="btn btn-primary">
                submit
                <i className="fas fa-sign-in-alt ml-1"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
      {/*   <!----> */}
    </div>
  );
};

export default EditProfile;
