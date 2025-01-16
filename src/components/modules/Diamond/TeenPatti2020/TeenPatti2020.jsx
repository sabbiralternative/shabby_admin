import { isDiamondSuspended } from "../../../../utils/isDiamondSuspended";

const TeenPatti2020 = ({ data }) => {
  return (
    <div className="casino-detail">
      <div className="teen20casino-container d-none-small">
        <div className="teen20left">
          <div className="casino-box-row">
            <div className="casino-nation-name no-border casino-bl-box-title">
              <div className="playera">Player A</div>
            </div>
          </div>
          <div className="casino-bl-box casino-bl-box-title">
            <div className="casino-bl-box-item">
              <span>Player</span>
              <div className="ml-1">
                <i
                  data-toggle="collapse"
                  data-target="#range1"
                  className="fas fa-info-circle float-right"
                />
                <div id="range1" className="collapse icon-range">
                  R:<span>100</span>-<span>500K</span>
                </div>
              </div>
            </div>
            <div className="casino-bl-box-item">
              <span>3 Baccarat</span>
              <div className="ml-1">
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
            <div className="casino-bl-box-item">
              <span>Total</span>
              <div className="ml-1">
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
            <div className="casino-bl-box-item">
              <span>Pair Plus</span>
              <div className="ml-1">
                <i
                  data-toggle="collapse"
                  data-target="#range4"
                  className="fas fa-info-circle float-right"
                />
                <div id="range4" className="collapse icon-range">
                  R:<span>100</span>-<span>25K</span>
                </div>
              </div>
            </div>
          </div>
          <div className="casino-bl-box mb-4">
            <div
              className={`back casino-bl-box-item ${isDiamondSuspended(
                data?.[0],
                data?.[0]?.runners?.[0]
              )}`}
            >
              <span className="casino-box-odd">
                {" "}
                {data?.[0]?.runners[0]?.back[0]?.price}
              </span>{" "}
              {/* <span className="casino-book book-black">0</span> */}
            </div>
            <div
              className={`back casino-bl-box-item ${isDiamondSuspended(
                data?.[3],
                data?.[3]?.runners?.[0]
              )}`}
            >
              <span className="casino-box-odd">
                {data[3]?.runners[0]?.back[0]?.price}
              </span>{" "}
              {/* <span className="casino-book book-black">0</span> */}
            </div>
            <div
              className={`back casino-bl-box-item ${isDiamondSuspended(
                data?.[4],
                data?.[4]?.runners?.[0]
              )}`}
            >
              <span className="casino-box-odd">
                {" "}
                {data[4]?.runners[0]?.back[0]?.price}
              </span>{" "}
              {/* <span className="casino-book book-black">0</span> */}
            </div>
            <div
              className={`back casino-bl-box-item ${isDiamondSuspended(
                data?.[1],
                data?.[1]?.runners?.[0]
              )}`}
            >
              <span className="casino-box-odd">
                {data[1]?.runners[0]?.back[0]?.price}
              </span>{" "}
              {/* <span className="casino-book book-black">0</span> */}
            </div>
          </div>
          <div className="casino-rb-box-container mb-3">
            <div className="casino-rb-box blackcontainer">
              <div
                className={`casino-rb-box-player blackbox back ${isDiamondSuspended(
                  data?.[5],
                  data?.[5]?.runners?.[0]
                )}`}
              >
                <div className="text-right">
                  <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/spade.png" />{" "}
                  <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/club.png" />
                </div>
                <div className="text-right">
                  <span className="d-block casino-box-odd">
                    {" "}
                    {data[5]?.runners[0]?.back[0]?.price}
                  </span>{" "}
                  <span className="casino-book book-black">0</span>
                </div>
              </div>
              <div className="text-right casino-rb-box-player-range">
                <i
                  data-toggle="collapse"
                  data-target="#range5"
                  className="fas fa-info-circle float-right"
                />
                <div id="range5" className="collapse icon-range">
                  R:<span>100</span>-<span>25K</span>
                </div>
              </div>
            </div>
            <div className="casino-rb-box redcontainer">
              <div
                className={`casino-rb-box-player redbox back ${isDiamondSuspended(
                  data?.[5],
                  data?.[5]?.runners?.[1]
                )}`}
              >
                <div>
                  <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/heart.png" />{" "}
                  <img
                    src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/diamond.png"
                    className="diamond-icon"
                  />
                </div>
                <div className="text-right">
                  <span className="d-block casino-box-odd">
                    {" "}
                    {data[5]?.runners[1]?.back[0]?.price}
                  </span>{" "}
                  {/* <span className="casino-book book-black">0</span> */}
                </div>
              </div>
              <div className="text-right casino-rb-box-player-range">
                <i
                  data-toggle="collapse"
                  data-target="#range6"
                  className="fas fa-info-circle float-right"
                />
                <div id="range6" className="collapse icon-range">
                  R:<span>100</span>-<span>25K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="teen20center" />
        <div className="teen20right">
          <div className="casino-box-row">
            <div className="casino-nation-name no-border casino-bl-box-title">
              <div className="playerb">Player B</div>
            </div>
          </div>
          <div className="casino-bl-box casino-bl-box-title">
            <div className="casino-bl-box-item">
              <span>Player</span>
              <div className="ml-1">
                <i
                  data-toggle="collapse"
                  data-target="#range7"
                  className="fas fa-info-circle float-right"
                />
                <div id="range7" className="collapse icon-range">
                  R:<span>100</span>-<span>500K</span>
                </div>
              </div>
            </div>
            <div className="casino-bl-box-item">
              <span>3 Baccarat</span>
              <div className="ml-1">
                <i
                  data-toggle="collapse"
                  data-target="#range8"
                  className="fas fa-info-circle float-right"
                />
                <div id="range8" className="collapse icon-range">
                  R:<span>100</span>-<span>100K</span>
                </div>
              </div>
            </div>
            <div className="casino-bl-box-item">
              <span>Total</span>
              <div className="ml-1">
                <i
                  data-toggle="collapse"
                  data-target="#range9"
                  className="fas fa-info-circle float-right"
                />
                <div id="range9" className="collapse icon-range">
                  R:<span>100</span>-<span>100K</span>
                </div>
              </div>
            </div>
            <div className="casino-bl-box-item">
              <span>Pair Plus</span>
              <div className="ml-1">
                <i
                  data-toggle="collapse"
                  data-target="#range10"
                  className="fas fa-info-circle float-right"
                />
                <div id="range10" className="collapse icon-range">
                  R:<span>100</span>-<span>25K</span>
                </div>
              </div>
            </div>
          </div>
          <div className="casino-bl-box mb-4">
            <div
              className={`back casino-bl-box-item ${isDiamondSuspended(
                data?.[0],
                data?.[0]?.runners?.[1]
              )}`}
            >
              <span className="casino-box-odd">
                {" "}
                {data[0]?.runners[1]?.back[0]?.price}
              </span>{" "}
              {/* <span className="casino-book book-black">0</span> */}
            </div>
            <div
              className={`back casino-bl-box-item ${isDiamondSuspended(
                data?.[3],
                data?.[3]?.runners?.[1]
              )}`}
            >
              <span className="casino-box-odd">
                {data[3]?.runners[1]?.back[0]?.price}
              </span>{" "}
              {/* <span className="casino-book book-black">0</span> */}
            </div>
            <div
              className={`back casino-bl-box-item ${isDiamondSuspended(
                data?.[4],
                data?.[4]?.runners?.[1]
              )}`}
            >
              <span className="casino-box-odd">
                {data[4]?.runners[1]?.back[0]?.price}
              </span>{" "}
              {/* <span className="casino-book book-black">0</span> */}
            </div>
            <div
              className={`back casino-bl-box-item ${isDiamondSuspended(
                data?.[2],
                data?.[2]?.runners?.[0]
              )}`}
            >
              <span className="casino-box-odd">
                {" "}
                {data[2]?.runners[0]?.back[0]?.price}
              </span>{" "}
              {/* <span className="casino-book book-black">0</span> */}
            </div>
          </div>
          <div className="casino-rb-box-container mb-3">
            <div className="casino-rb-box blackcontainer">
              <div
                className={`casino-rb-box-player blackbox back ${isDiamondSuspended(
                  data?.[6],
                  data?.[6]?.runners?.[0]
                )}`}
              >
                <div>
                  <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/spade.png" />{" "}
                  <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/club.png" />
                </div>
                <div className="text-right">
                  <span className="d-block casino-box-odd">
                    {data[6]?.runners[0]?.back[0]?.price}
                  </span>{" "}
                  {/* <span className="casino-book book-black">0</span> */}
                </div>
              </div>
              <div className="text-right casino-rb-box-player-range">
                <i
                  data-toggle="collapse"
                  data-target="#range11"
                  className="fas fa-info-circle float-right"
                />
                <div id="range11" className="collapse icon-range">
                  R:<span>100</span>-<span>25K</span>
                </div>
              </div>
            </div>
            <div className="casino-rb-box redcontainer">
              <div
                className={`casino-rb-box-player redbox back ${isDiamondSuspended(
                  data?.[6],
                  data?.[6]?.runners?.[1]
                )}`}
              >
                <div>
                  <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/heart.png" />{" "}
                  <img
                    src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/diamond.png"
                    className="diamond-icon"
                  />
                </div>
                <div className="text-right">
                  <span className="d-block casino-box-odd">
                    {" "}
                    {data[6]?.runners[1]?.back[0]?.price}
                  </span>{" "}
                  {/* <span className="casino-book book-black">0</span> */}
                </div>
              </div>
              <div className="text-right casino-rb-box-player-range">
                <i
                  data-toggle="collapse"
                  data-target="#range12"
                  className="fas fa-info-circle float-right"
                />
                <div id="range12" className="collapse icon-range">
                  R:<span>100</span>-<span>25K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeenPatti2020;
