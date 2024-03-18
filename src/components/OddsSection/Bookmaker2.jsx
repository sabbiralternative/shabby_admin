const Bookmaker2 = ({ bookmaker2, exposer }) => {

  let pnlBySelection;
  if (exposer?.pnlBySelection) {
    const obj = exposer?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }
  return (
    <>
      {bookmaker2?.map((bookmark) => {
        return (
          <div key={bookmark.id} className="bet-table">
            <div className="bet-table-header">
              <div
                data-toggle="collapse"
                data-target="#market1"
                aria-expanded="true"
                className="nation-name"
              >
                <span title="Bookmaker">
                  <a title="">
                    <img
                      src="https://g1ver.sprintstaticdata.com/v11/static/admin/img/arrow-down.svg"
                      className="mr-1"
                    />
                  </a>
                  {bookmark?.name.toUpperCase()}
                </span>
              </div>
              <div className="float-right">
                <a className="btn btn-back">Bet Lock</a>
                <a className="btn btn-back">User Book</a>
              </div>
            </div>

            <div
              id="market1"
              data-title={`${bookmark?.status !== "OPEN" ? "SUSPENDED" : ""}`}
              className={`bet-table-body collapse show ${
                bookmark?.status !== "OPEN" ? "suspendedfull" : " "
              }`}
            >
              <div className="bet-table-row bet-table-row-top">
                <div className="text-right nation-name">
                  <span className="max-bet">
                    {/* Min:<span>100</span>  */}
                    Max:<span>{bookmark?.maxLiabilityPerBet}</span>
                  </span>
                </div>
                <div className="back bl-title d-none-mobile">Back</div>
                <div className="lay bl-title d-none-mobile">Lay</div>
              </div>

              {bookmark?.runners?.map((runner) => {
                const pnl = pnlBySelection?.filter(
                  (pnl) => pnl?.RunnerId === runner?.id
                );

                return (
                  <>
                    <div className="bet-table-mobile-row d-none-desktop">
                      <div className="bet-table-mobile-team-name">
                        <span>{runner?.name}</span>
                        {pnl &&
                          pnl?.map(({ pnl }, i) => {
                            return (
                              <p
                                key={i}
                                className="mb-0 float-left"
                                style={{
                                  color: `${pnl > 0 ? "green" : "red"}`,
                                }}
                              >
                                {pnl}
                              </p>
                            );
                          })}
                        <span className="d-none">0</span>
                      </div>
                    </div>

                    <div data-title="SUSPENDED" className="bet-table-row">
                      <div className="nation-name d-none-mobile">
                        <p>{runner?.name}</p>
                        {pnl &&
                          pnl?.map(({ pnl }, i) => {
                            return (
                              <p
                                key={i}
                                className="mb-0 float-left"
                                style={{
                                  color: `${pnl > 0 ? "green" : "red"}`,
                                }}
                              >
                                {pnl}
                              </p>
                            );
                          })}

                        <p className="mb-0 float-right d-none">0</p>
                      </div>

                      <div
                        className={`bl-box back2 
                         `}
                      >
                        <span className="d-block odds">
                          {" "}
                          {runner?.back?.[2]?.price || "-"}
                        </span>
                        <span className="d-block">
                          {" "}
                          {runner?.back?.[2]?.size || "-"}
                        </span>
                      </div>
                      <div
                        className={`bl-box back1 
                         `}
                      >
                        <span className="d-block odds">
                          {" "}
                          {runner?.back?.[1]?.price || "-"}
                        </span>
                        <span className="d-block">
                          {" "}
                          {runner?.back?.[1]?.size || "-"}
                        </span>
                      </div>
                      <div
                        className={`bl-box back 
                         `}
                      >
                        <span className="d-block odds">
                          {" "}
                          {runner?.back?.[0]?.price || "-"}
                        </span>
                        <span className="d-block">
                          {" "}
                          {runner?.back?.[0]?.size || "-"}
                        </span>
                      </div>
                      <div
                        className={`bl-box lay
                         `}
                      >
                        <span className="d-block odds">
                          {" "}
                          {runner?.lay?.[0]?.price || "-"}
                        </span>
                        <span className="d-block">
                          {" "}
                          {runner?.lay?.[0]?.size || "-"}
                        </span>
                      </div>
                      <div
                        className={`bl-box lay1
                         `}
                      >
                        <span className="d-block odds">
                          {" "}
                          {runner?.lay?.[1]?.price || "-"}
                        </span>
                        <span className="d-block">
                          {" "}
                          {runner?.lay?.[1]?.size || "-"}
                        </span>
                      </div>
                      <div
                        className={`bl-box lay2
                         `}
                      >
                        <span className="d-block odds">
                          {" "}
                          {runner?.lay?.[2]?.price || "-"}
                        </span>
                        <span className="d-block">
                          {" "}
                          {runner?.lay?.[2]?.size || "-"}
                        </span>
                      </div>
                    </div>
                  </>
                );
              })}

              {/* <div className="bet-table-mobile-row d-none-desktop">
                <div className="bet-table-mobile-team-name">
                  <span>New Zealand</span>
                  <span style={{ color: "rgb(153, 153, 153)" }}>0</span>
                  <span className="d-none">0</span>
                </div>
              </div>
              <div data-title="SUSPENDED" className="bet-table-row">
                <div className="nation-name d-none-mobile">
                  <p>New Zealand</p>
                  <p
                    className="mb-0 float-left"
                    style={{ color: "rgb(153, 153, 153)" }}
                  >
                    0
                  </p>
                  <p className="mb-0 float-right d-none">0</p>
                </div>
                <div className="bl-box back back2 no-val">
                  <span className="d-block odds">—</span>
                </div>
                <div className="bl-box back back1 no-val">
                  <span className="d-block odds">—</span>
                </div>
                <div className="bl-box back back no-val">
                  <span className="d-block odds">—</span>
                </div>
                <div className="bl-box lay lay no-val">
                  <span className="d-block odds">—</span>
                </div>
                <div className="bl-box lay lay1 no-val">
                  <span className="d-block odds">—</span>
                </div>
                <div className="bl-box lay lay2 no-val">
                  <span className="d-block odds">—</span>
                </div>
              </div> */}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Bookmaker2;
