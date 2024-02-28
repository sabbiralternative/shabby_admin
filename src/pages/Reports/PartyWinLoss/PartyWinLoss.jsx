import { useRef, useState } from "react";
import { config } from "../../../utils/config";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import UseExportToPdf from "../../../hooks/UseExportToPdf";
import { DownloadTableExcel } from "react-export-table-to-excel";
import UseTokenGenerator from "../../../hooks/UseTokenGenerator";
import UseEncryptData from "../../../hooks/UseEncryptData";
const PartyWinLoss = () => {
  const tableRef = useRef(null);
  const partyWinLossApi = config?.result?.endpoint?.partyWinLoss;
  const token = localStorage.getItem("adminToken");
  const { register, handleSubmit } = useForm();
  const [partyWinLossData, setPartyWinLossData] = useState([]);
  const { exportPdf } = UseExportToPdf();


  const onSubmit = async ({ partyWinLossType }) => {
    const generatedToken = UseTokenGenerator();
      const encryptedData = UseEncryptData({
        type: partyWinLossType,
        token:generatedToken
      });
    const res = await axios.post(
      partyWinLossApi,encryptedData
      ,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = res.data;
    if (data?.status) {
      setPartyWinLossData(data?.result);
  
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
                <h4 className="mb-0 font-size-18">Party Win Loss</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to="/" className="">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">
                      <span aria-current="location">Profit Loss</span>
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
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    data-vv-scope="InserUserAccount"
                  >
                    <div className="row row5">
                      <div className="form-group col-md-3">
                        <select
                          {...register("partyWinLossType", { required: true })}
                          className="custom-select"
                          id="__BVID__1844"
                        >
                          <option value="all">All</option>
                          <option value="user">User</option>
                        </select>
                      </div>
                      <div className="form-group col-md-9">
                        <button type="submit" className="btn btn-primary">
                          Load
                        </button>
                        <button
                          type="button"
                          id="reset"
                          className="btn btn-light"
                        >
                          Reset
                        </button>
                        <DownloadTableExcel
                          filename="Party Win Loss"
                          sheet="PartyWinLoss"
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
                            exportPdf("#party-winLoss", "partyWinLoss.pdf")
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
                    <div className="col-sm-12 col-md-12">
                      <div
                        id="tickets-table_filter"
                        className="dataTables_filter text-md-right"
                      >
                        <label className="d-inline-flex align-items-center">
                          Search:
                          <input
                            type="search"
                            placeholder="Search..."
                            className="form-control form-control-sm ml-2 form-control"
                            id="__BVID__1846"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive mb-0">
                    <table
                      ref={tableRef}
                      id="party-winLoss"
                      role="table"
                      aria-busy="false"
                      aria-colcount="8"
                      className="table b-table table no-footer table-hover table-bordered"
                    >
                      {/*   <!----><!----> */}
                      <thead role="rowgroup" className="">
                        {/*   <!----> */}
                        <tr role="row" className="">
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex="1"
                            className=""
                          >
                            <div>No</div>
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex="2"
                            className=""
                          >
                            <div>User Name</div>
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex="3"
                            className=""
                          >
                            <div>Level</div>
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex="4"
                            className="text-right"
                          >
                            <div>Casino Pts</div>
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex="5"
                            className="text-right"
                          >
                            <div>Sport Pts</div>
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex="6"
                            className="text-right"
                          >
                            <div>Third Party Pts</div>
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex="7"
                            className="text-right"
                          >
                            <div>Profit/Loss</div>
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex="8"
                            className="text-left"
                          >
                            <div>Ptype</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody role="rowgroup">
                        {partyWinLossData?.map(
                          (
                            {
                              casinoPTS,
                              level,
                              profitLoss,
                              ptype,
                              sportPTS,
                              thirdPartyPTS,
                              username,
                            },
                            i
                          ) => {
                            return (
                              <tr key={i} role="row" className="">
                                <td aria-colindex="1" role="cell" className="">
                                  {i + 1}
                                </td>
                                <td aria-colindex="2" role="cell" className="">
                                  {username}
                                </td>
                                <td aria-colindex="3" role="cell" className="">
                                  {level}
                                </td>
                                <td
                                  aria-colindex="4"
                                  role="cell"
                                  className="text-right"
                                >
                                  <p className="mb-0">{casinoPTS}</p>
                                </td>
                                <td
                                  aria-colindex="5"
                                  role="cell"
                                  className="text-right"
                                >
                                  <p className="mb-0">{sportPTS}</p>
                                </td>
                                <td
                                  aria-colindex="6"
                                  role="cell"
                                  className="text-right"
                                >
                                  <p className="mb-0">{thirdPartyPTS}</p>
                                </td>
                                <td
                                  aria-colindex="7"
                                  role="cell"
                                  className="text-right"
                                >
                                  <p className="mb-0">{profitLoss}</p>
                                </td>
                                <td
                                  aria-colindex="8"
                                  role="cell"
                                  className="text-left"
                                >
                                  {ptype}
                                </td>
                              </tr>
                            );
                          }
                        )}
                      </tbody>
                      <tfoot role="rowgroup" className="">
                        <tr role="row" className="">
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex="1"
                            className=""
                          >
                            <span></span>
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex="2"
                            className=""
                          >
                            <span></span>
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex="3"
                            className=""
                          >
                            <span></span>
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex="4"
                            className="text-right"
                          >
                            <span>0.00</span>
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex="5"
                            className="text-right"
                          >
                            <span>0.00</span>
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex="6"
                            className="text-right"
                          >
                            <span>0.00</span>
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex="7"
                            className="text-right"
                          >
                            <span>0.00</span>
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex="8"
                            className="text-left"
                          >
                            <span></span>
                          </th>
                        </tr>
                      </tfoot>
                    </table>
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

export default PartyWinLoss;
