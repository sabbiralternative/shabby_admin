import { useEffect, useRef, useState } from "react";
import { config } from "../../utils/config";
import axios from "axios";
import UseDownLineData from "../../hooks/UseDownlineData";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";

const CreditReference = ({
  creditRefModal,
  setCreditRefModal,
  setCreditErrorNotify,
  setCreditSuccessNotify,
  creditRefAccountType,

}) => {
  const modalRef = useRef();
  const downLineEditFormApi = config?.result?.endpoint?.downLineEditForm;
  const downLineEditApi = config?.result?.endpoint?.downLineEdit;
  const token = localStorage.getItem("adminToken");
  const [newCredit, setNewCredit] = useState("");
  const [transactionCode, setTransactionCode] = useState("");
  const [data, setData] = useState({});
  const [inputIsValid, setInputIsValid] = useState(false);
  const [, refetchDownLine] = UseDownLineData();

  useEffect(() => {
    const getReferenceData = async () => {
      const generatedToken = UseTokenGenerator();
      const encryptedData = UseEncryptData({
        downlineId: creditRefAccountType,
        type: "creditReferance",
        token: generatedToken,
      });
      const res = await axios.post(downLineEditFormApi, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data;
      setData(data.result);
    };
    getReferenceData();
  }, [token, downLineEditFormApi, creditRefAccountType]);

  const handleReferenceSubmit = async (e) => {
    e.preventDefault();
    if (newCredit.length === 0 || transactionCode.length === 0) {
      setInputIsValid(true);
      return;
    }
    const generatedToken = UseTokenGenerator();
    const encryptedData = UseEncryptData({
      downlineId: creditRefAccountType,
      type: "creditReference",
      mpassword: transactionCode,
      amount: newCredit,
      remark: "",
      token: generatedToken,
    });
    const res = await axios.post(downLineEditApi, encryptedData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = res.data;

    if (data.success) {
      setCreditSuccessNotify(data?.result?.message);
      setCreditRefModal(!creditRefModal);
      refetchDownLine();
    } else {
      setCreditErrorNotify(data?.error?.status[0]?.description);
    }
  };

  /* Close modalRef modal click outside the modal */
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!modalRef.current.contains(e.target)) {
        setCreditRefModal(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setCreditRefModal]);

  return (
    <div
      id="__BVID__71___BV_modal_outer_"
      style={{ position: "absolute", zIndex: "1040" }}
    >
      <div
        id="__BVID__71"
        role="dialog"
        aria-describedby="__BVID__71___BV_modal_body_"
        className="modal fade show"
        aria-modal="true"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-lg">
          <span tabIndex="0"></span>
          <div
            id="__BVID__71___BV_modal_content_"
            tabIndex="-1"
            className="modal-content"
            ref={modalRef}
          >
            <header
              id="__BVID__71___BV_modal_header_"
              className="modal-header bg-warning"
            >
              <h5 className="modal-title text-uppercase text-white">
                Credit Referance
              </h5>
              <button
                onClick={() => setCreditRefModal(!creditRefModal)}
                type="button"
                data-dismiss="modal"
                className="close text-white"
              >
                ×
              </button>
            </header>
            <div
              id="__BVID__71___BV_modal_body_"
              className="modal-body credit-mdl"
            >
              {/*   <!----> */}
              <div className="tabs" id="__BVID__2235">
                {/*    <!----> */}
                <div className="">
                  <ul
                    role="tablist"
                    className="nav nav-tabs"
                    id="__BVID__2235__BV_tab_controls_"
                  >
                    {/*     <!----> */}
                    <li role="presentation" className="nav-item">
                      <a
                        role="tab"
                        aria-selected="true"
                        aria-setsize="3"
                        aria-posinset="1"
                        href="#"
                        target="_self"
                        className="nav-link active tab-bg-warning"
                        id="__BVID__2236___BV_tab_button__"
                        aria-controls="__BVID__2236"
                      >
                        <span>Credit </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-content text-muted"
                  id="__BVID__2235__BV_tab_container_"
                >
                  <div
                    role="tabpanel"
                    aria-hidden="false"
                    className="tab-pane active"
                    id="__BVID__2236"
                    aria-labelledby="__BVID__2236___BV_tab_button__"
                  >
                    <form
                      onSubmit={handleReferenceSubmit}
                      data-vv-scope="userCreditUpdate"
                      method="post"
                    >
                      <div className="form-group row">
                        <label className="col-form-label col-4">
                          Old Credit
                        </label>
                        <div className="col-8 form-group-feedback form-group-feedback-right">
                          <input
                            type="text"
                            name="userCreditUpdateamount"
                            className="form-control txt-right"
                            aria-required="true"
                            aria-invalid="false"
                            defaultValue={data?.creditReferance}
                            disabled
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-form-label col-4">
                          New Credit
                        </label>
                        <div className="col-8 form-group-feedback form-group-feedback-right">
                          <input
                            onChange={(e) => setNewCredit(e.target.value)}
                            placeholder="Amount"
                            type="number"
                            name="userCreditUpdateamount"
                            className={`form-control txt-right ${
                              (newCredit.length < 1 || newCredit < 0 )  && inputIsValid
                                ? "is-invalid"
                                : ""
                            } `}
                            defaultValue={newCredit}
                          />
                        </div>
                        {/*   <!-- is-invalid --> */}
                      </div>

                      <div className="form-group row">
                        <label className="col-form-label col-4">
                          Transaction Code
                        </label>
                        <div className="col-8 form-group-feedback form-group-feedback-right">
                          <input
                            onChange={(e) => setTransactionCode(e.target.value)}
                            placeholder="Transaction Code"
                            name="userCreditUpdatempassword"
                            type="password"
                            className={`form-control  ${
                              transactionCode.length < 1 && inputIsValid
                                ? "is-invalid"
                                : ""
                            }  `}
                            aria-required="true"
                            aria-invalid="false"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-12 text-right">
                          <button type="submit" className="btn btn-warning">
                            submit
                            <i className="fas fa-sign-in-alt ml-1"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="__BVID__71___BV_modal_backdrop_"
        className="modal-backdrop"
      ></div>
    </div>
  );
};

export default CreditReference;
