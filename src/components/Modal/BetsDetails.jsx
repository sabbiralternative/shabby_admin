import { useEffect, useRef, useState } from "react";
import { config } from "../../utils/config";
import axios from "axios";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";

const BetsDetails = ({ setShowBetsModal, marketId,searchUser }) => {
  const settledBetsApi = config?.result?.endpoint?.settledBets;
  const token = localStorage.getItem("adminToken");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [betsType, setBetsType] = useState("all");
  const betsRef = useRef();

  useEffect(() => {
    const getSettledBetsData = async () => {
      const generatedToken = UseTokenGenerator();
      const encryptedData = UseEncryptData({
        searchId:searchUser,
        marketId: marketId,
        token: generatedToken,
      });

      const res = await axios.post(
        settledBetsApi,
        encryptedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data;
      if (data?.success) {
        setData(data?.result);
        setFilteredData(data?.result);
      }
    };
    getSettledBetsData();
  }, [token, settledBetsApi, marketId]);

  /* Filter sports */
  useEffect(() => {
    if (betsType !== "all" && betsType !== "") {
      const filterLayBack = data.filter((game) => game.betType === betsType);
      setFilteredData(filterLayBack);
    } else if (betsType === "all") {
      setFilteredData(data);
    }
  }, [betsType, data]);

  /* Get total amount */
  let totalAmount = 0;
  for (const bets of filteredData) {
    totalAmount = totalAmount + parseFloat(bets.win);
  }



  /* Close dropdown click outside the dropdown */
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!betsRef.current.contains(e.target)) {
        setShowBetsModal(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setShowBetsModal]);
  return (
    <div
      id="__BVID__1765___BV_modal_outer_"
      style={{ position: "absolute", zIndex: "1040" }}
    >
      <div
        id="__BVID__1765"
        role="dialog"
        aria-labelledby="__BVID__1765___BV_modal_title_"
        aria-describedby="__BVID__1765___BV_modal_body_"
        className="modal fade show"
        style={{ display: "block" }}
        aria-modal="true"
      >
        <div className="modal-dialog modal-xl">
          <span tabIndex="0"></span>
          <div
            id="__BVID__1765___BV_modal_content_"
            tabIndex="-1"
            className="modal-content"
            ref={betsRef}
          >
            <header
              id="__BVID__1765___BV_modal_header_"
              className="modal-header"
            >
              <h5 id="__BVID__1765___BV_modal_title_" className="modal-title">
                Details
              </h5>
              <button
                onClick={() => setShowBetsModal(false)}
                type="button"
                aria-label="Close"
                className="close"
              >
                ×
              </button>
            </header>
            <div id="__BVID__1765___BV_modal_body_" className="modal-body">
              <div className="mt-1">
                {filteredData[0]?.sports} -&gt; {filteredData[0]?.nation} -&gt;{" "}
                {filteredData[0]?.eventName}
                -&gt; {filteredData[0]?.marketName}
              </div>
              <div className="mt-1">
                <div className="row">
                  <div className="col-6">Winner: {filteredData[0]?.winner}</div>
                  {/* <div className="col-6 text-right">
                    Game Time:
                    <div className="text-right">
                      {filteredData[0]?.placeDate}
                    </div>
                  </div> */}
                </div>
              </div>
              <div>
                <div className="mt-4">
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      onClick={(e) => setBetsType(e.target.value)}
                      type="radio"
                      id="soda-all"
                      name="example"
                      value="all"
                      className="custom-control-input"
                    />
                    <label htmlFor="soda-all" className="custom-control-label">
                      All
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      onClick={(e) => setBetsType(e.target.value)}
                      type="radio"
                      id="soda-back"
                      name="example"
                      value="Back"
                      className="custom-control-input"
                    />
                    <label htmlFor="soda-back" className="custom-control-label">
                      Back
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      onClick={(e) => setBetsType(e.target.value)}
                      type="radio"
                      id="soda-lay"
                      name="example"
                      value="Lay"
                      className="custom-control-input"
                    />
                    <label htmlFor="soda-lay" className="custom-control-label">
                      Lay
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      onClick={(e) => setBetsType(e.target.value)}
                      type="radio"
                      id="soda-deleted"
                      name="example"
                      value="Deleted"
                      className="custom-control-input"
                    />
                    <label
                      htmlFor="soda-deleted"
                      className="custom-control-label"
                    >
                      Deleted
                    </label>
                  </div>
                  <div className="custom-control-inline float-right">
                    <h5>
                      Total Bets:
                      <span className="text-success mr-2">
                        {filteredData?.length}
                      </span>{" "}
                      Total Win:
                      <span className={`text-danger`}>{totalAmount || 0}</span>
                    </h5>
                  </div>
                </div>
                <div className="table-responsive report-table">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="user-name">
                          <div>Username</div>
                        </th>
                        <th className="event-name">
                          <div>Nation</div>
                        </th>
                        <th className="text-right bet-user-rate">
                          <div>Rate</div>
                        </th>
                        <th className="text-right bet-user-rate">
                          <div>Bhav</div>
                        </th>
                        <th className="text-right bet-amount">
                          <div>Amount</div>
                        </th>
                        <th className="text-right bet-amount">
                          <div>Win</div>
                        </th>
                        <th className="bet-date">
                          <div>Date</div>
                        </th>
                        <th>
                          <div>IP</div>
                        </th>
                        <th>
                          <div>B Details</div>
                        </th>
                        <th className="text-right">
                          <div>Action</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData?.map((data, i) => {
                      
                        return (
                          <tr
                            key={i}
                            className={` ${
                              data?.betType === "Back"
                                ? "back-border"
                                : "lay-border"
                            }`}
                          >
                            <td className="user-name">
                              <span>{data?.username}</span>
                            </td>
                            <td className="event-name">
                              <div>{data?.nation}</div>
                            </td>
                            <td className="text-right bet-user-rate">
                              <div>{data?.userRate}</div>
                            </td>
                            <td className="text-right bet-user-rate">
                              <div>{data?.bhav}</div>
                            </td>
                            <td className="text-right bet-amount">
                              <div>{data?.amount}</div>
                            </td>
                            <td className="text-right bet-amount">
                              <div
                                className={`${
                                  data?.win > 0 ? "text-success" : "text-danger"
                                }`}
                              >
                                {data?.win}
                              </div>
                            </td>
                            <td className="bet-date">
                              <div>{data?.placeDate}</div>
                            </td>
                            <td>
                              <a>{data?.ipAddress}</a>
                            </td>
                            <td>
                              <a
                                title="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
                                className="text-success"
                              >
                                Detail
                              </a>
                            </td>
                            <td className="text-right">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  value="0"
                                  id="__BVID__1925"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__1925"
                                ></label>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <span tabIndex="0"></span>
        </div>
      </div>
      <div
        id="__BVID__1765___BV_modal_backdrop_"
        className="modal-backdrop"
      ></div>
    </div>
  );
};

export default BetsDetails;
