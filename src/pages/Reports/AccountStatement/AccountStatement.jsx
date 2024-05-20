import { useRef, useState } from "react";
import UseDatePicker from "../../../hooks/UseDatePicker";
import UseSearchUser from "../../../hooks/UseSearchUser";
import AccountStatementTable from "./AccountStatementTable";
import { Link } from "react-router-dom";
import axios from "axios";
import UseExportToPdf from "../../../hooks/UseExportToPdf";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { DateRangePicker } from "rsuite";
import UseTokenGenerator from "../../../hooks/UseTokenGenerator";
import UseEncryptData from "../../../hooks/UseEncryptData";
import { API } from "../../../utils";

const AccountStatement = () => {
  const tableRef = useRef(null);
  const token = localStorage.getItem("adminToken");
  const [searchId, setSearchId] = useState("");
  const [showStatement, setShowStatement] = useState("1");
  const [statement, setStatement] = useState("");
  const [statementData, setStatementData] = useState([]);
  const {
    errSearchId,
    searchUser,
    setShowSearchId,
    showSearchId,
    users,
    setSearchUser,
  } = UseSearchUser();

  const { formattedEndDate, formattedStartDate, onChange } = UseDatePicker();
  const { exportPdf } = UseExportToPdf();

  const handleAccountStatement = async (e) => {
    e.preventDefault();

    const generatedToken = UseTokenGenerator();
    const encryptedData = UseEncryptData({
      searchId: searchId,
      fromdate: formattedStartDate,
      todate: formattedEndDate,
      type: showStatement,
      statement: statement,
      token: generatedToken,
    });
    const res = await axios.post(API.accountStatement, encryptedData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = res.data;

    if (data?.success) {
      setStatementData(data?.result);
    }
  };

  return (
    <div data-v-b00d14ae="" className="page-content">
      {/*  <!----> */}
      <div data-v-b00d14ae="">
        <div data-v-b00d14ae="">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0 font-size-18">Account Statement</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to="/" className="" target="_self">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">
                      <span aria-current="location">Account Statement</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="report-form mb-3">
                    <form
                      onSubmit={handleAccountStatement}
                      className="ajaxFormSubmit"
                    >
                      <div className="row row5">
                        <div className="col-lg-3">
                          <div
                            className="form-group user-lock-search"
                            style={{ position: "relative" }}
                          >
                            <label htmlFor="d-inline-block">
                              Search By Client Name
                            </label>

                            <div
                              tabIndex="-1"
                              role="combobox"
                              aria-owns="listbox-null"
                              className="multiselect"
                            >
                              <div className="multiselect__select"></div>

                              <div className="multiselect__tags">
                                <div
                                  className="multiselect__tags-wrap"
                                  style={{ display: "none" }}
                                ></div>
                                {/*   <!----> */}
                                <div
                                  className="multiselect__spinner"
                                  style={{ display: "none" }}
                                ></div>
                                <input
                                  onChange={(e) => {
                                    setSearchUser(e.target.value);
                                  }}
                                  name="text"
                                  type="text"
                                  autoComplete="off"
                                  spellCheck="false"
                                  placeholder="Select option"
                                  tabIndex="0"
                                  aria-controls="listbox-null"
                                  className="multiselect__input"
                                  style={{
                                    position: "absolute",
                                    padding: "0px",
                                  }}
                                  
                                  value={searchUser}
                                />
                                {/*   <!----> */}
                              </div>

                              <div
                                tabIndex="-1"
                                className="multiselect__content-wrapper"
                                style={{
                                  maxHeight: "300px",
                                  display: `${
                                    searchUser.length > 0 ? "block" : "none"
                                  }`,
                                }}
                              >
                                <ul
                                  role="listbox"
                                  id="listbox-null"
                                  className="multiselect__content"
                                  style={{ display: "block" }}
                                >
                                  {/* <!----> */}
                                  <li>
                                    {users?.success &&
                                      showSearchId &&
                                      users?.result?.length > 0 &&
                                      users?.result?.map((user, i) => {
                                      
                                        return (
                                          <span
                                            onClick={() => {
                                              setSearchId(user);
                                              setSearchUser(user)
                                              setShowSearchId(false);
                                            }}
                                            key={i}
                                            className="multiselect__option"
                                          >
                                            {user}
                                          </span>
                                        );
                                      })}
                                    {errSearchId && (
                                      <span className="multiselect__option">
                                        No elements found. Consider changing the
                                        search query.
                                      </span>
                                    )}
                                  </li>
                                  {!users && (
                                    <li>
                                      <span className="multiselect__option">
                                        List is empty.
                                      </span>
                                    </li>
                                  )}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <label>Select Date Range</label>
                          <div className="mb-3 mx-datepicker mx-datepicker-range">
                            <div className="mx-input-wrapper">
                              <DateRangePicker
                              format="dd-MM-yyyy"
                                editable
                                onChange={onChange}
                                defaultValue={[
                                  new Date(
                                    new Date().setDate(new Date().getDate() - 7)
                                  ),
                                  new Date(),
                                ]}
                                block
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="form-group">
                            <label>Type</label>
                            <select
                              className="form-control"
                              onChange={(e) => setShowStatement(e.target.value)}
                            >
                              <option value="1">All</option>
                              <option value="2">Deposit/Withdraw Report</option>
                              <option value="3">Game Report</option>
                            </select>
                          </div>
                        </div>
                        {showStatement === "2" && (
                          <div className="col-lg-2">
                            <div className="form-group">
                              <label>Statement</label>
                              <select
                                className="form-control"
                                onChange={(e) => setStatement(e.target.value)}
                              >
                                <option value="all">All</option>
                                <option value="allcredit">Credit - All</option>
                                <option value="creditupper">
                                  Credit - Upper
                                </option>
                                <option value="creditdown">
                                  Credit - Down
                                </option>
                                <option value="allbalance">Pts - All</option>
                                <option value="balanceupper">
                                  Pts - Upper
                                </option>
                                <option value="balancedown">Pts - Down</option>
                              </select>
                            </div>
                          </div>
                        )}
                        {showStatement === "3" && (
                          <div className="col-lg-2">
                            <div className="form-group">
                              <label>Statement</label>{" "}
                              <select
                                onChange={(e) => setStatement(e.target.value)}
                                className="form-control"
                              >
                                <option value="all">All</option>{" "}
                                <option value="sport">Sports</option>{" "}
                                <option value="casino">Casino</option>
                              </select>
                            </div>
                          </div>
                        )}

                        {/*  <!---->
                          <!----> */}
                      </div>
                      <div className="row row5">
                        <div className="col-lg-3">
                          <button
                            type="submit"
                            id="loaddata"
                            className="btn btn-primary"
                          >
                            Load
                          </button>
                          <button
                            onClick={() => {
                              setSearchId("");
                              // setStartDate("");
                              // setEndDate("");
                              setSearchUser("");
                              setShowStatement("");
                            }}
                            type="button"
                            id="reset"
                            className="btn btn-light"
                          >
                            Reset
                          </button>
                          <DownloadTableExcel
                            filename="Account Statement"
                            sheet="Account Statement"
                            currentTableRef={tableRef.current}
                          >
                            <div
                              id="export_1700561251835"
                              className="d-inline-block"
                            >
                              <button type="button" className="btn btn-success">
                                <i className="fas fa-file-excel"></i>
                              </button>
                            </div>
                          </DownloadTableExcel>

                          <button
                            onClick={() =>
                              exportPdf(
                                "#account-statement",
                                "accountStatement.pdf"
                              )
                            }
                            type="button"
                            className="btn btn-danger"
                          >
                            <i className="fas fa-file-pdf"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div
                        id="tickets-table_length"
                        className="dataTables_length"
                      >
                        <label className="d-inline-flex align-items-center">
                          Show&nbsp;
                          <select
                            className="custom-select custom-select-sm"
                            id="__BVID__1545"
                          >
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="75">75</option>
                            <option value="100">100</option>
                            <option value="125">125</option>
                            <option value="150">150</option>
                          </select>
                          &nbsp;entries
                        </label>
                      </div>
                    </div>
                    <div className="col-6 text-right">
                      <div
                        id="tickets-table_filter"
                        className="dataTables_filter text-md-right"
                      >
                        <label className="d-inline-flex align-items-center">
                          <input
                            type="search"
                            placeholder="Search..."
                            className="form-control form-control-sm ml-2 form-control"
                            id="__BVID__1546"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive mb-0">
                    <AccountStatementTable
                      statementData={statementData}
                      tableRef={tableRef}
                      searchUser={searchUser}
                    />
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
                            {/*  <!----><!----> */}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountStatement;
