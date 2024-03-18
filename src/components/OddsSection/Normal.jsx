const Normal = ({ normal, exposer }) => {
  let pnlBySelection;
  if (exposer?.pnlBySelection) {
    const obj = exposer?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }
  return (
    <div className="bet-table">
      <div className="bet-table-header">
        <div
          data-toggle="collapse"
          data-target="#market2"
          aria-expanded="true"
          className="nation-name"
        >
          <span title="Normal">
            <a title="">
              <img
                src="https://g1ver.sprintstaticdata.com/v11/static/admin/img/arrow-down.svg"
                className="mr-1"
              />
            </a>
            {normal[0]?.tabGroupName}
          </span>
        </div>
        <div className="float-right">
          <a className="btn btn-back">Bet Lock</a>
        </div>
      </div>

      <div
        id="market2"
        data-title="OPEN"
        className="bet-table-body collapse show"
      >
        <div className="bet-table-row">
          <div className="text-right nation-name"></div>
          <div className="lay bl-title d-none-mobile">No</div>
          <div className="back bl-title d-none-mobile">Yes</div>
        </div>

        {normal?.map((fancyGame) => {
          const pnl = pnlBySelection?.filter(
            (pnl) => pnl?.MarketId === fancyGame?.id
          );

          return (
            <div key={fancyGame?.id} className="fancy-tripple">
              <div className="bet-table-mobile-row d-none-desktop">
                <div className="bet-table-mobile-team-name">
                  <span>{fancyGame?.name}</span>
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
              </div>
              <div
                className={`${
                  fancyGame?.status === "OPEN"
                    ? "bet-table-row"
                    : "bet-table-row suspendedfull"
                }`}
                data-title={`${
                  fancyGame?.status === "OPEN" ? "ACTIVATE" : "SUSPENDED"
                }`}
              >
                {/*  <!-- suspendedfull--> */}
                <div className="nation-name d-none-mobile">
                  <p> {fancyGame?.name}</p>
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

                {fancyGame?.runners.map((runner) =>
                  runner.lay.map((lay, i) => {
                    return (
                      <div key={i} className="bl-box lay">
                        <span className="d-block odds">{lay.price}</span>
                        <span className="d-block">{lay.line}</span>
                      </div>
                    );
                  })
                )}

                {fancyGame?.runners?.map((runner) =>
                  runner.back.map((back, i) => {
                    return (
                      <div key={i} className="bl-box back">
                        <span className="d-block odds">{back.line}</span>
                        <span className="d-block">{back.price}</span>
                      </div>
                    );
                  })
                )}
                <div className="fancy-min-max">
                  Min:<span>{fancyGame?.minLiabilityPerBet}</span> Max:
                  <span>{fancyGame?.maxLiabilityPerMarket}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Normal;
