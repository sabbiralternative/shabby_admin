import { Link } from "react-router-dom";

const MultiLoginAccount = () => {
  return (
    <div data-v-b00d14ae="" className="page-content">
      <div data-v-b00d14ae="">
        <div data-v-b00d14ae="">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0 font-size-18">Multi Login Account</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to="/" className="" target="_self">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">
                      <span aria-current="location">Multi Login Account</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body create-account-container">
                  <form method="post" data-vv-scope="userInsert">
                    <div className="create-account-form">
                      <div>
                        <h5 className="mb-0">Personal Information</h5>
                        <div className="row">
                          <div className="col-md-3 form-group">
                            <label>Client ID</label>
                            <input
                              type="text"
                              name="uname"
                              data-vv-as="Client ID"
                              className="form-control"
                              aria-required="true"
                              aria-invalid="true"
                            />
                          </div>
                          <div className="col-md-3 form-group">
                            <label>Full Name</label>
                            <input
                              type="text"
                              name="fullname"
                              data-vv-as="Full Name"
                              className="form-control"
                              aria-required="true"
                              aria-invalid="false"
                            />
                          </div>
                          <div className="col-md-3 form-group">
                            <label>Password</label>
                            <input
                              type="password"
                              data-vv-as="Password"
                              name="password"
                              className="form-control"
                              aria-required="true"
                              aria-invalid="true"
                            />
                          </div>
                          <div className="col-md-3 form-group">
                            <label>Confirm Password</label>
                            <input
                              type="password"
                              name="cpass"
                              data-vv-as="Confirm Password"
                              className="form-control"
                              aria-required="true"
                              aria-invalid="false"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 previlages">
                        <h5 className="mb-0">Privileges</h5>
                        <div className="previlage-box">
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  value="true"
                                  id="__BVID__6721"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__6721"
                                >
                                  All
                                </label>
                              </div>
                            </div>
                          </div>
                          <br />
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  value="1"
                                  id="__BVID__6722"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__6722"
                                >
                                  DashBoard
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  value="2"
                                  id="__BVID__6723"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__6723"
                                >
                                  Market Analysis
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  value="4"
                                  id="__BVID__6724"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__6724"
                                >
                                  User List
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  value="5"
                                  id="__BVID__6725"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__6725"
                                >
                                  Insert User
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  value="6"
                                  id="__BVID__6726"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__6726"
                                >
                                  Bank
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  value="8"
                                  id="__BVID__6727"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__6727"
                                >
                                  Account Statement
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  value="9"
                                  id="__BVID__6728"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__6728"
                                >
                                  Party Win Loss
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  value="10"
                                  id="__BVID__6729"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__6729"
                                >
                                  Current Bets
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  value="11"
                                  id="__BVID__6730"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__6730"
                                >
                                  User History
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  value="12"
                                  id="__BVID__6731"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__6731"
                                >
                                  General Lock
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  value="13"
                                  id="__BVID__6732"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__6732"
                                >
                                  Casino Result
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  value="14"
                                  id="__BVID__6733"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__6733"
                                >
                                  Live Casino Result
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  value="15"
                                  id="__BVID__6734"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__6734"
                                >
                                  Our Casino
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  value="16"
                                  id="__BVID__6735"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__6735"
                                >
                                  Events
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  value="17"
                                  id="__BVID__6736"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__6736"
                                >
                                  Market Search Analysis
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  value="19"
                                  id="__BVID__6737"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__6737"
                                >
                                  Login User creation
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  value="54"
                                  id="__BVID__6738"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__6738"
                                >
                                  Withdraw
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  value="55"
                                  id="__BVID__6739"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__6739"
                                >
                                  Deposit
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  value="56"
                                  id="__BVID__6740"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__6740"
                                >
                                  Credit Reference
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  value="57"
                                  id="__BVID__6741"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__6741"
                                >
                                  User Info
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  value="58"
                                  id="__BVID__6742"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__6742"
                                >
                                  User Password Change
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  value="59"
                                  id="__BVID__6743"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__6743"
                                >
                                  User Lock
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  value="60"
                                  id="__BVID__6744"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__6744"
                                >
                                  Bet Lock
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  value="62"
                                  id="__BVID__6745"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__6745"
                                >
                                  TurnOver
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  value="90"
                                  id="__BVID__6746"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__6746"
                                >
                                  CouponReport
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  value="91"
                                  id="__BVID__6747"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__6747"
                                >
                                  active user
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="previlage-master mt-2">
                          <div className="form-group mb-0">
                            <input
                              type="password"
                              name="mpass"
                              placeholder="Transaction Code"
                              className="form-control mpass-text"
                              aria-required="true"
                              aria-invalid="false"
                            />
                            <button type="submit" className="btn btn-success">
                              Submit
                            </button>
                            <button
                              type="button"
                              id="reset"
                              className="btn btn-light"
                            >
                              Reset
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="outer mt-4">
                    <div className="inner">
                      <table className="table table-bordered">
                        <tbody>
                          <tr>
                            <th className="fixed-col-1">Action</th>
                            <th className="fixed-col-2">Username</th>
                            <th className="fixed-col-3">Full Name</th>
                            <th>DashBoard</th>
                            <th>Market Analysis</th>
                            <th>User List</th>
                            <th>Insert User</th>
                            <th>Bank</th>
                            <th>Account Statement</th>
                            <th>Party Win Loss</th>
                            <th>Current Bets</th>
                            <th>User History</th>
                            <th>General Lock</th>
                            <th>Casino Result</th>
                            <th>Live Casino Result</th>
                            <th>Our Casino</th>
                            <th>Events</th>
                            <th>Market Search Analysis</th>
                            <th>Login User creation</th>
                            <th>Withdraw</th>
                            <th>Deposit</th>
                            <th>Credit Reference</th>
                            <th>User Info</th>
                            <th>User Password Change</th>
                            <th>User Lock</th>
                            <th>Bet Lock</th>
                            <th>TurnOver</th>
                            <th>CouponReport</th>
                            <th>active user</th>
                          </tr>
                        </tbody>
                      </table>
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

export default MultiLoginAccount;
