import { useEffect, useRef, useState } from "react";
import useCloseModalClickOutside from "../../hooks/useCloseModalClickOutside";
import useCurrentBets from "../../hooks/useCurrentBets";

const CurrentBetsAll = ({ setShowCurrentBets, eventId }) => {
  const currentBetsRef = useRef();
  useCloseModalClickOutside(currentBetsRef, () => {
    setShowCurrentBets(false);
  });
  const { myBets } = useCurrentBets(eventId);
  const [betType, setBetType] = useState("all");
  const [filterBets, setFilterBets] = useState({
    username: "",
    ipAddress: "",
    amountFrom: "",
    amountTo: "",
  });
  const [filterData, setFilterData] = useState(myBets);
  const [data, setData] = useState(filterData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterBets({ ...filterBets, [name]: value });
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    const filterData = myBets?.filter((obj) => {
      return (
        obj.username?.includes(filterBets.username) &&
        obj.ipAddress?.includes(filterBets.ipAddress) &&
        parseFloat(obj?.amount) >= parseFloat(filterBets?.amountFrom) &&
        parseFloat(obj?.amount) <= parseFloat(filterBets?.amountTo)
      );
    });
    setFilterData(filterData);
  };

  const handleReset = () => {
    setFilterBets({
      username: "",
      ipAddress: "",
      amountFrom: "",
      amountTo: "",
    });
    setFilterData(myBets)
  };

  let totalAmount = 0;
  for (const d of data) {
    totalAmount += parseFloat(d?.amount);
  }

  useEffect(() => {
    if (betType === "all") {
      setData(filterData);
    } else {
      const filteredByType = filterData?.filter(
        (obj) => obj?.betType === betType
      );
      setData(filteredByType);
    }
  }, [betType, filterData]);

  return (
    <div
      id="__BVID__1636___BV_modal_outer_"
      style={{ position: "absolute", zIndex: "1040" }}
    >
      <div
        id="__BVID__1636"
        role="dialog"
        aria-labelledby="__BVID__1636___BV_modal_title_"
        aria-describedby="__BVID__1636___BV_modal_body_"
        className="modal fade show"
        style={{ display: "block" }}
        aria-modal="true"
      >
        <div className="modal-dialog modal-big">
          <span></span>
          <div
            id="__BVID__1636___BV_modal_content_"
            className="modal-content"
            ref={currentBetsRef}
          >
            <header
              id="__BVID__1636___BV_modal_header_"
              className="modal-header"
            >
              <h5 id="__BVID__1636___BV_modal_title_" className="modal-title">
                View More
              </h5>
              <button
                onClick={() => setShowCurrentBets(false)}
                type="button"
                aria-label="Close"
                className="close"
              >
                ×
              </button>
            </header>
            <div id="__BVID__1636___BV_modal_body_" className="modal-body">
              <ul
                role="tablist "
                className="nav nav-tabs d-inline-block text-uppercase"
              >
                <li className="nav-item d-inline-block">
                  <a
                    data-toggle="tab"
                    href="javascript:void(0)"
                    className="nav-link active"
                  >
                    MATCH_ODDS
                  </a>
                </li>
              </ul>
              <div className="tab-content m-t-20">
                <div className="tabs" id="__BVID__1677">
                  <div className="card-header">
                    <ul
                      role="tablist"
                      className="nav nav-pills card-header-pills"
                      id="__BVID__1677__BV_tab_controls_"
                    >
                      <li role="presentation" className="nav-item">
                        <a
                          role="tab"
                          aria-selected="true"
                          aria-setsize="2"
                          aria-posinset="1"
                          href="#"
                          target="_self"
                          className="nav-link active"
                          id="__BVID__1678___BV_tab_button__"
                          aria-controls="__BVID__1678"
                        >
                          Matched Bets
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="tab-content"
                    id="__BVID__1677__BV_tab_container_"
                  >
                    <div
                      role="tabpanel"
                      aria-hidden="false"
                      className="tab-pane active card-body"
                      id="__BVID__1678"
                      aria-labelledby="__BVID__1678___BV_tab_button__"
                    >
                      <div id="matched-bet2" className="tab-pane active">
                        <div>
                          <div>
                            <form
                              onSubmit={handleFilterSubmit}
                              data-vv-scope="searchBets"
                              className="ajaxFormSubmit"
                            >
                              <div className="row row5 align-items-center mb-3">
                                <div className="col-xl-2">
                                  <label htmlFor="uname">Username</label>
                                  <input
                                  value={filterBets.username}
                                    onChange={handleChange}
                                    name="username"
                                    type="text"
                                    placeholder="Search Username"
                                    className="form-control"
                                  />
                                </div>
                                <div className="col-xl-3">
                                  <div className="row row5">
                                    <div className="col-6">
                                      <label htmlFor="amountfrom">
                                        Amount From
                                      </label>
                                      <input
                                      value={filterBets.amountFrom}
                                        onChange={handleChange}
                                        id="amountfrom"
                                        name="amountFrom"
                                        type="text"
                                        placeholder="Amount From"
                                        className="form-control"
                                      />
                                    </div>
                                    <div className="col-6">
                                      <label htmlFor="amountto">
                                        Amount To
                                      </label>
                                      <input
                                      value={filterBets.amountTo}
                                        onChange={handleChange}
                                        id="amountto"
                                        name="amountTo"
                                        type="text"
                                        placeholder="Amount To"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-2">
                                  <label htmlFor="amountto">IP Address</label>
                                  <input
                                  value={filterBets.ipAddress}
                                    onChange={handleChange}
                                    id="ipaddr"
                                    name="ipAddress"
                                    type="text"
                                    placeholder="IP Address"
                                    className="form-control"
                                  />
                                </div>
                                <div className="col-xl-2 mt-4">
                                  <button
                                    type="submit"
                                    className="btn btn-primary"
                                  >
                                    Search
                                  </button>
                                  <button
                                    onClick={handleReset}
                                    type="button"
                                    className="btn btn-light"
                                  >
                                    Reset
                                  </button>
                                </div>
                              </div>
                            </form>
                            <div
                              id="radio-group-1"
                              role="radiogroup"
                              className="float-left bv-no-focus-ring"
                            >
                              <div className="custom-control custom-control-inline custom-radio">
                                <input
                                  onChange={() => setBetType("all")}
                                  id="radio-group-1_BV_option_0"
                                  type="radio"
                                  name="radio-options"
                                  className="custom-control-input"
                                  value="all"
                                />
                                <label
                                  htmlFor="radio-group-1_BV_option_0"
                                  className="custom-control-label"
                                >
                                  <span>All</span>
                                </label>
                              </div>
                              <div className="custom-control custom-control-inline custom-radio">
                                <input
                                  onChange={() => setBetType("Back")}
                                  id="radio-group-1_BV_option_1"
                                  type="radio"
                                  name="radio-options"
                                  className="custom-control-input"
                                  value="back"
                                />
                                <label
                                  htmlFor="radio-group-1_BV_option_1"
                                  className="custom-control-label"
                                >
                                  <span>Back</span>
                                </label>
                              </div>
                              <div className="custom-control custom-control-inline custom-radio">
                                <input
                                  onChange={() => setBetType("Lay")}
                                  id="radio-group-1_BV_option_2"
                                  type="radio"
                                  name="radio-options"
                                  className="custom-control-input"
                                  value="lay"
                                />
                                <label
                                  htmlFor="radio-group-1_BV_option_2"
                                  className="custom-control-label"
                                >
                                  <span>Lay</span>
                                </label>
                              </div>
                          {/*     <div className="custom-control custom-control-inline custom-radio">
                                <input
                                  id="radio-group-1_BV_option_3"
                                  type="radio"
                                  name="radio-options"
                                  className="custom-control-input"
                                  value="deleted"
                                />
                                <label
                                  htmlFor="radio-group-1_BV_option_3"
                                  className="custom-control-label"
                                >
                                  <span>Deleted</span>
                                </label>
                              </div> */}
                            </div>
                            <div className="custom-control-inline float-right">
                              <h5>
                                Total Soda:
                                <span className="text-success mr-2">{data?.length}</span>
                                Total Amount:
                                <span className="text-success">
                                  {totalAmount}
                                </span>
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
                                  <th className="text-right bet-amount">
                                    <div>Amount</div>
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
                                {data?.map((bets, i) => {
                                  return (
                                    <tr
                                      key={i}
                                      className={` ${
                                        bets?.betType === "Back"
                                          ? "back-border"
                                          : "lay-border"
                                      }`}
                                    >
                                      <td className="user-name">
                                        <div>{bets?.username}</div>
                                      </td>
                                      <td className="event-name">
                                        <div>{bets?.nation}</div>
                                      </td>
                                      <td className="text-right bet-user-rate">
                                        <div>{bets?.userRate}</div>
                                      </td>
                                      <td className="text-right bet-amount">
                                        <div>{bets?.amount}</div>
                                      </td>
                                      <td className="bet-date">
                                        <div>{bets?.placeDate}</div>
                                      </td>
                                      <td>
                                        <a href="javascript:void(0)">
                                          {bets?.ipAddress}
                                        </a>
                                      </td>
                                      <td>
                                        <a
                                          href="javascript:void(0)"
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
                                            id="__BVID__1722"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="__BVID__1722"
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

                    {/* <div
                      role="tabpanel"
                      aria-hidden="true"
                      className="tab-pane card-body"
                      id="__BVID__1680"
                      aria-labelledby="__BVID__1680___BV_tab_button__"
                     style={{display:'none'}}
                    >
                      <div>
                        <div>
                          <form
                            method="post"
                            data-vv-scope="searchBets"
                            className="ajaxFormSubmit"
                          >
                            <div className="row row5 align-items-center mb-3">
                              <div className="col-xl-2">
                                <label htmlFor="uname">Username</label>
                                <input
                                  id="uname"
                                  type="text"
                                  placeholder="Search Username"
                                  className="form-control"
                                />
                              </div>
                              <div className="col-xl-3">
                                <div className="row row5">
                                  <div className="col-6">
                                    <label htmlFor="amountfrom">
                                      Amount From
                                    </label>
                                    <input
                                      id="amountfrom"
                                      name="amountFrom"
                                      type="text"
                                      placeholder="Amount From"
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="col-6">
                                    <label htmlFor="amountto">Amount To</label>
                                    <input
                                      id="amountto"
                                      name="amountto"
                                      type="text"
                                      placeholder="Amount To"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-2">
                                <label htmlFor="amountto">IP Address</label>
                                <input
                                  id="ipaddr"
                                  name="ip"
                                  type="text"
                                  placeholder="IP Address"
                                  className="form-control"
                                />
                              </div>
                              <div className="col-xl-2 mt-4">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Search
                                </button>
                                <button type="button" className="btn btn-light">
                                  Reset
                                </button>
                              </div>
                            </div>
                          </form>
                          <div
                            id="radio-group-1"
                            role="radiogroup"
                            className="float-left bv-no-focus-ring"
                          >
                            <div className="custom-control custom-control-inline custom-radio">
                              <input
                                id="radio-group-1_BV_option_0"
                                type="radio"
                                name="radio-options"
                                className="custom-control-input"
                                value="all"
                              />
                              <label
                                htmlFor="radio-group-1_BV_option_0"
                                className="custom-control-label"
                              >
                                <span>All</span>
                              </label>
                            </div>
                            <div className="custom-control custom-control-inline custom-radio">
                              <input
                                id="radio-group-1_BV_option_1"
                                type="radio"
                                name="radio-options"
                                className="custom-control-input"
                                value="back"
                              />
                              <label
                                htmlFor="radio-group-1_BV_option_1"
                                className="custom-control-label"
                              >
                                <span>Back</span>
                              </label>
                            </div>
                            <div className="custom-control custom-control-inline custom-radio">
                              <input
                                id="radio-group-1_BV_option_2"
                                type="radio"
                                name="radio-options"
                                className="custom-control-input"
                                value="lay"
                              />
                              <label
                                htmlFor="radio-group-1_BV_option_2"
                                className="custom-control-label"
                              >
                                <span>Lay</span>
                              </label>
                            </div>
                            <div className="custom-control custom-control-inline custom-radio">
                              <input
                                id="radio-group-1_BV_option_3"
                                type="radio"
                                name="radio-options"
                                className="custom-control-input"
                                value="deleted"
                              />
                              <label
                                htmlFor="radio-group-1_BV_option_3"
                                className="custom-control-label"
                              >
                                <span>Deleted</span>
                              </label>
                            </div>
                          </div>
                          <div className="custom-control-inline float-right">
                            <h5>
                              Total Soda:
                              <span className="text-success mr-2">2</span>
                              Total Amount:
                              <span className="text-success">200.00</span>
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
                                <th className="text-right bet-amount">
                                  <div>Amount</div>
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
                              <tr className="back-border">
                                <td className="user-name">
                                  <div>rd2punter</div>
                                </td>
                                <td className="event-name">
                                  <div>Bangladesh</div>
                                </td>
                                <td className="text-right bet-user-rate">
                                  <div>1.79</div>
                                </td>
                                <td className="text-right bet-amount">
                                  <div>100.00</div>
                                </td>
                                <td className="bet-date">
                                  <div>18/03/2024 11:01:01</div>
                                </td>
                                <td>
                                  <a href="javascript:void(0)">
                                    2405:201:31:a824:bc8c:1140:6fa8:dd0e
                                  </a>
                                </td>
                                <td>
                                  <a
                                    href="javascript:void(0)"
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
                                      id="__BVID__1714"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="__BVID__1714"
                                    ></label>
                                  </div>
                                </td>
                              </tr>
                              <tr className="lay-border">
                                <td className="user-name">
                                  <div>rd2punter</div>
                                </td>
                                <td className="event-name">
                                  <div>Bangladesh</div>
                                </td>
                                <td className="text-right bet-user-rate">
                                  <div>1.79</div>
                                </td>
                                <td className="text-right bet-amount">
                                  <div>100.00</div>
                                </td>
                                <td className="bet-date">
                                  <div>18/03/2024 11:00:23</div>
                                </td>
                                <td>
                                  <a href="javascript:void(0)">
                                    2405:201:31:a824:bc8c:1140:6fa8:dd0e
                                  </a>
                                </td>
                                <td>
                                  <a
                                    href="javascript:void(0)"
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
                                      value="1"
                                      id="__BVID__1716"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="__BVID__1716"
                                    ></label>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span></span>
        </div>
      </div>
      <div
        id="__BVID__1636___BV_modal_backdrop_"
        className="modal-backdrop"
      ></div>
    </div>
  );
};

export default CurrentBetsAll;
