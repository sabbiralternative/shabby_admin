import { useState } from "react";
import { Link } from "react-router-dom";
import Event from "./Event";
import UseContextState from "../../hooks/UseContextState";

const Sidebar = () => {
  const [toggleAccount, setToggleAccount] = useState(false);
  const [toggleReport, setToggleReport] = useState(false);
  const { sidebarMobile, setSidebarMobile } = UseContextState();
  return (
    <div data-v-b00d14ae="" className="vertical-menu">
      <div className="h-100" data-simplebar="init">
        <div className="simplebar-wrapper" style={{ margin: "0px" }}>
          <div className="simplebar-height-auto-observer-wrapper">
            <div className="simplebar-height-auto-observer"></div>
          </div>
          <div className="simplebar-mask">
            <div
              className="simplebar-offset"
              style={{ right: "0px", bottom: "0px" }}
            >
              <div
                className="simplebar-content-wrapper"
                tabIndex="0"
                role="region"
                aria-label="scrollable content"
                style={{ height: "100%", overflow: "hidden scroll" }}
              >
                <div className="simplebar-content" style={{ padding: "0px" }}>
                  <div id="sidebar-menu">
                    <ul id="side-menu" className="metismenu list-unstyled">
                      <li className="mm-active">
                        <Link
                          onClick={() => setSidebarMobile(!sidebarMobile)}
                          to="/"
                          aria-current="page"
                          className="side-nav-link-ref router-link-exact-active router-link-active active"
                        >
                          <i className="bx bx-home-circle"></i>
                          <span>Dashboard</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => setSidebarMobile(!sidebarMobile)}
                          to="/market-analysis"
                          className="side-nav-link-ref"
                        >
                          <i className="bx bxs-bar-chart-alt-2"></i>
                          <span>Market Analysis</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => setSidebarMobile(!sidebarMobile)}
                          to="/multiLoginAccount"
                          className="side-nav-link-ref"
                        >
                          <i className="bx bx-user-plus"></i>
                          <span>Multi Login Account</span>
                        </Link>
                      </li>

                      {/* Account */}
                      <li className={`${toggleAccount ? "mm-active" : ""}`}>
                        {/*    <!-- mm-active --> */}
                        <a
                          onClick={() => setToggleAccount(!toggleAccount)}
                          className="has-arrow mm-collapse mm-show"
                          style={{ cursor: "pointer" }}
                        >
                          <i className="bx bx-user-circle"></i>
                          <span>Account</span>
                        </a>
                        {toggleAccount && (
                          <ul className="sub-menu">
                            {/*   <!-- mm-collapse --> */}
                            <li className="">
                              <Link
                                onClick={() => setSidebarMobile(!sidebarMobile)}
                                to="/admin/user"
                                className="side-nav-link-ref"
                              >
                                Account List
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={() => setSidebarMobile(!sidebarMobile)}
                                to="/createAccount"
                                className="side-nav-link-ref"
                              >
                                Create Account
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>

                      {/*    <li>
                        <Link
                          onClick={()=> setSidebarMobile(!sidebarMobile)}
                        to="/bank" className="side-nav-link-ref">
                          <i className="bx bxs-bank"></i> <span>Bank</span>
                        </Link>
                      </li>*/}
                      {/* Report */}
                      <li className={`${toggleReport ? "mm-active" : ""}`}>
                        <a
                          onClick={() => setToggleReport(!toggleReport)}
                          className="has-arrow mm-collapse mm-show"
                          style={{ cursor: "pointer" }}
                          aria-expanded="false"
                        >
                          <i className="bx bx-file"></i>
                          <span>Reports</span>
                        </a>
                        {toggleReport && (
                          <ul aria-expanded="false" className="sub-menu">
                            {/*   <!-- mm-collapse --> */}
                            <li>
                              <Link
                                onClick={() => setSidebarMobile(!sidebarMobile)}
                                to="/accountStatement"
                                className="side-nav-link-ref"
                              >
                                Account Statement
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={() => setSidebarMobile(!sidebarMobile)}
                                to="/partyWinLoss"
                                className="side-nav-link-ref"
                              >
                                Party Win Loss
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={() => setSidebarMobile(!sidebarMobile)}
                                to="/currentBets"
                                className="side-nav-link-ref"
                              >
                                Current Bets
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={() => setSidebarMobile(!sidebarMobile)}
                                to="/userHistory"
                                className="side-nav-link-ref"
                              >
                                User History
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={() => setSidebarMobile(!sidebarMobile)}
                                to="/generalLock"
                                className="side-nav-link-ref"
                              >
                                General Lock
                              </Link>
                            </li>
                            {/* <li>
                              <Link 
                              to='/ourCasinoResult'
                              className="side-nav-link-ref">
                                Our Casino Result
                              </Link>
                            </li>
                            <li>
                              <Link 
                              to='/liveCasinoResult'
                              className="side-nav-link-ref">
                                Live Casino Result
                              </Link>
                            </li> */}
                            <li>
                              <Link
                                onClick={() => setSidebarMobile(!sidebarMobile)}
                                to="/turnOver"
                                className="side-nav-link-ref"
                              >
                                Turn Over
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={() => setSidebarMobile(!sidebarMobile)}
                                to="/userAuthentication"
                                className="side-nav-link-ref"
                              >
                                User Authentication
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>

                      <li>
                        <Link
                          onClick={() => setSidebarMobile(!sidebarMobile)}
                          to="/ourCasino"
                          className="side-nav-link-ref"
                        >
                          <i className="mdi mdi-cards-playing-outline"></i>
                          <span>Our Casino</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => setSidebarMobile(!sidebarMobile)}
                          to="/virtualCasino"
                          className="side-nav-link-ref"
                        >
                          <span className="badge badge-pill badge-success float-right">
                            New
                          </span>
                          <i className="mdi mdi-cards-playing-outline"></i>
                          <span>Virtual Casino</span>
                        </Link>
                      </li>

                      {/* Event */}
                      <Event />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="simplebar-placeholder"
            style={{ width: "auto", height: "445px" }}
          ></div>
        </div>
        <div
          className="simplebar-track simplebar-horizontal"
          style={{ visibility: "hidden" }}
        >
          <div
            className="simplebar-scrollbar"
            style={{ width: "0px", display: "none" }}
          ></div>
        </div>
        <div
          className="simplebar-track simplebar-vertical"
          style={{ visibility: "hidden" }}
        >
          <div
            className="simplebar-scrollbar"
            style={{ height: "0px", display: "none" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
