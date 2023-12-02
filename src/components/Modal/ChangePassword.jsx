import { useState } from "react";
import UseContextState from "../../hooks/UseContextState";
import { config } from "../../utils/config";
import axios from "axios";
import UseDownLineData from "../../hooks/UseDownlineData";

const ChangePassword = ({ moreModalAccountType }) => {
  const downLineEditApi = config?.result?.endpoint?.downLineEdit;
  const token = localStorage.getItem("adminToken");
  const { setMoreModalSuccessNotify, setMoreModal, setMoreModalErrNotify } =
    UseContextState();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [transactionCode, setTransactionCode] = useState("");
  const [, refetchDownLine] = UseDownLineData();
  const handleChangePassword = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      downLineEditApi,
      {
        downlineId: moreModalAccountType,
        type: "password",
        password: password,
        confirmPassword: confirmPassword,
        mpassword: transactionCode,
      },
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
        id="__BVID__2240"
        aria-labelledby="__BVID__2240___BV_tab_button__"
      >
        <form
          onSubmit={handleChangePassword}
          data-vv-scope="UserChangePassword"
        >
          <div className="form-group row">
            <label className="col-form-label col-4">Password</label>
            <div className="col-8 form-group-feedback form-group-feedback-right">
              <input
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                name="userchangepasswordpassword"
                data-vv-as="Password"
                className="form-control"
                aria-required="true"
                aria-invalid="false"
              />
              {/* <!----> */}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-4">Confirm Password</label>
            <div className="col-8 form-group-feedback form-group-feedback-right">
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                type="password"
                name="userchangepasswordcpassword"
                data-vv-as="Confirm Password"
                className="form-control"
                aria-required="true"
                aria-invalid="false"
              />{" "}
              {/* <!----> */}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-4">Transaction Code</label>
            <div className="col-8 form-group-feedback form-group-feedback-right">
              <input
                onChange={(e) => setTransactionCode(e.target.value)}
                placeholder="Transaction Code"
                type="password"
                name="userchangepasswordmpassword"
                data-vv-as="Transaction Code"
                className="form-control"
                aria-required="true"
                aria-invalid="false"
              />{" "}
              {/* <!----> */}
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

      {/* <!----> */}
    </div>
  );
};

export default ChangePassword;
