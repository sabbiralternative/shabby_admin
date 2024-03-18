const MatchOdds = ({ match_odds, exposer }) => {
  let pnlBySelection;
  if (exposer?.pnlBySelection) {
    const obj = exposer?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }
  return (
    <>
      {match_odds?.map((item) => {
        return (
          <div key={item.id} className="bet-table">
            <div className="bet-table-header">
              <div
                data-toggle="collapse"
                data-target="#market0"
                aria-expanded="true"
                className="nation-name collapsed"
              >
                <span title="MATCH_ODDS">
                  <a title="">
                    <img
                      src="https://g1ver.sprintstaticdata.com/v11/static/admin/img/arrow-down.svg"
                      className="mr-1"
                    />
                  </a>
                  {item?.name.toUpperCase()}
                </span>
              </div>
              <div className="float-right">
                <a className="btn btn-back">Bet Lock</a>
                <a className="btn btn-back">User Book</a>
              </div>
            </div>

            <div
              id="market0"
              className={`bet-table-body show ${
                item?.status !== "OPEN" ? "suspendedfull" : " "
              } `}
              data-title={`${item?.status !== "OPEN" ? "SUSPENDED" : ""}`}
            >
              <div className="bet-table-row bet-table-row-top">
                <div className="text-right nation-name">
                  <span className="max-bet">
                    <span title="Max : 1">{item?.maxLiabilityPerBet}</span>
                  </span>
                </div>
                <div className="back bl-title d-none-mobile">Back</div>
                <div className="lay bl-title d-none-mobile">Lay</div>
              </div>

              {item?.runners?.map((runner) => {
                const pnl = pnlBySelection?.filter(
                  (pnl) => pnl?.RunnerId === runner?.id
                );

                return (
                  <>
                    <div className="bet-table-mobile-row d-none-desktop">
                      <div className="bet-table-mobile-team-name">
                        <span> {runner?.name}</span>
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
                    <div
                      className={`${
                        runner?.status === "OPEN" || runner?.status === "ACTIVE"
                          ? "bet-table-row"
                          : "suspendedfull"
                      }`}
                      data-title={`${
                        runner?.status === "OPEN" || runner?.status === "ACTIVE"
                          ? "ACTIVATE"
                          : "SUSPENDED"
                      }`}
                    >
                      <div className="nation-name d-none-mobile">
                        <p> {runner?.name}</p>

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

                     
                      </div>

                      {runner.back.length === 1 && (
                        <>
                          <div className={`bl-box back2`}>
                            <span className="d-block odds">-</span>
                          </div>

                          <div className={`bl-box back1`}>
                            <span className="d-block odds">-</span>
                          </div>
                        </>
                      )}

                      {runner?.back
                        ?.slice()
                        ?.reverse()
                        ?.map((back, i) => {
                          return (
                            <div
                              key={i}
                              className={`bl-box back ${
                                i === 0 && runner.back.length !== 1
                                  ? "back2"
                                  : ""
                              } ${i === 1 ? "back1" : ""} ${
                                i === 2 && runner ? "back" : ""
                              }
                          ${runner.back.length === 1 && i === 0 ? "back" : ""}`}
                            >
                              {back?.price || back?.size ? (
                                <>
                                  <span className="d-block odds">
                                    {" "}
                                    {back?.price}
                                  </span>
                                  <span className="d-block"> {back?.size}</span>
                                </>
                              ) : (
                                <span className="d-block odds">-</span>
                              )}
                            </div>
                          );
                        })}

                      {runner?.lay?.map((lay, i) => {
                        return (
                          <div
                            key={i}
                            className={`bl-box ${i === 0 ? "lay" : ""} ${
                              i === 1 ? "lay1" : ""
                            } ${i === 2 ? "lay2" : ""} `}
                          >
                            {lay?.price || lay?.size ? (
                              <>
                                <span className="d-block odds">
                                  {lay?.price}
                                </span>
                                <span className="d-block"> {lay?.size}</span>
                              </>
                            ) : (
                              <span className="d-block odds">-</span>
                            )}
                          </div>
                        );
                      })}

                      {runner.lay.length === 1 && (
                        <>
                          <div className={`bl-box lay1`}>
                            <span className="d-block odds">-</span>
                          </div>

                          <div className={`bl-box lay2`}>
                            <span className="d-block odds">-</span>
                          </div>
                        </>
                      )}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MatchOdds;
