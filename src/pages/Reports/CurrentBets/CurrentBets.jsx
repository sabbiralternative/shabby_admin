import { useEffect, useRef, useState } from "react";
import CurrentBetsTable from "./CurrentBetsTable";
import { Link } from "react-router-dom";
import { config } from "../../../utils/config";
import axios from "axios";
import { DownloadTableExcel } from "react-export-table-to-excel";
import UseExportToPdf from "../../../hooks/UseExportToPdf";
const CurrentBets = () => {
  const tableRef = useRef(null);
  const { exportPdf } = UseExportToPdf();
  const currentBetsApi = config?.result?.endpoint?.currentBets;
  const token = localStorage.getItem("adminToken");
  const [betsType, setBetsType] = useState("sports");
  const [betsData, setBetsData] = useState([]);
  const [filteredBetsData, setFilteredBetsData] = useState([]);
  const [filterBetsType, setFilterBetsType] = useState("all");

  const handleCurrentBets = async () => {
    const res = await axios.post(
      currentBetsApi,
      {
        type: betsType,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = res.data;
    console.log(data);
    if (data?.success) {
      setBetsData(data?.result);
    }
  };

  /* Filter sports */
  useEffect(() => {
    if (filterBetsType !== "all" && filterBetsType !== "") {
      const filterLayBack = betsData.filter(
        (game) => game.betType === filterBetsType
      );
      setFilteredBetsData(filterLayBack);
    } else if (filterBetsType === "all") {
      setFilteredBetsData(betsData);
    }
  }, [filterBetsType, betsData]);

  /* Get total amount */
  let totalAmount = 0;
  for (const sport of filteredBetsData) {
    totalAmount = totalAmount + sport?.amount;
  }

  return (
    <div data-v-b00d14ae="" className="page-content">
      <div data-v-b00d14ae="">
        <div data-v-b00d14ae="">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0 font-size-18">Current Bets</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to="/" className="" target="_self">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">
                      <span aria-current="location">Current Bets</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="casino-report-tabs">
            <ul className="nav nav-tabs">
              <li onClick={() => setBetsType("sports")} className="nav-item">
                <a
                  data-toggle="tab"
                  style={{ cursor: "pointer" }}
                  className={`nav-link ${
                    betsType === "sports" ? "active" : ""
                  }`}
                >
                  Sports
                </a>
              </li>

              <li onClick={() => setBetsType("casino")} className="nav-item">
                <a
                  data-toggle="tab"
                  style={{ cursor: "pointer" }}
                  className={`nav-link ${
                    betsType === "casino" ? "active" : ""
                  }`}
                >
                  Casino
                </a>
              </li>
            </ul>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="report-form mb-3 row align-items-center">
                    <div className="col-md-4 col-lg-3">
                      {betsType === "sports" && (
                        <>
                          <div className="custom-control custom-radio custom-control-inline">
                            <input
                              type="radio"
                              id="customRadio"
                              name="example"
                              value="matchbet"
                              className="custom-control-input"
                            />
                            <label
                              htmlFor="customRadio"
                              className="custom-control-label"
                            >
                              Matched
                            </label>
                          </div>
                          <div className="custom-control custom-radio custom-control-inline">
                            <input
                              type="radio"
                              id="customRadio2"
                              name="example"
                              value="deletebet"
                              className="custom-control-input"
                            />
                            <label
                              htmlFor="customRadio2"
                              className="custom-control-label"
                            >
                              Deleted
                            </label>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="col-md-8 col-lg-4">
                      <div className="custom-control custom-radio custom-control-inline pl-0">
                        <div className="custom-control custom-radio custom-control-inline">
                          <input
                            onClick={(e) => setFilterBetsType(e.target.value)}
                            type="radio"
                            id="soda-all"
                            name="bettype"
                            value="all"
                            className="custom-control-input"
                            style={{ cursor: "pointer" }}
                          />
                          <label
                            htmlFor="soda-all"
                            className="custom-control-label"
                          >
                            All
                          </label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                          <input
                            onClick={(e) => setFilterBetsType(e.target.value)}
                            type="radio"
                            id="soda-back"
                            name="bettype"
                            value="Back"
                            className="custom-control-input"
                            style={{ cursor: "pointer" }}
                          />
                          <label
                            htmlFor="soda-back"
                            className="custom-control-label"
                          >
                            Back
                          </label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                          <input
                            onClick={(e) => setFilterBetsType(e.target.value)}
                            type="radio"
                            id="soda-lay"
                            name="bettype"
                            value="Lay"
                            className="custom-control-input"
                          />
                          <label
                            htmlFor="soda-lay"
                            className="custom-control-label"
                          >
                            Lay
                          </label>
                        </div>
                      </div>
                      <div className="custom-control-inline">
                        <button
                          onClick={handleCurrentBets}
                          title="Refresh Data"
                          type="button"
                          className="btn mr-2 btn-primary"
                        >
                          Load
                        </button>
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
                            exportPdf("#current-bets", "currentBets.pdf")
                          }
                          type="button"
                          className="btn btn-danger"
                        >
                          <i className="fas fa-file-pdf"></i>
                        </button>
                      </div>
                    </div>

                    <div className="col-md-12 col-lg-5 text-right">
                      <div className="custom-control-inlinemr-0 mt-1">
                        <h5>
                          Total Soda:{" "}
                          <span className="mr-2">
                            {filteredBetsData?.length}
                          </span>{" "}
                          Total Amount: <span>{totalAmount}</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="row w-100">
                    <div className="col-6">
                      <div
                        id="tickets-table_length"
                        className="dataTables_length"
                      >
                        <label className="d-inline-flex align-items-center">
                          Show&nbsp;
                          <select
                            className="custom-select custom-select-sm"
                            id="__BVID__1624"
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
                            id="__BVID__1625"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive mb-0">
                    <CurrentBetsTable
                      filteredBetsData={filteredBetsData}
                      betsType={betsType}
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
                            {/* <!----><!----> */}
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

export default CurrentBets;
