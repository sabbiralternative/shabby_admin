import { useEffect, useRef } from "react";
import { config } from "../../../utils/config";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DownloadTableExcel } from "react-export-table-to-excel";
import UseExportToPdf from "../../../hooks/UseExportToPdf";
const UserAuthentication = () => {
  const tableRef = useRef(null)
  const userAuthenticationApi = config?.result?.endpoint?.userAuthentication;
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState([]);
  const { exportPdf } = UseExportToPdf();
  useEffect(() => {
    const getAllUser = async () => {
      const res = await axios.get(userAuthenticationApi, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data;
      if (data?.success) {
        setUsers(data?.result);
      }
    };
    getAllUser();
  }, [token, userAuthenticationApi]);

  return (
    <div data-v-b00d14ae="" className="page-content">
      {/*  <!----> */}
      <div data-v-b00d14ae="">
        <div data-v-b00d14ae="">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0 font-size-18">User Authentication</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to="/" className="">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">
                      <span aria-current="location">User Authentication</span>
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
                  <div className="row mb-3">
                    <div className="col-md-12">
                      <div className="d-inline-block">
                      <DownloadTableExcel
                          filename="User Authentication"
                          sheet="User"
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
                            exportPdf("#user-authentication", "user.pdf")
                          }
                        type="button" className="btn btn-danger">
                          <i className="fas fa-file-pdf"></i>
                        </button>
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
                            id="__BVID__52"
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
                            id="__BVID__53"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive mb-0">
                    <div className="table no-footer table-hover table-responsive-sm">
                      <table
                      ref={tableRef}
                        id="user-authentication"
                        role="table"
                        aria-busy="false"
                        aria-colcount="2"
                        className="table b-table table-bordered b-table-fixed"
                        aria-rowcount="36"
                      >
                        {/*    <!----><!----> */}
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
                              <div>Username</div>
                              <span className="sr-only">
                                (Click to sort ascending)
                              </span>
                            </th>
                            <th
                              role="columnheader"
                              scope="col"
                              tabIndex="0"
                              aria-colindex="2"
                              aria-sort="none"
                              className="position-relative"
                            >
                              <div>Authentication</div>
                              <span className="sr-only">
                                (Click to sort ascending)
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody role="rowgroup">
                          {/*   <!----> */}
                          {users?.map(({ authentication, username }, i) => {
                            return (
                              <tr
                                key={i}
                                role="row"
                                aria-rowindex="1"
                                className=""
                              >
                                <td aria-colindex="1" role="cell" className="">
                                  {username}
                                </td>
                                <td aria-colindex="2" role="cell" className="">
                                  {authentication}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                        {/*   <!----> */}
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
                              className="page-item disabled"
                              aria-hidden="true"
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
                              className="page-item disabled"
                              aria-hidden="true"
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
                                aria-setsize="2"
                                tabIndex="0"
                                className="page-link"
                              >
                                1
                              </button>
                            </li>
                            <li role="presentation" className="page-item">
                              <button
                                role="menuitemradio"
                                type="button"
                                aria-label="Go to page 2"
                                aria-checked="false"
                                aria-posinset="2"
                                aria-setsize="2"
                                tabIndex="-1"
                                className="page-link"
                              >
                                2
                              </button>
                            </li>
                            {/*   <!----><!----> */}
                            <li role="presentation" className="page-item">
                              <button
                                role="menuitem"
                                type="button"
                                tabIndex="-1"
                                aria-label="Go to next page"
                                className="page-link"
                              >
                                ›
                              </button>
                            </li>
                            <li role="presentation" className="page-item">
                              <button
                                role="menuitem"
                                type="button"
                                tabIndex="-1"
                                aria-label="Go to last page"
                                className="page-link"
                              >
                                »
                              </button>
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

export default UserAuthentication;
