const TurnOver = () => {
    return (
        <div data-v-b00d14ae="" className="page-content">
       {/*  <!----> */}
        <div data-v-b00d14ae="">
          <div data-v-b00d14ae="">
            <div className="row">
              <div className="col-12">
                <div
                  className="page-title-box d-flex align-items-center justify-content-between"
                >
                  <h4 className="mb-0 font-size-18">Turnover Report</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="/admin/home" className="" target="_self"
                          >Home</a
                        >
                      </li>
                      <li className="breadcrumb-item active">
                        <span aria-current="location">Turnover Report</span>
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
                    <div
                      role="alert"
                      aria-live="polite"
                      aria-atomic="true"
                      className="alert alert-info"
                    >
                    {/*   <!----> */}
                      <div direction="right">
                        You will be able to see the data of last 7 days
                        only.
                      </div>
                    </div>
                    <form
                      method="post"
                      data-vv-scope="toReport"
                      className="ajaxFormSubmit"
                    >
                      <div className="row row5">
                        <div className="col-md-4 col-xl-2">
                          <div
                            className="form-group user-lock-search"
                            style={{position:'relative'}}
                          >
                            <label htmlFor="d-inline-block"
                              >Search By Client Name</label
                            >
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
                                  style={{display:'none'}}
                                ></div>
                              {/*   <!----> */}
                                <div
                                  className="multiselect__spinner"
                                  style={{display:'none'}}
                                ></div>
                                <input
                                  name=""
                                  type="text"
                                  autoComplete="off"
                                  spellCheck="false"
                                  placeholder="Select option"
                                  tabIndex="0"
                                  aria-controls="listbox-null"
                                  className="multiselect__input"
                                  style={{width:'0px',position:'absolute',padding:'0px'}}
                                />
                               {/*  <!----> */}
                                <span className="multiselect__placeholder">
                                  Select option
                                </span>
                              </div>
                              <div
                                tabIndex="-1"
                                className="multiselect__content-wrapper"
                                style={{maxHeight:'300px',display:'none'}}
                              >
                                <ul
                                  role="listbox"
                                  id="listbox-null"
                                  className="multiselect__content"
                                  style={{display:'block'}}
                                >
                                 {/*  <!----> */}
                                  <li style={{display:'none'}}>
                                    <span className="multiselect__option"
                                      >No elements found. Consider changing
                                      the search query.</span
                                    >
                                  </li>
                                  <li>
                                    <span className="multiselect__option"
                                      >List is empty.</span
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <label>From Date:</label>
                          <div className="mx-datepicker">
                            <div className="mx-input-wrapper">
                              <input
                                name="date"
                                type="text"
                                autoComplete="off"
                                readOnly="readonly"
                                placeholder=""
                                className="mx-input"
                              /><i className="mx-icon-calendar"
                                ><svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 1024 1024"
                                  width="1em"
                                  height="1em"
                                >
                                  <path
                                    d="M940.218182 107.054545h-209.454546V46.545455h-65.163636v60.50909H363.054545V46.545455H297.890909v60.50909H83.781818c-18.618182 0-32.581818 13.963636-32.581818 32.581819v805.236363c0 18.618182 13.963636 32.581818 32.581818 32.581818h861.090909c18.618182 0 32.581818-13.963636 32.581818-32.581818V139.636364c-4.654545-18.618182-18.618182-32.581818-37.236363-32.581819zM297.890909 172.218182V232.727273h65.163636V172.218182h307.2V232.727273h65.163637V172.218182h176.872727v204.8H116.363636V172.218182h181.527273zM116.363636 912.290909V442.181818h795.927273v470.109091H116.363636z"
                                  ></path></svg
                              ></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <label>To Date:</label>
                          <div className="mx-datepicker">
                            <div className="mx-input-wrapper">
                              <input
                                name="date"
                                type="text"
                                autoComplete="off"
                                readOnly="readonly"
                                placeholder=""
                                className="mx-input"
                              /><i className="mx-icon-calendar"
                                ><svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 1024 1024"
                                  width="1em"
                                  height="1em"
                                >
                                  <path
                                    d="M940.218182 107.054545h-209.454546V46.545455h-65.163636v60.50909H363.054545V46.545455H297.890909v60.50909H83.781818c-18.618182 0-32.581818 13.963636-32.581818 32.581819v805.236363c0 18.618182 13.963636 32.581818 32.581818 32.581818h861.090909c18.618182 0 32.581818-13.963636 32.581818-32.581818V139.636364c-4.654545-18.618182-18.618182-32.581818-37.236363-32.581819zM297.890909 172.218182V232.727273h65.163636V172.218182h307.2V232.727273h65.163637V172.218182h176.872727v204.8H116.363636V172.218182h181.527273zM116.363636 912.290909V442.181818h795.927273v470.109091H116.363636z"
                                  ></path></svg
                              ></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-xl-2">
                          <div className="form-group">
                            <label>Type</label>
                            <select
                              name="type"
                              className="form-control"
                              aria-required="true"
                              aria-invalid="false"
                            >
                              <option value="">Select Type</option>
                              <option value="1">Sports</option>
                              <option value="2">Casino</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-4 col-xl-2">
                          <div className="form-group">
                            <label>Sports List</label>
                            <select
                              name="etid"
                              className="form-control is-invalid"
                              aria-required="true"
                              aria-invalid="true"
                            >
                              <option value="">Select Sports List</option>
                              <option value="39">Handball</option>
                              <option value="18">Volleyball</option>
                              <option value="22">Badminton</option>
                              <option value="38">Virtual sports</option>
                              <option value="4">Cricket</option>
                              <option value="58">American Football</option>
                              <option value="8">Table Tennis</option>
                              <option value="29">Cycling</option>
                              <option value="65">Greyhound Racing</option>
                              <option value="32">Motorbikes</option>
                              <option value="40">Politics</option>
                              <option value="16">MotoGP</option>
                              <option value="33">Athletics</option>
                              <option value="6">Boxing</option>
                              <option value="64">Esports</option>
                              <option value="54">Rugby Union</option>
                              <option value="67">Boat Racing</option>
                              <option value="3">Mixed Martial Arts</option>
                              <option value="9">Futsal</option>
                              <option value="17">Chess</option>
                              <option value="37">Sumo</option>
                              <option value="11">E Games</option>
                              <option value="7">Beach Volleyball</option>
                              <option value="62">Soccer</option>
                              <option value="1">Football</option>
                              <option value="52">Motor Sports</option>
                              <option value="35">Basketball 3X3</option>
                              <option value="2">Tennis</option>
                              <option value="5">Golf</option>
                              <option value="55">Rugby League</option>
                              <option value="15">Basketball</option>
                              <option value="66">Kabaddi</option>
                              <option value="19">Ice Hockey</option>
                              <option value="10">Horse Racing</option>
                              <option value="59">Snooker</option>
                              <option value="57">Darts</option>
                              <option value="53">Baseball</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-4 col-xl-2">
                          <div className="form-group">
                            <label>Game Type</label>
                            <select className="form-control">
                              <option value="">Select Game Type</option>
                              <option value="GameType">GameTypeName</option>
                              <option value="Match">Match</option>
                              <option value="Match1">Match1</option>
                              <option value="Fancy">Fancy</option>
                              <option value="Fancy1">Fancy1</option>
                              <option value="Meter">Meter</option>
                              <option value="Khado">Khado</option>
                              <option value="dream">Diam11</option>
                              <option value="oddeven">oddeven</option>
                              <option value="daba">Player Battel</option>
                              <option value="cricketcasino">
                                cricket casino
                              </option>
                            </select>
                          </div>
                        </div>
                       {/*  <!----> */}
                      </div>
                      <div className="row row5">
                        <div className="col-md-12 col-xl-3">
                          <button
                            type="submit"
                            id="loaddata"
                            className="btn btn-primary"
                          >
                            Load
                          </button>
                          <button
                            type="button"
                            id="reset"
                            className="btn btn-light"
                          >
                            Reset
                          </button>
                          <div className="d-inline-block ml-1">
                            <div
                              id="export_1700507554497"
                              className="d-inline-block disabled"
                            >
                              <button
                                type="button"
                                disabled="disabled"
                                className="btn mr-1 btn-success disabled"
                              >
                                <i className="fas fa-file-excel"></i>
                              </button>
                            </div>
                            <button
                              type="button"
                              disabled="disabled"
                              className="btn btn-danger disabled"
                            >
                              <i className="fas fa-file-pdf"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="table-responsive mb-0 mt-3">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th className="text-right">Loss Turn Over</th>
                            <th className="text-right">Loss</th>
                            <th className="text-right">Win Turn Over</th>
                            <th className="text-right">Win</th>
                            <th className="text-right">Total Turn Over</th>
                            <th className="text-right">Total P/L</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan="6" className="text-center">
                              There are no records to show
                            </td>
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
    );
};

export default TurnOver;