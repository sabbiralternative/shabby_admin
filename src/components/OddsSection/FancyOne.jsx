const FancyOne = ({ fancyOne }) => {
  return (
    <div className="bet-table">
      <div className="bet-table-header">
        <div
          data-toggle="collapse"
          data-target="#market3"
          aria-expanded="true"
          className="nation-name"
        >
          <span title="fancy1">
            <a  title="">
              <img
                src="https://g1ver.sprintstaticdata.com/v11/static/admin/img/arrow-down.svg"
                className="mr-1"
              />
            </a>
            {fancyOne[0]?.tabGroupName}
          </span>
        </div>
        <div className="float-right">
          <a className="btn btn-back">
            Bet Lock
          </a>
        </div>
      </div>
      <div
        id="market3"
        data-title="OPEN"
        className="bet-table-body collapse show"
      >
        <div className="bet-table-row">
          <div className="text-right nation-name"></div>
          <div className="back bl-title d-none-mobile">Back</div>
          <div className="lay bl-title d-none-mobile">Lay</div>
        </div>

        {fancyOne?.map((odd) => {
          return (
            <div key={odd?.id} className="fancy-tripple">
              <div className="bet-table-mobile-row d-none-desktop">
                <div className="bet-table-mobile-team-name">
                  <span>{odd?.name}</span>
                  <span style={{ color: "rgb(153, 153, 153)" }}>0</span>
                </div>
              </div>

              <div data-title="" className="bet-table-row">
                <div className="nation-name d-none-mobile">
                  <p>{odd?.name}</p>
                  <p className="mb-0" style={{ color: "rgb(153, 153, 153)" }}>
                    0
                  </p>
                </div>

                {odd?.runners.map((runner) =>
                  runner.lay.map((lay, i) => {
                    return (
                      <div key={i} className="bl-box lay">
                        <span className="d-block odds">{lay.line}</span>
                        <span className="d-block">{lay.price}</span>
                      </div>
                    );
                  })
                )}
                {odd?.runners?.map((runner) =>
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
                  Min:<span>{odd?.minLiabilityPerBet}</span> Max:
                  <span>{odd?.maxLiabilityPerMarket}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FancyOne;
