import { useEffect, useState } from "react";
import { config } from "../../utils/config";
import axios from "axios";
import UseContextState from "../../hooks/UseContextState";
import UseDownLineData from "../../hooks/UseDownlineData";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";

const UserLock = ({ profileData, moreModalAccountType }) => {
  const downLineEditApi = config?.result?.endpoint?.downLineEdit;
  const token = localStorage.getItem("adminToken");
  const [betLock, setBetLock] = useState(false);
  const [userLock, setUserLock] = useState(false);
  const [transactionCode, setTransactionCode] = useState("");
  const { setMoreModalSuccessNotify, setMoreModal, setMoreModalErrNotify} =
    UseContextState();
  const [, refetchDownLine] = UseDownLineData();
  useEffect(() => {
    profileData?.length > 0 &&
      profileData.map(({ betLock, userLock }) => {
   

        if (betLock === 0) {
          setBetLock(false);
        } else {
          setBetLock(true);
        }

        if (userLock === 0) {
          setUserLock(false);
        } else {
          setUserLock(true);
        }
      });
  }, [profileData]);

  const handleChangeUserLock = async (e) => {
    e.preventDefault();
    const generatedToken = UseTokenGenerator()
      const encryptedData = UseEncryptData( {
        downlineId: moreModalAccountType,
        type: "userLock",
        betLock: betLock ? 1 : 0,
        userLock: userLock ? 1 : 0,
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
        id="__BVID__2242"
        aria-labelledby="__BVID__2242___BV_tab_button__"
      >
        <form
          onSubmit={handleChangeUserLock}
          data-vv-scope="UserLock"
          method="post"
        >
          <div className="form-group row">
            <label className="col-form-label col-4">Bet lock </label>
            <div className="mb-1 custom-control custom-switch">
              <input
                onClick={() => setBetLock(!betLock)}
                type="checkbox"
                className="custom-control-input"
                value="true"
                id="__BVID__2244"
                checked={betLock ? true : false}
              />
              <label
                className="custom-control-label"
                htmlFor="__BVID__2244"
              ></label>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-4">User lock</label>
            <div className="mb-1 custom-control custom-switch">
              <input
                onClick={() => setUserLock(!userLock)}
                type="checkbox"
                className="custom-control-input"
                value="true"
                id="__BVID__2245"
                checked={userLock ? true : false}
              />
              <label
                className="custom-control-label"
                htmlFor="__BVID__2245"
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
                name="UserLockMpassword"
                className="form-control"
                aria-required="true"
                aria-invalid="false"
                required
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

export default UserLock;
