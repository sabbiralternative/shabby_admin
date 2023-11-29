import { Link } from "react-router-dom";
import { config } from "../../utils/config";
import { useRef, useState } from "react";
import axios from "axios";
import BankTable from "./BankTable";
import { useQuery } from "@tanstack/react-query";
import UseExportToPdf from "../../hooks/UseExportToPdf";
import { DownloadTableExcel } from "react-export-table-to-excel";

const Bank = () => {
  const token = localStorage.getItem("token");
  const bankApi = config?.result?.endpoint?.Bank;
  const [searchId, setSearchId] = useState();
  const [transactionCode,setTransactionCode] = useState('')
  const { exportPdf } = UseExportToPdf();
  const tableRef = useRef(null);
 
  const { data, refetch } = useQuery({
    queryKey: ["bankData"],
    queryFn: async () => {
      const res = await axios.post(
        bankApi,
        {
          searchId: searchId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res?.data?.result;
      return data;
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    refetch();
  };

  return (
    <div data-v-b00d14ae="" className="page-content">
      {/*   <!----> */}
      <div data-v-b00d14ae="">
        <div data-v-b00d14ae="">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0 font-size-18">Bank</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to="/" className="" target="_self">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">
                      <span aria-current="location">Bank</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="row bank-panel">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="report-form mb-1">
                    <div className="row row5">
                      <div className="col-md-6 mb-2 search-form">
                        <form
                          onSubmit={handleSubmit}
                          className="ajaxFormSubmit"
                        >
                          <div className="d-inline-block form-group form-group-feedback form-group-feedback-right">
                            <input
                              onChange={(e) => setSearchId(e.target.value)}
                              type="text"
                              name="searchKey"
                              value={searchId}
                              placeholder="Search User"
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
                            onClick={()=> setSearchId('')}
                              type="button"
                              id="reset"
                              className="btn btn-light"
                            >
                              Reset
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-6 text-right">
                        <div className="d-inline-block">
                        <DownloadTableExcel
                          filename="Bank"
                          sheet="Bank"
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
                              exportPdf("#bank", "bank.pdf")
                            }
                          type="button" className="btn btn-danger">
                            <i className="fas fa-file-pdf"></i>
                          </button>
                        </div>
                        <form
                          data-vv-scope="transferAll"
                          method="post"
                          className="d-inline-block"
                        >
                          <div className="d-inline-block form-group form-group-feedback form-group-feedback-right">
                            <input
                             onChange={(e)=>setTransactionCode( e.target.value)}
                              type="password"
                              name="masterPassword"
                              placeholder="Transaction Code"
                              data-vv-as="Transaction Code"
                              className="form-control"
                              aria-required="true"
                              aria-invalid="false"
                            />
                          </div>
                        
                        </form>
                      </div>
                    </div>
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
                            id="__BVID__2360"
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
                    <BankTable data={data} transactionCode={transactionCode} refetch={refetch}  tableRef={tableRef} />
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

export default Bank;
