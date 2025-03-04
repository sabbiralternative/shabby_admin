import { isDiamondSuspended } from "../../../../utils/isDiamondSuspended";

const TeenPattiOpen = ({ data }) => {
  return (
    <div className="casino-detail">
      <div className="casino-box mb-2 ">
        <div className="casino-open-card-box">
          {data?.slice(0, 8)?.map((game, i) =>
            game?.runners?.map((runner) => {
              return (
                <div key={runner?.id}>
                  <div>
                    <b>{i + 1}</b>
                  </div>
                  <div>
                    {runner?.card?.map((c) => (
                      <span key={c} data-v-79776e43>
                        <img
                          data-v-79776e43
                          src={`/src/assets/cards/${c}.jpg`}
                        />
                      </span>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="casino-box-header">
          <div className="casino-nation-name no-border" />
          <div className="casino-bl-box text-right">
            <div className="casino-bl-box-item">
              <span>Player 1</span>
            </div>
            <div className="casino-bl-box-item">
              <span>Player 2</span>
            </div>
            <div className="casino-bl-box-item">
              <span>Player 3</span>
            </div>
            <div className="casino-bl-box-item">
              <span>Player 4</span>
            </div>
            <div className="casino-bl-box-item">
              <span>Player 5</span>
            </div>
            <div className="casino-bl-box-item">
              <span>Player 6</span>
            </div>
            <div className="casino-bl-box-item">
              <span>Player 7</span>
            </div>
            <div className="casino-bl-box-item">
              <span>Player 8</span>
            </div>
          </div>
        </div>
        <div className="casino-box-content">
          <div className="casino-box-row mb-4">
            <div className="casino-nation-name">
              <b>Odds</b>
              <i
                data-target="#range1"
                data-toggle="collapse"
                className="fas fa-info-circle float-right"
              />
              <div id="range1" className="collapse icon-range">
                R:<span>100</span>-<span>100K</span>
              </div>
            </div>
            <div className="casino-bl-box">
              {data?.slice(0, 8)?.map((game) =>
                game?.runners?.map((runner) => (
                  <div
                    key={runner?.id}
                    className={`back casino-bl-box-item ${isDiamondSuspended(
                      game,
                      runner
                    )}`}
                  >
                    <span className="casino-box-odd">
                      {runner?.back?.[0]?.price}
                    </span>
                    {/* <span className="casino-book book-black">0</span> */}
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="casino-box-row mb-4">
            <div className="casino-nation-name">
              <b>Pair Plus</b>
              <i
                data-target="#range3"
                data-toggle="collapse"
                className="fas fa-info-circle float-right"
              />
              <div id="range3" className="collapse icon-range">
                R:<span>100</span>-<span>10K</span>
              </div>
            </div>
            <div className="casino-bl-box">
              {data?.slice(8, 16)?.map((game) =>
                game?.runners?.map((runner) => (
                  <div
                    key={runner?.id}
                    className={`back casino-bl-box-item ${isDiamondSuspended(
                      game,
                      runner
                    )}`}
                  >
                    <span className="casino-box-odd open-pair">
                      {runner?.name}
                    </span>
                    {/* <span className="casino-book book-black">0</span> */}
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="casino-box-row mb-4">
            <div className="casino-nation-name">
              <b>Total</b>
              <i
                data-target="#range2"
                data-toggle="collapse"
                className="fas fa-info-circle float-right"
              />
              <div id="range2" className="collapse icon-range">
                R:<span>100</span>-<span>10K</span>
              </div>
            </div>
            <div className="casino-bl-box">
              {data?.slice(16, 24)?.map((game) =>
                game?.runners?.map((runner) => (
                  <div
                    key={runner?.id}
                    className={`back casino-bl-box-item ${isDiamondSuspended(
                      game,
                      runner
                    )}`}
                  >
                    <span className="casino-box-odd">
                      {runner?.back?.[0]?.price}
                    </span>
                    {/* <span className="casino-book book-black">0</span> */}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeenPattiOpen;
