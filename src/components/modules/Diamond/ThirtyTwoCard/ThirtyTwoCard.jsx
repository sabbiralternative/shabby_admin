import { isDiamondSuspended } from "../../../../utils/isDiamondSuspended";

const ThirtyTwoCard = ({ data }) => {
  return (
    <div className="casino-detail">
      <div className="teen1daycasino-container">
        <div className="teen1dayleft">
          <div className="casino-box-row">
            <div className="casino-nation-name">
              <b>Player 8</b>
              <div className="float-right">
                <span className="mr-2 casino-book book-black">0</span>
                <i
                  data-toggle="collapse"
                  data-target="#demo0"
                  className="fas fa-info-circle"
                />
                <div id="demo0" className="collapse icon-range">
                  Range: <span>100</span>-<span>300K</span>
                </div>
              </div>
            </div>
            <div className="casino-bl-box ">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[0],
                  data?.[0]?.runners?.[0]
                )}`}
              >
                <span className="casino-box-odd">
                  {data?.[0]?.runners?.[0]?.back?.[0]?.price}
                </span>
              </div>
              <div
                className={`lay casino-bl-box-item ${isDiamondSuspended(
                  data?.[0],
                  data?.[0]?.runners?.[0]
                )}`}
              >
                <span className="casino-box-odd">
                  {" "}
                  {data?.[0]?.runners?.[0]?.lay?.[0]?.price}
                </span>
              </div>
            </div>
          </div>
          <div className="casino-box-row">
            <div className="casino-nation-name">
              <b>Player 9</b>
              <div className="float-right">
                <span className="mr-2 casino-book book-black">0</span>
                <i
                  data-toggle="collapse"
                  data-target="#demo1"
                  className="fas fa-info-circle"
                />
                <div id="demo1" className="collapse icon-range">
                  Range: <span>100</span>-<span>300K</span>
                </div>
              </div>
            </div>
            <div className="casino-bl-box ">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[0],
                  data?.[0]?.runners?.[1]
                )}`}
              >
                <span className="casino-box-odd">
                  {" "}
                  {data?.[0]?.runners?.[1]?.back?.[0]?.price}
                </span>
              </div>
              <div
                className={`lay casino-bl-box-item ${isDiamondSuspended(
                  data?.[0],
                  data?.[0]?.runners?.[1]
                )}`}
              >
                <span className="casino-box-odd">
                  {" "}
                  {data?.[0]?.runners?.[1]?.lay?.[0]?.price}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="teen1daycenter" />
        <div className="teen1dayright">
          <div className="casino-box-row">
            <div className="casino-nation-name">
              <b>Player 10</b>
              <div className="float-right">
                <span className="mr-2 casino-book book-black">0</span>
                <i
                  data-toggle="collapse"
                  data-target="#demo2"
                  className="fas fa-info-circle"
                />
                <div id="demo2" className="collapse icon-range">
                  Range: <span>100</span>-<span>300K</span>
                </div>
              </div>
            </div>
            <div className="casino-bl-box ">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[0],
                  data?.[0]?.runners?.[2]
                )}`}
              >
                <span className="casino-box-odd">
                  {" "}
                  {data?.[0]?.runners?.[2]?.back?.[0]?.price}
                </span>
              </div>
              <div
                className={`lay casino-bl-box-item ${isDiamondSuspended(
                  data?.[0],
                  data?.[0]?.runners?.[2]
                )}`}
              >
                <span className="casino-box-odd">
                  {" "}
                  {data?.[0]?.runners?.[2]?.lay?.[0]?.price}
                </span>
              </div>
            </div>
          </div>
          <div className="casino-box-row">
            <div className="casino-nation-name">
              <b>Player 11</b>
              <div className="float-right">
                <span className="mr-2 casino-book book-black">0</span>
                <i
                  data-toggle="collapse"
                  data-target="#demo3"
                  className="fas fa-info-circle"
                />
                <div id="demo3" className="collapse icon-range">
                  Range: <span>100</span>-<span>300K</span>
                </div>
              </div>
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[0],
                  data?.[0]?.runners?.[3]
                )}`}
              >
                <span className="casino-box-odd">
                  {" "}
                  {data?.[0]?.runners?.[3]?.back?.[0]?.price}
                </span>
              </div>
              <div
                className={`lay casino-bl-box-item ${isDiamondSuspended(
                  data?.[0],
                  data?.[0]?.runners?.[3]
                )}`}
              >
                <span className="casino-box-odd">
                  {" "}
                  {data?.[0]?.runners?.[3]?.lay?.[0]?.price}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirtyTwoCard;
