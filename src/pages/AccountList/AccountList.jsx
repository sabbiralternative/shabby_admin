import UseContextState from "../../hooks/UseContextState";
import { useRef, useState } from "react";
import CreditReference from "../../components/Modal/CreditReference";
import Deposit from "../../components/Modal/Deposit";
import Withdraw from "../../components/Modal/Withdraw";
import Success from "../../components/Notification/Success";
import Error from "../../components/Notification/Error";
import { Link } from "react-router-dom";
import UseDownLineData from "../../hooks/UseDownlineData";
import MoreModal from "../../components/Modal/MoreModal";
import UseExportToPdf from "../../hooks/UseExportToPdf";
import { DownloadTableExcel } from "react-export-table-to-excel";
const AccountList = () => {
  const tableRef = useRef(null);
  const {
    setDownLineId,
    setSearchId,
    moreModal,
    setMoreModal,
    setMoreModalCount,
    moreModalSuccessNotify,
    setMoreModalSuccessNotify,
    moreModalErrNotify,
    setMoreModalErrNotify,
  } = UseContextState();
  const [creditRefModal, setCreditRefModal] = useState(false);
  // const [creditRefAccountType, setCreditRefAccountType] = useState("");
  const [depositModal, setDepositModal] = useState(false);
  const [depositAccountType, setDepositAccountType] = useState("");
  const [withdrawModal, setWithdrawModal] = useState(false);
  const [withdrawAccountType, setWithdrawAccountType] = useState(false);
  const [depositSuccessNotify, setDepositSuccessNotify] = useState(false);
  const [depositErrorNotify, setDepositErrorNotify] = useState(false);
  const [withdrawSuccessNotify, setWithdrawSuccessNotify] = useState(false);
  const [withdrawErrorNotify, setWithdrawErrorNotify] = useState(false);
  const [creditSuccessNotify, setCreditSuccessNotify] = useState(false);
  const [creditErrorNotify, setCreditErrorNotify] = useState(false);
  const [moreModalAccountType, setMoreModalAccountType] = useState("");
  const [data, refetchDownLine, setSearchUser,searchUser] = UseDownLineData();
  const { exportPdf } = UseExportToPdf();

  const handleRefetchDownLine = (downLine) => {
    if (downLine.hasDownline) {
      setDownLineId(downLine?.username);
      setSearchId("");
      window.open(`/admin/user/${downLine?.username}`, "_blank");
    }
  };

  const handleDownLoadData = (e) => {
    e.preventDefault();
    refetchDownLine();
  };
console.log(data);
  return (
    <div data-v-b00d14ae="" className="page-content">
      {/*   <!----> */}
      <div data-v-b00d14ae="">
        <div data-v-b00d14ae="">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0 font-size-18">Account List</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to="/" className="">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">
                      <span aria-current="location">Account List</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="row account-list">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="row row5">
                    <div className="col-md-6 mb-2 search-form">
                      <form
                        onSubmit={handleDownLoadData}
                        className="ajaxFormSubmit"
                      >
                        <div className="d-inline-block form-group form-group-feedback form-group-feedback-right">
                          <input
                            onChange={(e) => setSearchUser(e.target.value)}
                            type="text"
                            name="searchKey"
                            placeholder="Search User"
                            value={searchUser}
                            className="form-control"
                          />
                        </div>
                        <div className="d-inline-block">
                          <button
                            type="submit"
                            id="submit"
                            className="btn btn-primary"
                          >
                            Load
                          </button>
                          <button

                          onClick={()=> setSearchUser('')}
                            type="button"
                            id="reset"
                            className="btn btn-light"
                          >
                            Reset
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-6 text-right mb-2">
                      <div className="d-inline-block mr-2">
                        <DownloadTableExcel
                          filename="Account List"
                          sheet="Account"
                          currentTableRef={tableRef.current}
                        >
                          <div
                            id="export_1699264657226"
                            className="d-inline-block"
                          >
                            <button
                              type="button"
                              className="btn mr-1 btn-success"
                            >
                              <i className="fas fa-file-excel"></i>
                            </button>
                          </div>
                        </DownloadTableExcel>

                        <button
                          onClick={() =>
                            exportPdf("#account-list", "accountList.pdf")
                          }
                          type="button"
                          className="btn btn-danger"
                        >
                          <i className="fas fa-file-pdf"></i>
                        </button>
                      </div>
                      <div className="d-inline-block">
                        <Link to="/createAccount" className="btn btn-success">
                          <i aria-hidden="true" className="fa fa-plus"></i>
                          CREATE ACCOUNT
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <div
                        id="tickets-table_length"
                        className="dataTables_length"
                      >
                        <label className="d-inline-flex align-items-center">
                          Show&nbsp;
                          <select
                            className="custom-select custom-select-sm"
                            id="__BVID__1667"
                          >
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="250">250</option>
                            <option value="500">500</option>
                            <option value="750">750</option>
                            <option value="1000">1000</option>
                          </select>
                          &nbsp;entries
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive mb-0">
                    <div className="table no-footer table-responsive-sm">
                      <table
                        ref={tableRef}
                        id="account-list"
                        role="table"
                        aria-busy="false"
                        aria-colcount="12"
                        className="table b-table"
                      >
                        {/* <!----><!----> */}
                        <thead role="rowgroup" className="">
                          {/*  <!----> */}
                          <tr role="row" className="">
                            <th
                              role="columnheader"
                              scope="col"
                              tabIndex="0"
                              aria-colindex="1"
                              aria-sort="none"
                              className="position-relative"
                            >
                              <div>User Name</div>
                              <span className="sr-only">
                                (Click to sort ascending)
                              </span>
                            </th>
                           {/*  <th
                              role="columnheader"
                              scope="col"
                              tabIndex="0"
                              aria-colindex="2"
                              aria-sort="none"
                              className="position-relative text-right"
                            >
                              <div>CR</div>
                              <span className="sr-only">
                                (Click to sort ascending)
                              </span>
                            </th> */}
                            <th
                              role="columnheader"
                              scope="col"
                              tabIndex="0"
                              aria-colindex="3"
                              aria-sort="none"
                              className="position-relative text-right"
                            >
                              <div>Pts</div>
                              <span className="sr-only">
                                (Click to sort ascending)
                              </span>
                            </th>
                            <th
                              role="columnheader"
                              scope="col"
                              tabIndex="0"
                              aria-colindex="4"
                              aria-sort="none"
                              className="position-relative text-right"
                            >
                              <div>Client(P/L)</div>
                              <span className="sr-only">
                                (Click to sort ascending)
                              </span>
                            </th>

                            <th
                              role="columnheader"
                              scope="col"
                              aria-colindex="6"
                              className="text-right"
                            >
                              <div>Exposure</div>
                            </th>
                            <th
                              role="columnheader"
                              scope="col"
                              aria-colindex="7"
                              className="text-right"
                            >
                              <div>Available Pts</div>
                            </th>
                            <th
                              role="columnheader"
                              scope="col"
                              aria-colindex="8"
                              className=""
                            >
                              <div>B st</div>
                            </th>
                            <th
                              role="columnheader"
                              scope="col"
                              aria-colindex="9"
                              className=""
                            >
                              <div>U st</div>
                            </th>
                            <th
                              role="columnheader"
                              scope="col"
                              aria-colindex="10"
                              className=""
                            >
                              <div>PName</div>
                            </th>
                            <th
                              role="columnheader"
                              scope="col"
                              tabIndex="0"
                              aria-colindex="11"
                              aria-sort="none"
                              className="position-relative"
                            >
                              <div>Account Type</div>
                              <span className="sr-only">
                                (Click to sort ascending)
                              </span>
                            </th>
                            <th
                              role="columnheader"
                              scope="col"
                              aria-colindex="12"
                              className=""
                            >
                              <div>Action</div>
                            </th>
                          </tr>
                        </thead>

                        <tbody role="rowgroup">
                          {/*        <!----> */}
                          {data?.map((downLineData, i) => {
                            return (
                              <tr key={i} role="row" className="">
                                <td
                                  onClick={() =>
                                    handleRefetchDownLine(downLineData)
                                  }
                                  aria-colindex="1"
                                  role="cell"
                                  className=""
                                >
                                  <span title="aaaa">
                                    {downLineData?.username}
                                  </span>
                                </td>
                              {/*   <td aria-colindex="2" role="cell" className="">
                                  <p className="text-right mb-0 cp text-warning">
                                    {downLineData?.creditReferance}
                                  </p>
                                </td> */}
                                <td aria-colindex="3" role="cell" className="">
                                  <p className="text-right mb-0">
                                    {downLineData?.balance}
                                  </p>
                                </td>
                                <td aria-colindex="4" role="cell" className="">
                                  <p className="text-right mb-0">
                                    {downLineData?.pnl}
                                  </p>
                                </td>

                                <td
                                  aria-colindex="6"
                                  role="cell"
                                  className="text-right"
                                >
                                  <p className="mb-0 text-right">
                                    {downLineData?.exposure}
                                  </p>
                                </td>
                                <td aria-colindex="7" role="cell" className="">
                                  <p className="text-right mb-0">
                                    {downLineData?.availableBalance}
                                  </p>
                                </td>
                                <td aria-colindex="8" role="cell" className="">
                                  <div className="mb-1 custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      disabled="disabled"
                                      className="custom-control-input"
                                      value="true"
                                      id="__BVID__1695"
                                      checked={
                                        downLineData?.bettingStatus == 1
                                          ? false
                                          : true
                                      }
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="__BVID__1695"
                                    ></label>
                                  </div>
                                </td>
                                <td aria-colindex="9" role="cell" className="">
                                  <div className="mb-1 custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      disabled="disabled"
                                      className="custom-control-input"
                                      value="true"
                                      id="__BVID__1696"
                                      checked={
                                        downLineData?.userStatus == 1
                                          ? false
                                          : true
                                      }
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="__BVID__1696"
                                    ></label>
                                  </div>
                                </td>
                                <td aria-colindex="10" role="cell" className="">
                                  <p className="text-left mb-0">
                                    {downLineData?.pt}
                                  </p>
                                </td>
                                <td aria-colindex="11" role="cell" className="">
                                  {downLineData?.accountType}
                                </td>
                                <td aria-colindex="12" role="cell" className="">
                                  <div role="group" className="btn-group">
                                    {/* <button
                                      onClick={() => {
                                        setCreditRefModal(!creditRefModal);
                                        setCreditRefAccountType(
                                          downLineData?.username
                                        );
                                      }}
                                      type="button"
                                      className="btn btn-warning"
                                    >
                                      C
                                    </button> */}

                                    <button
                                      onClick={() => {
                                        setDepositModal(!depositModal);
                                        setDepositAccountType(
                                          downLineData?.username
                                        );
                                      }}
                                      type="button"
                                      className="btn btn-success"
                                    >
                                      D
                                    </button>
                                    <button
                                      onClick={() => {
                                        setWithdrawModal(!withdrawModal);
                                        setWithdrawAccountType(
                                          downLineData?.username
                                        );
                                      }}
                                      type="button"
                                      className="btn btn-danger"
                                    >
                                      W
                                    </button>
                                    <button
                                      onClick={() => {
                                        setMoreModal(!moreModal);
                                        setMoreModalCount("profile");
                                        setMoreModalAccountType(
                                          downLineData?.username
                                        );
                                      }}
                                      type="button"
                                      className="btn btn-info"
                                    >
                                      More
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}

                         {
                          data?.length === 0 && (
                            <tr role="row" className="b-table-empty-row"><td colSpan="12" role="cell" className=""><div role="alert" aria-live="polite"><div className="text-center my-2">There are no records to show</div></div></td></tr>
                          )
                         }

                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="row pt-3">
                    <div className="col">
                      <div className="dataTables_paginate paging_simple_numbers float-right">
                        <ul className="pagination pagination-rounded mb-0">
                          <ul
                            role="menubar"
                            aria-disabled="false"
                            aria-label="Pagination"
                            className="pagination dataTables_paginate paging_simple_numbers my-0 b-pagination justify-content-end"
                          >
                            <li
                              role="presentation"
                              aria-hidden="true"
                              className="page-item disabled"
                            >
                              <span
                                role="menuitem"
                                aria-label="Go to first page"
                                aria-disabled="true"
                                className="page-link"
                              >
                                «
                              </span>
                            </li>
                            <li
                              role="presentation"
                              aria-hidden="true"
                              className="page-item disabled"
                            >
                              <span
                                role="menuitem"
                                aria-label="Go to previous page"
                                aria-disabled="true"
                                className="page-link"
                              >
                                ‹
                              </span>
                            </li>
                            {/* <!----><!----> */}
                            <li
                              role="presentation"
                              className="page-item active"
                            >
                              <button
                                role="menuitemradio"
                                type="button"
                                aria-label="Go to page 1"
                                aria-checked="true"
                                aria-posinset="1"
                                aria-setsize="1"
                                tabIndex="0"
                                className="page-link"
                              >
                                1
                              </button>
                            </li>
                            {/*    <!----><!----> */}
                            <li
                              role="presentation"
                              aria-hidden="true"
                              className="page-item disabled"
                            >
                              <span
                                role="menuitem"
                                aria-label="Go to next page"
                                aria-disabled="true"
                                className="page-link"
                              >
                                ›
                              </span>
                            </li>
                            <li
                              role="presentation"
                              aria-hidden="true"
                              className="page-item disabled"
                            >
                              <span
                                role="menuitem"
                                aria-label="Go to last page"
                                aria-disabled="true"
                                className="page-link"
                              >
                                »
                              </span>
                            </li>
                          </ul>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*  <!---->
                    <!---->
                    <!---->
                    <!---->
                    <!----> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {creditRefModal && (
        <CreditReference
          creditRefModal={creditRefModal}
          setCreditRefModal={setCreditRefModal}
          setCreditSuccessNotify={setCreditSuccessNotify}
          setCreditErrorNotify={setCreditErrorNotify}
          // creditRefAccountType={creditRefAccountType}
        />
      )}
      {creditSuccessNotify && (
        <Success
          message={creditSuccessNotify}
          setMessage={setCreditSuccessNotify}
        />
      )}
      {creditErrorNotify && (
        <Error message={creditErrorNotify} setMessage={setCreditErrorNotify} />
      )}

      {/* deposit */}
      {depositModal && (
        <Deposit
          depositModal={depositModal}
          setDepositModal={setDepositModal}
          depositSuccessNotify={depositSuccessNotify}
          setDepositSuccessNotify={setDepositSuccessNotify}
          depositErrorNotify={depositErrorNotify}
          setDepositErrorNotify={setDepositErrorNotify}
          depositAccountType={depositAccountType}
        />
      )}
      {depositSuccessNotify && (
        <Success
          message={depositSuccessNotify}
          setMessage={setDepositSuccessNotify}
        />
      )}
      {depositErrorNotify && (
        <Error
          message={depositErrorNotify}
          setMessage={setDepositErrorNotify}
        />
      )}
      {/* Withdraw */}
      {withdrawModal && (
        <Withdraw
          withdrawModal={withdrawModal}
          setWithdrawModal={setWithdrawModal}
          setWithdrawSuccessNotify={setWithdrawSuccessNotify}
          setWithdrawErrorNotify={setWithdrawErrorNotify}
          withdrawAccountType={withdrawAccountType}
        />
      )}
      {withdrawSuccessNotify && (
        <Success
          message={withdrawSuccessNotify}
          setMessage={setWithdrawSuccessNotify}
        />
      )}
      {withdrawErrorNotify && (
        <Error
          message={withdrawErrorNotify}
          setMessage={setWithdrawErrorNotify}
        />
      )}

      {moreModal && <MoreModal moreModalAccountType={moreModalAccountType} />}
      {moreModalSuccessNotify && (
        <Success
          message={moreModalSuccessNotify}
          setMessage={setMoreModalSuccessNotify}
        />
      )}
      {moreModalErrNotify && (
        <Error
          message={moreModalErrNotify}
          setMessage={setMoreModalErrNotify}
        />
      )}
    </div>
  );
};

export default AccountList;
