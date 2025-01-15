import { isDiamondSuspended } from "../../../../utils/isDiamondSuspended";

const TeenPattiTest = ({ data }) => {
  return (
    <div className="casino-detail">
      <div className="teen1daycasino-container d-none-small">
        <div className="teentestother">
          <div className="casino-box-row">
            <div className="casino-nation-name no-border" />
            <div className="casino-bl-box">
              <div className="casino-bl-box-item">
                <b>Winner</b>
                <div className="float-right">
                  <i
                    data-toggle="collapse"
                    data-target="#range1"
                    className="fas fa-info-circle"
                  />
                  <div id="range1" className="collapse icon-range">
                    R:<span>100</span>-<span>300K</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="casino-bl-box">
              <div className="casino-bl-box-item">
                <b>Pair</b>
                <div className="float-right">
                  <i
                    data-toggle="collapse"
                    data-target="#range2"
                    className="fas fa-info-circle"
                  />
                  <div id="range2" className="collapse icon-range">
                    R:<span>100</span>-<span>25K</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="casino-bl-box">
              <div className="casino-bl-box-item">
                <b>Flush</b>
                <div className="float-right">
                  <i
                    data-toggle="collapse"
                    data-target="#range3"
                    className="fas fa-info-circle"
                  />
                  <div id="range3" className="collapse icon-range">
                    R:<span>100</span>-<span>10K</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="casino-bl-box">
              <div className="casino-bl-box-item">
                <b>Straight</b>
                <div className="float-right">
                  <i
                    data-toggle="collapse"
                    data-target="#range4"
                    className="fas fa-info-circle"
                  />
                  <div id="range4" className="collapse icon-range">
                    R:<span>100</span>-<span>10K</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="casino-bl-box">
              <div className="casino-bl-box-item">
                <b>Trio</b>
                <div className="float-right">
                  <i
                    data-toggle="collapse"
                    data-target="#range5"
                    className="fas fa-info-circle"
                  />
                  <div id="range5" className="collapse icon-range">
                    R:<span>100</span>-<span>5K</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="casino-bl-box">
              <div className="casino-bl-box-item">
                <b>Straight Flush</b>
                <div className="float-right">
                  <i
                    data-toggle="collapse"
                    data-target="#range6"
                    className="fas fa-info-circle"
                  />
                  <div id="range6" className="collapse icon-range">
                    R:<span>100</span>-<span>5K</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="casino-box-row mb-4">
            <div className="casino-nation-name">
              <b>Tiger</b>
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item  ${isDiamondSuspended(
                  data?.[0],
                  data?.[0]?.runners?.[0]
                )}`}
              >
                <span className="casino-box-odd">
                  {data?.[0]?.runners?.[0]?.back?.[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[1],
                  data?.[1]?.runners?.[0]
                )}`}
              >
                <span className="casino-box-odd">
                  {" "}
                  {data?.[1]?.runners?.[0]?.back?.[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item  ${isDiamondSuspended(
                  data?.[4],
                  data?.[4]?.runners?.[0]
                )}`}
              >
                <span className="casino-box-odd">
                  {data?.[4]?.runners?.[0]?.back?.[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[7],
                  data?.[7]?.runners?.[0]
                )}`}
              >
                <span className="casino-box-odd">
                  {data?.[7]?.runners?.[0]?.back?.[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[10],
                  data?.[10]?.runners?.[0]
                )}`}
              >
                <span className="casino-box-odd">
                  {data?.[10]?.runners?.[0]?.back?.[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[13],
                  data?.[1]?.runners?.[0]
                )}`}
              >
                <span className="casino-box-odd">
                  {data?.[13]?.runners?.[0]?.back?.[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
          </div>
          <div className="casino-box-row mb-4">
            <div className="casino-nation-name">
              <b>Lion</b>
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[0],
                  data?.[0]?.runners?.[1]
                )}`}
              >
                <span className="casino-box-odd">
                  {data?.[0]?.runners?.[1]?.back?.[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[2],
                  data?.[2]?.runners?.[0]
                )}`}
              >
                <span className="casino-box-odd">
                  {data?.[2]?.runners?.[0]?.back?.[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[5],
                  data?.[5]?.runners?.[0]
                )}`}
              >
                <span className="casino-box-odd">
                  {data?.[5]?.runners?.[0]?.back?.[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[8],
                  data?.[8]?.runners?.[0]
                )}`}
              >
                <span className="casino-box-odd">
                  {data?.[8]?.runners?.[0]?.back?.[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[11],
                  data?.[11]?.runners?.[0]
                )}`}
              >
                <span className="casino-box-odd">
                  {data?.[11]?.runners?.[0]?.back?.[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[14],
                  data?.[14]?.runners?.[0]
                )}`}
              >
                <span className="casino-box-odd">
                  {data?.[14]?.runners?.[0]?.back?.[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
          </div>
          <div className="casino-box-row mb-4">
            <div className="casino-nation-name">
              <b>Dragon</b>
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[0],
                  data?.[0]?.runners?.[2]
                )}`}
              >
                <span className="casino-box-odd">
                  {data?.[0]?.runners?.[2]?.back?.[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[3],
                  data?.[3]?.runners?.[0]
                )}`}
              >
                <span className="casino-box-odd">
                  {data?.[3]?.runners?.[0]?.back?.[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[6],
                  data?.[6]?.runners?.[0]
                )}`}
              >
                <span className="casino-box-odd">
                  {data?.[6]?.runners?.[0]?.back?.[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[9],
                  data?.[9]?.runners?.[0]
                )}`}
              >
                <span className="casino-box-odd">
                  {data?.[9]?.runners?.[0]?.back?.[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[12],
                  data?.[12]?.runners?.[0]
                )}`}
              >
                <span className="casino-box-odd">
                  {data?.[12]?.runners?.[0]?.back?.[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[15],
                  data?.[15]?.runners?.[0]
                )}`}
              >
                <span className="casino-box-odd">
                  {data?.[15]?.runners?.[0]?.back?.[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeenPattiTest;
