import { useRef, useState } from "react";
import UserHistoryTable from "./UserHistoryTable";
import { Link } from "react-router-dom";
import { config } from "../../../utils/config";
import axios from "axios";
import UseSearchUser from "../../../hooks/UseSearchUser";
import UseDatePicker from "../../../hooks/UseDatePicker";
import { DownloadTableExcel } from "react-export-table-to-excel";
import UseExportToPdf from "../../../hooks/UseExportToPdf";
import { DateRangePicker } from "rsuite";
const UserHistory = () => {
  const tableRef = useRef(null);
  const token = localStorage.getItem("token");
  const userHistoryApi = config?.result?.endpoint?.userHistory;
  const [userHistoryTab, setUserHistoryTab] = useState("login");
  const [searchId, setSearchId] = useState("");
  const [userHistoryData, setUserHistoryData] = useState([]);
  const { exportPdf } = UseExportToPdf();
  const {
    errSearchId,
    searchUser,
    setShowSearchId,
    showSearchId,
    users,
    setSearchUser,
  } = UseSearchUser();
  const { formattedEndDate, formattedStartDate, onChange, setDateRange } =
    UseDatePicker();

  /* Handle user history */
  const handleUserHistory = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      userHistoryApi,
      {
        searchId: searchId,
        type: userHistoryTab,
        fromdate: formattedStartDate,
        todate: formattedEndDate,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = res.data;
    if (data?.success) {
      setUserHistoryData(data?.result);
    }
  };


  return (
    <div data-v-b00d14ae="" className="page-content">
      {/* <!----> */}
      <div data-v-b00d14ae="">
        <div data-v-b00d14ae="">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0 font-size-18">User History</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to="/" className="">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">
                      <span aria-current="location">User History</span>
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
                  <div className="tabs" id="__BVID__1978">
                    {/*  <!----> */}
                    <div className="">
                      <ul
                        role="tablist"
                        className="nav nav-tabs"
                        id="__BVID__1978__BV_tab_controls_"
                      >
                        {/*   <!----> */}
                        <li
                          onClick={() => setUserHistoryTab("login")}
                          role="presentation"
                          className="nav-item"
                          style={{ cursor: "pointer" }}
                        >
                          <a
                            role="tab"
                            aria-selected="true"
                            aria-setsize="2"
                            aria-posinset="1"
                            className={`nav-link ${
                              userHistoryTab === "login"
                                ? "active tab-bg-primary"
                                : ""
                            } `}
                            id="__BVID__1979___BV_tab_button__"
                            aria-controls="__BVID__1979"
                          >
                            <span>Login History</span>
                          </a>
                        </li>
                        <li
                          onClick={() => setUserHistoryTab("password")}
                          role="presentation"
                          className="nav-item"
                          style={{ cursor: "pointer" }}
                        >
                          <a
                            role="tab"
                            tabIndex="-1"
                            aria-selected="false"
                            aria-setsize="2"
                            aria-posinset="2"
                            className={`nav-link ${
                              userHistoryTab === "password"
                                ? "active tab-bg-primary"
                                : ""
                            } `}
                            id="__BVID__2002___BV_tab_button__"
                            aria-controls="__BVID__2002"
                          >
                            <span>Change Password History</span>
                          </a>
                        </li>
                        {/*  <!----> */}
                      </ul>
                    </div>
                    <div
                      className="tab-content p-2 text-muted"
                      id="__BVID__1978__BV_tab_container_"
                    >
                      <div
                        role="tabpanel"
                        aria-hidden="false"
                        className="tab-pane active"
                        id="__BVID__1979"
                        aria-labelledby="__BVID__1979___BV_tab_button__"
                      >
                        <form
                          onSubmit={handleUserHistory}
                          data-vv-scope="InserUserAccount"
                        >
                          <div className="row row5">
                            <div className="form-group col-xl-3">
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
                                    onChange={(e) =>{
                                      setSearchUser(e.target.value)
                                    
                                     } }
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
                                    // value={searchId}
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
                                          {errSearchId}
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
                            {/* Date picker */}
                            <div className="form-group col-xl-3">
                              <div className="mx-datepicker mx-datepicker-range">
                                <div className="mx-input-wrapper">
                                  <DateRangePicker
                                    // className="mx-input block"
                                    editable
                                    onChange={onChange}
                                    defaultValue={[
                                      new Date(
                                        new Date().setDate(
                                          new Date().getDate() - 7
                                        )
                                      ),
                                      new Date(),
                                    ]}
                                    block
                                  />
                                  <i className="mx-icon-calendar">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 1024 1024"
                                      width="1em"
                                      height="1em"
                                    >
                                      <path d="M940.218182 107.054545h-209.454546V46.545455h-65.163636v60.50909H363.054545V46.545455H297.890909v60.50909H83.781818c-18.618182 0-32.581818 13.963636-32.581818 32.581819v805.236363c0 18.618182 13.963636 32.581818 32.581818 32.581818h861.090909c18.618182 0 32.581818-13.963636 32.581818-32.581818V139.636364c-4.654545-18.618182-18.618182-32.581818-37.236363-32.581819zM297.890909 172.218182V232.727273h65.163636V172.218182h307.2V232.727273h65.163637V172.218182h176.872727v204.8H116.363636V172.218182h181.527273zM116.363636 912.290909V442.181818h795.927273v470.109091H116.363636z"></path>
                                    </svg>
                                  </i>
                                </div>
                              </div>
                            </div>

                            <div className="form-group col-xl-6">
                              <button type="submit" className="btn btn-primary">
                                Load
                              </button>
                              <button
                                onClick={() => {
                                  setSearchId("");
                                  setDateRange((prevState) => ({
                                    ...prevState,
                                    startDate: new Date(
                                      new Date().setDate(
                                        new Date().getDate() - 7
                                      )
                                    ),
                                    endDate: new Date(),
                                  }));
                                }}
                                type="button"
                                id="reset"
                                className="btn btn-light"
                              >
                                Reset
                              </button>
                              <DownloadTableExcel
                                filename="Current Bets"
                                sheet="Bets"
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
                                  exportPdf("#user-history", "userHistory.pdf")
                                }
                                type="button"
                                className="btn btn-danger"
                              >
                                <i className="fas fa-file-pdf"></i>
                              </button>
                            </div>
                          </div>
                        </form>

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
                                  id="__BVID__1989"
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
                                  id="__BVID__1990"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="table-responsive mb-0">
                          <UserHistoryTable
                            userHistoryData={userHistoryData}
                            tableRef={tableRef}
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
        </div>
      </div>
    </div>
  );
};

export default UserHistory;
