import { useEffect, useRef, useState } from "react";
import { config } from "../../utils/config";
import axios from "axios";
import UseDownLineData from "../../hooks/UseDownlineData";
import UseBalance from "../../hooks/UseBalance";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";

const Deposit = ({
  depositModal,
  setDepositModal,
  setDepositSuccessNotify,
  setDepositErrorNotify,
  depositAccountType,
}) => {
  const modalRef = useRef();
  const downLineEditFormApi = config?.result?.endpoint?.downLineEditForm;
  const downLineEditApi = config?.result?.endpoint?.downLineEdit;

  const token = localStorage.getItem("adminToken");
  const [transactionCode, setTransactionCode] = useState("");
  const [amountOne, setAmountOne] = useState("");
  const [amountTwo, setAmountTwo] = useState("");
  const [remark, setRemark] = useState("");
  const [depositAmount, SetDepositAmount] = useState("");
  const [data, setData] = useState({});
  const [inputIsValid, setInputIsValid] = useState(false);
  const [, refetchDownLine] = UseDownLineData();
  const [, refetchBalance] = UseBalance();
  useEffect(() => {
    const getReferenceData = async () => {
      const generatedToken = UseTokenGenerator()
      const encryptedData = UseEncryptData( {
        downlineId: depositAccountType,
        type: "balance",
        token:generatedToken
      })
      const res = await axios.post(
        downLineEditFormApi,
       encryptedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data;

      setData(data.result);
    };
    getReferenceData();
  }, [token, downLineEditFormApi, depositAccountType]);

  const handleAmount = (e) => {
    const userOne = data?.amount - parseFloat(e);
    setAmountOne(userOne);
    const userTwo = data?.amount2 + parseFloat(e);
    setAmountTwo(userTwo);
  };

  const handleDepositSubmit = async (e) => {
    e.preventDefault();
    const generatedToken = UseTokenGenerator()
      const encryptedData = UseEncryptData( {
        downlineId: depositAccountType,
        type: "deposit",
        mpassword: transactionCode,
        amount: depositAmount,
        remark: remark,
        token:generatedToken
      })
    if (
      remark.length === 0 ||
      transactionCode.length === 0 ||
      depositAmount.length === 0
    ) {
      setInputIsValid(true);
      return;
    }
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

    if (data.success) {
      refetchBalance();
      setDepositSuccessNotify(data?.result?.message);
      setDepositModal(!depositModal);
      refetchDownLine();
    } else {
      setDepositErrorNotify(data?.error?.status[0]?.description);
    }
  };

  /* Close modalRef modal click outside the modal */
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!modalRef.current.contains(e.target)) {
        setDepositModal(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setDepositModal]);
  return (
    <div
      id="__BVID__72___BV_modal_outer_"
      style={{ position: "absolute", zIndex: "1040" }}
    >
      <div
        id="__BVID__72"
        role="dialog"
        aria-describedby="__BVID__72___BV_modal_body_"
        className="modal fade show"
        aria-modal="true"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-md modal-dialog-scrollable">
          <span tabIndex="0"></span>
          <div
            id="__BVID__72___BV_modal_content_"
            tabIndex="-1"
            className="modal-content"
            ref={modalRef}
          >
            <header
              id="__BVID__72___BV_modal_header_"
              className="modal-header bg-success"
            >
              <h5 className="modal-title text-uppercase text-white">Deposit</h5>
              <button
                onClick={() => setDepositModal(!depositModal)}
                type="button"
                data-dismiss="modal"
                className="close text-white"
              >
                ×
              </button>
            </header>
            <div id="__BVID__72___BV_modal_body_" className="modal-body">
              {/*  <!----> */}
              <div className="tabs" id="__BVID__1791">
                {/*  <!----> */}
                <div className="">
                  <ul
                    role="tablist"
                    className="nav nav-tabs"
                    id="__BVID__1791__BV_tab_controls_"
                  >
                    {/*   <!----> */}
                    <li role="presentation" className="nav-item">
                      <a
                        role="tab"
                        aria-selected="true"
                        aria-setsize="1"
                        aria-posinset="1"
                        href="#"
                        target="_self"
                        className="nav-link active tab-bg-success"
                        id="__BVID__1792___BV_tab_button__"
                        aria-controls="__BVID__1792"
                      >
                        Deposit
                      </a>
                    </li>
                    {/*    <!----> */}
                  </ul>
                </div>
                <div
                  className="tab-content text-muted"
                  id="__BVID__1791__BV_tab_container_"
                >
                  <div
                    role="tabpanel"
                    aria-hidden="false"
                    className="tab-pane active"
                    id="__BVID__1792"
                    aria-labelledby="__BVID__1792___BV_tab_button__"
                  >
                    <form
                      onSubmit={handleDepositSubmit}
                      data-vv-scope="userdepositeMDL"
                    >
                      <div className="form-group row">
                        <label className="col-form-label col-4">
                          {data?.userName}
                        </label>
                        <div className="col-8">
                          <div className="row">
                            <div className="col-6">
                              <input
                                placeholder="Amount"
                                type="text"
                                readOnly="readonly"
                                name="userDipositeloginusramount"
                                className="form-control txt-right"
                                defaultValue={data?.amount}
                              />
                            </div>
                            <div className="col-6">
                              <input
                                placeholder="Amount"
                                type="text"
                                readOnly="readonly"
                                name="userDipositeloginusrNamount"
                                className="form-control txt-right"
                                defaultValue={
                                  amountOne ? amountOne : data?.amount
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-4">
                          {data?.userName2}
                        </label>
                        <div className="col-8">
                          <div className="row">
                            <div className="col-6">
                              <input
                                placeholder="Amount"
                                type="text"
                                readOnly="readonly"
                                name="userDipositeusrnameamount"
                                className="form-control txt-right"
                                defaultValue={data?.amount2}
                              />
                            </div>
                            <div className="col-6">
                              <input
                                placeholder="Amount"
                                type="text"
                                readOnly="readonly"
                                name="userDipositeusrnameNamount"
                                className="form-control txt-right"
                                defaultValue={
                                  amountTwo ? amountTwo : data?.amount2
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-form-label col-4">Amount</label>
                        <div className="col-8 form-group-feedback form-group-feedback-right">
                          <input
                            onChange={(e) => {
                              handleAmount(e.target.value);
                              SetDepositAmount(e.target.value);
                            }}
                            placeholder="Amount"
                            type="number"
                            name="userDipositeamount"
                            className={`form-control txt-right ${
                              depositAmount.length < 1 && inputIsValid
                                ? "is-invalid"
                                : ""
                            } `}
                            aria-required="true"
                            aria-invalid="false"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-4">Remark</label>
                        <div className="col-8 form-group-feedback form-group-feedback-right">
                          <textarea
                            onChange={(e) => setRemark(e.target.value)}
                            placeholder="Remark"
                            name="userDipositeremark"
                            className={`form-control ${
                              remark.length < 1 && inputIsValid
                                ? "is-invalid"
                                : ""
                            } `}
                            aria-required="true"
                            aria-invalid="true"
                          ></textarea>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-4">
                          Transaction Code
                        </label>
                        <div className="col-8 form-group-feedback form-group-feedback-right">
                          <input
                            onChange={(e) => setTransactionCode(e.target.value)}
                            placeholder="Transaction Code"
                            name="userDipositempassword"
                            type="password"
                            className={`form-control  ${
                              transactionCode.length < 1 && inputIsValid
                                ? "is-invalid"
                                : ""
                            }  `}
                            aria-required="true"
                            aria-invalid="true"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-12 text-right">
                          <button type="submit" className="btn btn-success">
                            submit
                            <i className="fas fa-sign-in-alt ml-1"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/*    <!----> */}
                </div>
              </div>
            </div>
            {/*  <!----> */}
          </div>
          <span tabIndex="0"></span>
        </div>
      </div>
      <div
        id="__BVID__72___BV_modal_backdrop_"
        className="modal-backdrop"
      ></div>
    </div>
  );
};

export default Deposit;
