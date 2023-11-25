const MyBets = ({ myBets }) => {
  return (
    <>
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
              style={{ height: "auto", overflow: "hidden scroll" }}
            >
              <div className="simplebar-content" style={{ padding: "0px" }}>
                <div className="card m-b-10"></div>
                <div id="my-game-bets" className="card m-b-10 my-bet">
                  <div className="card-header">
                    <h6 className="card-title float-left">My Bets</h6>
                    <a className="btn btn-back float-right">View More</a>
                  </div>
                  <div className="card-body">
                    <div className="tabs" id="__BVID__48">
                      <div className="">
                        <ul
                          role="tablist"
                          className="nav nav-tabs small"
                          id="__BVID__48__BV_tab_controls_"
                        >
                          <li role="presentation" className="nav-item">
                            <a
                              role="tab"
                              aria-selected="true"
                              aria-setsize="1"
                              aria-posinset="1"
                              href="#"
                              target="_self"
                              className="nav-link active"
                              id="__BVID__49___BV_tab_button__"
                              aria-controls="__BVID__49"
                            >
                              Matched Bets
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="tab-content"
                        id="__BVID__48__BV_tab_container_"
                      >
                        <div
                          role="tabpanel"
                          aria-hidden="false"
                          className="tab-pane active"
                          id="__BVID__49"
                          aria-labelledby="__BVID__49___BV_tab_button__"
                        >
                          <div id="matched-bet" className="tab-pane active">
                            <div className="table-responsive">
                              <table className="table coupon-table mb-0">
                                <thead>
                                  <tr>
                                    <th style={{ minWidth: "90px" }}>
                                      UserName
                                    </th>
                                    <th style={{ minWidth: "90px" }}>Nation</th>
                                    <th
                                      className="text-right"
                                      style={{ minWidth: "50px" }}
                                    >
                                      Rate
                                    </th>
                                    <th
                                      className="text-right"
                                      style={{ minWidth: "70px" }}
                                    >
                                      Amount
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {myBets &&
                                    myBets?.result?.length > 0 &&
                                    myBets?.result?.map(
                                      (
                                        {
                                          nation,
                                          betType,
                                          amount,
                                          userRate,
                                          username,
                                        },
                                        i
                                      ) => {
                                        return (
                                          <tr
                                            key={i}
                                            className={`${
                                              betType === "Lay"
                                                ? "lay-border"
                                                : "back-border"
                                            }`}
                                          >
                                            <td className="bt0">{username}</td>
                                            <td className="bt0">{nation}</td>
                                            <td className="text-right bt0">
                                              {userRate}
                                            </td>
                                            <td className="text-right bt0">
                                              {amount}
                                            </td>
                                          </tr>
                                        );
                                      }
                                    )}
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
          </div>
        </div>
        <div
          className="simplebar-placeholder"
          style={{ width: "auto", height: "1241px" }}
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
        style={{ visibility: "visible" }}
      >
        <div
          className="simplebar-scrollbar"
          style={{
            height: "594px",
            display: "block",
            transform: "translate3d(0px, 0px, 0px)",
          }}
        ></div>
      </div>
    </>
  );
};

export default MyBets;
