import { isDiamondSuspended } from "../../../../utils/isDiamondSuspended";

const Baccrat = ({ data }) => {
  return (
    <div className="casino-detail">
      <div className="baccarat-bets-odds pt-3">
        <div className="baccarat-odds">
          <div className="baccarat-odd-block">
            <div
              className={`baccarat-odd-name ${isDiamondSuspended(
                data?.[3],
                data?.[3]?.runners?.[0]
              )}`}
            >
              Perfect Pair {data?.[3]?.runners[0]?.back[0]?.price}
            </div>
            {/* <div className="baccarat-odd-val book-black">0</div> */}
            <div className="casino-min-max">
              <i
                data-toggle="collapse"
                data-target="#range1"
                className="fas fa-info-circle float-right"
              />
              <div id="range1" className="collapse icon-range">
                R:<span>100</span>-<span>100K</span>
              </div>
            </div>
          </div>
          <div className="baccarat-odd-block">
            <div
              className={`baccarat-odd-name ${isDiamondSuspended(
                data?.[4],
                data?.[4]?.runners?.[0]
              )}`}
            >
              Big {data?.[4]?.runners[0]?.back[0]?.price}
            </div>
            {/* <div className="baccarat-odd-val book-black">0</div> */}
            <div className="casino-min-max">
              <i
                data-toggle="collapse"
                data-target="#range2"
                className="fas fa-info-circle float-right"
              />
              <div id="range2" className="collapse icon-range">
                R:<span>100</span>-<span>100K</span>
              </div>
            </div>
          </div>
          <div className="baccarat-odd-block">
            <div
              className={`baccarat-odd-name ${isDiamondSuspended(
                data?.[5],
                data?.[5]?.runners?.[0]
              )}`}
            >
              Small {data?.[5]?.runners[0]?.back[0]?.price}
            </div>
            {/* <div className="baccarat-odd-val book-black">0</div> */}
            <div className="casino-min-max">
              <i
                data-toggle="collapse"
                data-target="#range3"
                className="fas fa-info-circle float-right"
              />
              <div id="range3" className="collapse icon-range">
                R:<span>100</span>-<span>100K</span>
              </div>
            </div>
          </div>
          <div className="baccarat-odd-block">
            <div
              className={`baccarat-odd-name ${isDiamondSuspended(
                data?.[6],
                data?.[6]?.runners?.[0]
              )}`}
            >
              Either Pair {data?.[6]?.runners[0]?.back[0]?.price}
            </div>
            {/* <div className="baccarat-odd-val book-black">0</div> */}
            <div className="casino-min-max">
              <i
                data-toggle="collapse"
                data-target="#range4"
                className="fas fa-info-circle float-right"
              />
              <div id="range4" className="collapse icon-range">
                R:<span>100</span>-<span>100K</span>
              </div>
            </div>
          </div>
          {/**/}
        </div>
        <div className="baccarat-bets">
          <div className="player-pair">
            <div
              className={`baccarat-bets-name ${isDiamondSuspended(
                data?.[1],
                data?.[1]?.runners?.[0]
              )}`}
            >
              <div>Player Pair</div>
              <div className="mb-0">
                {data?.[1]?.runners[0]?.back[0]?.price}
              </div>
            </div>
            {/* <div className="baccarat-bets-val book-black">0</div> */}
            <div className="casino-min-max">
              <i
                data-toggle="collapse"
                data-target="#range5"
                className="fas fa-info-circle"
              />
              <div id="range5" className="collapse icon-range">
                R:<span>100</span>-<span>100K</span>
              </div>
            </div>
          </div>
          <div className="player">
            <div
              className={`baccarat-bets-name ${isDiamondSuspended(
                data?.[0],
                data?.[0]?.runners?.[0]
              )}`}
            >
              <div>Player {data?.[0]?.runners[0]?.back[0]?.price}</div>
              <div className="mb-0">
                {data[0]?.runners[0]?.card?.length > 2 && (
                  <span data-v-79776e43 className="l-rotate">
                    <img
                      data-v-79776e43
                      src={`/src/assets/cards/${data[0]?.runners[0]?.card[2]}.jpg`}
                    />
                  </span>
                )}
                {data[0]?.runners[0]?.card?.length > 1 && (
                  <span data-v-79776e43>
                    <img
                      data-v-79776e43
                      src={`/src/assets/cards/${data[0]?.runners[0]?.card[1]}.jpg`}
                    />
                  </span>
                )}
                {data[0]?.runners[0]?.card?.length > 0 && (
                  <span data-v-79776e43>
                    <img
                      data-v-79776e43
                      src={`/src/assets/cards/${data[0]?.runners[0]?.card[0]}.jpg`}
                    />
                  </span>
                )}
              </div>
            </div>
            {/* <div className="baccarat-bets-val book-black">0</div> */}
            <div className="casino-min-max">
              <i
                data-toggle="collapse"
                data-target="#range6"
                className="fas fa-info-circle"
              />
              <div id="range6" className="collapse icon-range">
                R:<span>100</span>-<span>100K</span>
              </div>
            </div>
          </div>
          <div className="tie">
            <div
              className={`baccarat-bets-name ${isDiamondSuspended(
                data?.[0],
                data?.[0]?.runners?.[2]
              )}`}
            >
              <div>Tie</div>
              <div className="mb-0">
                {data?.[0]?.runners[2]?.back[0]?.price}
              </div>
            </div>
            {/* <div className="baccarat-bets-val book-black">0</div> */}
            <div className="casino-min-max">
              <i
                data-toggle="collapse"
                data-target="#range7"
                className="fas fa-info-circle"
              />
              <div id="range7" className="collapse icon-range">
                R:<span>100</span>-<span>100K</span>
              </div>
            </div>
          </div>
          <div className="banker">
            <div
              className={`baccarat-bets-name ${isDiamondSuspended(
                data?.[0],
                data?.[0]?.runners?.[1]
              )}`}
            >
              <div>Banker {data?.[0]?.runners[1]?.back[0]?.price}</div>
              <div className="mb-0">
                {data[0]?.runners[1]?.card?.length > 0 && (
                  <span data-v-79776e43>
                    <img
                      data-v-79776e43
                      src={`/src/assets/cards/${data[0]?.runners[1]?.card[0]}.jpg`}
                    />
                  </span>
                )}
                {data[0]?.runners[1]?.card?.length > 1 && (
                  <span data-v-79776e43>
                    <img
                      data-v-79776e43
                      src={`/src/assets/cards/${data[0]?.runners[1]?.card[1]}.jpg`}
                    />
                  </span>
                )}
                {data[0]?.runners[1]?.card?.length > 2 && (
                  <span data-v-79776e43>
                    <img
                      className="r-rotate"
                      data-v-79776e43
                      src={`/src/assets/cards/${data[0]?.runners[1]?.card[2]}.jpg`}
                    />
                  </span>
                )}
              </div>
            </div>
            {/* <div className="baccarat-bets-val book-black">0</div> */}
            <div className="casino-min-max">
              <i
                data-toggle="collapse"
                data-target="#range8"
                className="fas fa-info-circle"
              />
              <div id="range8" className="collapse icon-range">
                R:<span>100</span>-<span>100K</span>
              </div>
            </div>
          </div>
          <div className="banker-pair">
            <div
              className={`baccarat-bets-name ${isDiamondSuspended(
                data?.[2],
                data?.[2]?.runners?.[0]
              )}`}
            >
              <div>Banker Pair</div>
              <div className="mb-0">
                {data?.[2]?.runners[0]?.back[0]?.price}
              </div>
            </div>
            {/* <div className="baccarat-bets-val book-black">0</div> */}
            <div className="casino-min-max">
              <i
                data-toggle="collapse"
                data-target="#range9"
                className="fas fa-info-circle"
              />
              <div id="range9" className="collapse icon-range">
                R:<span>100</span>-<span>100K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Baccrat;
