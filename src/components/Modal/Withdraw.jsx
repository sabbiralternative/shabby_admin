import { useEffect, useRef, useState } from "react";
import { config } from "../../utils/config.js";
import axios from "axios";
import UseDownLineData from "../../hooks/UseDownlineData.jsx";
import UseBalance from "../../hooks/UseBalance.jsx";
import UseTokenGenerator from "../../hooks/UseTokenGenerator.jsx";
import UseEncryptData from "../../hooks/UseEncryptData.jsx";

const Withdraw = ({
  withdrawModal,
  setWithdrawModal,
  setWithdrawSuccessNotify,
  setWithdrawErrorNotify,
  withdrawAccountType,
}) => {
  const modalRef = useRef();
  const downLineEditFormApi = config?.result?.endpoint?.downLineEditForm;
  const downLineEditApi = config?.result?.endpoint?.downLineEdit;
  const token = localStorage.getItem("adminToken");
  const [transactionCode, setTransactionCode] = useState("");
  const [amountOne, setAmountOne] = useState(null);
  const [amountTwo, setAmountTwo] = useState(null);
  const [remark, setRemark] = useState("");
  const [withdrawAmount, SetWithdrawAmount] = useState("");
  const [data, setData] = useState({});
  const [inputIsValid, setInputIsValid] = useState(false);
  const [, refetchDownLine] = UseDownLineData();
  const [, refetchBalance] = UseBalance();
 
  useEffect(() => {
    const getReferenceData = async () => {
      const generatedToken = UseTokenGenerator()
      const encryptedData = UseEncryptData({
        downlineId: withdrawAccountType,
        type: "balance",
        token: generatedToken,
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
  }, [token, downLineEditFormApi, withdrawAccountType]);

  const handleAmount = (e) => {
    const userOne = data?.amount + parseFloat(e);
    setAmountOne(userOne);
    const userTwo = data?.amount2 - parseFloat(e);
    setAmountTwo(userTwo);
  };


  const handleWithdrawSubmit = async (e) => {
    e.preventDefault();

    if (
      remark.length === 0 ||
      transactionCode.length === 0 ||
      withdrawAmount.length === 0
    ) {
      setInputIsValid(true);
      return;
    }


    const generatedToken = UseTokenGenerator();
    const encryptedData = UseEncryptData({
      downlineId: withdrawAccountType,
      type: "withdraw",
      mpassword: transactionCode,
      amount: withdrawAmount,
      remark: remark,
      token: generatedToken,
    });
    const res = await axios.post(downLineEditApi, encryptedData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = res.data;

    if (data.success) {
      refetchBalance();
      setWithdrawSuccessNotify(data?.result?.message);
      setWithdrawModal(!withdrawModal);
      refetchDownLine();
    } else {
      setWithdrawErrorNotify(data?.error?.status[0]?.description);
    }
  };

  /* Close modalRef modal click outside the modal */
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!modalRef.current.contains(e.target)) {
        setWithdrawModal(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setWithdrawModal]);
  return (
    <div
      id="__BVID__73___BV_modal_outer_"
      style={{ position: "absolute", zIndex: "1040" }}
    >
      <div
        id="__BVID__73"
        role="dialog"
        aria-describedby="__BVID__73___BV_modal_body_"
        className="modal fade show"
        aria-modal="true"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-md modal-dialog-scrollable">
          <span tabIndex="0"></span>
          <div
            id="__BVID__73___BV_modal_content_"
            tabIndex="-1"
            className="modal-content"
            ref={modalRef}
          >
            <header
              id="__BVID__73___BV_modal_header_"
              className="modal-header bg-danger"
            >
              <h5 className="modal-title text-uppercase text-white">
                Withdraw
              </h5>
              <button
                onClick={() => setWithdrawModal(!withdrawModal)}
                type="button"
                data-dismiss="modal"
                className="close text-white"
              >
                ×
              </button>
            </header>
            <div id="__BVID__73___BV_modal_body_" className="modal-body">
              {/*  <!----> */}
              <div className="tabs" id="__BVID__1801">
                {/*  <!----> */}
                <div className="">
                  <ul
                    role="tablist"
                    className="nav nav-tabs"
                    id="__BVID__1801__BV_tab_controls_"
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
                        id="__BVID__1802___BV_tab_button__"
                        aria-controls="__BVID__1802"
                      >
                        Withdraw
                      </a>
                    </li>
                    {/*     <!----> */}
                  </ul>
                </div>
                <div
                  className="tab-content text-muted"
                  id="__BVID__1801__BV_tab_container_"
                >
                  <div
                    role="tabpanel"
                    aria-hidden="false"
                    className="tab-pane active"
                    id="__BVID__1802"
                    aria-labelledby="__BVID__1802___BV_tab_button__"
                  >
                    <form
                      onSubmit={handleWithdrawSubmit}
                      data-vv-scope="userWithdrawFrm"
                    >
                      <div className="form-group row">
                        <label className="col-form-label col-4">
                          {" "}
                          {data?.userName}
                        </label>
                        <div className="col-8">
                          <div className="row">
                            <div className="col-6">
                              <input
                                placeholder="Amount"
                                type="text"
                                readOnly="readonly"
                                name="userWithdrawFrmloginusramount"
                                className="form-control txt-right"
                                defaultValue={data?.amount?.toFixed(2)}
                              />
                            </div>
                            <div className="col-6">
                              <input
                                
                                placeholder="Amount"
                                type="text"
                                readOnly="readonly"
                                name="userWithdrawFrmloginusrNamount"
                                className="form-control txt-right"
                                defaultValue={
                                  amountOne !== null && !isNaN(amountOne)
                              ? amountOne
                              : data?.amount
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
                                name="userWithdrawFrmusrnameamount"
                                className="form-control txt-right"
                                defaultValue={data?.amount2?.toFixed(2)}
                              />
                            </div>
                            <div className="col-6">
                              <input
                                 onChange={(e) => {
                              handleAmount(e.target.value);
                              SetWithdrawAmount(e.target.value);
                            }}
                                placeholder="Amount"
                                type="text"
                                readOnly="readonly"
                                name="userWithdrawFrmusrnameNamount"
                                className="form-control txt-right"
                                defaultValue={
                                  amountTwo !== null && !isNaN(amountTwo)
                                  ? amountTwo
                                  : data?.amount2
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
                              SetWithdrawAmount(e.target.value);
                            }}
                            placeholder="Amount"
                            type="number"
                            name="userWithdrawFrmamount"
                            className={`form-control txt-right ${
                              withdrawAmount.length < 1 && inputIsValid
                                ? "is-invalid"
                                : ""
                            } `}
                            aria-required="true"
                            aria-invalid="true"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-4">Remark</label>
                        <div className="col-8 form-group-feedback form-group-feedback-right">
                          <textarea
                            onChange={(e) => setRemark(e.target.value)}
                            placeholder="Remark"
                            name="userWithdrawFrmremark"
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
                            name="userWithdrawFrmmpassword"
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
                          <button type="submit" className="btn btn-danger">
                            submit
                            <i className="fas fa-sign-in-alt ml-1"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/*  <!----> */}
                </div>
              </div>
            </div>
            {/*    <!----> */}
          </div>
          <span tabIndex="0"></span>
        </div>
      </div>
      <div
        id="__BVID__73___BV_modal_backdrop_"
        className="modal-backdrop"
      ></div>
    </div>
  );
};

export default Withdraw;
