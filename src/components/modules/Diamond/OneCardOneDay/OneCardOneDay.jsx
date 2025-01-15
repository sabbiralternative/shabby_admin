import { isDiamondSuspended } from "../../../../utils/isDiamondSuspended";

const OneCardOneDay = ({ data }) => {
  return (
    <div className="casino-detail">
      <div className="teen1daycasino-container">
        <div className="teen1dayleft">
          <div className="casino-box-row">
            <div className="casino-nation-name">
              <b>Player</b>
              <div className="float-right">
                <span className="mr-2 book-black">0</span>
              </div>
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item suspended ${isDiamondSuspended(
                  data?.[0],
                  data[0]?.runners[0]
                )}`}
              >
                <span className="casino-box-odd">
                  {data?.[0]?.runners?.[0]?.back?.[0]?.price}
                </span>
              </div>
              <div
                className={`lay casino-bl-box-item ${isDiamondSuspended(
                  data?.[0],
                  data[0]?.runners[0]
                )}`}
              >
                <span className="casino-box-odd">
                  {" "}
                  {data?.[0]?.runners?.[0]?.lay?.[0]?.price}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="teen1daycenter" />
        <div className="teen1dayright">
          <div className="casino-box-row">
            <div className="casino-nation-name">
              <b>Dealer</b>
              <div className="float-right">
                {/* <span className="mr-2 book-black">0</span> */}
              </div>
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[0],
                  data[0]?.runners[1]
                )}`}
              >
                <span className="casino-box-odd">
                  {data?.[0]?.runners?.[1]?.back?.[0]?.price}
                </span>
              </div>
              <div
                className={`lay casino-bl-box-item ${isDiamondSuspended(
                  data?.[0],
                  data[0]?.runners[1]
                )}`}
              >
                <span className="casino-box-odd">
                  {data?.[0]?.runners?.[1]?.lay?.[0]?.price}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="teen1daycasino-container">
        <div className="teen1dayleft">
          <div className="seven-up-down-box">
            <div
              className={`down-box ${isDiamondSuspended(
                data?.[1],
                data[0]?.runners[0]
              )}`}
            >
              {/* <div className="up-down-book book-black">0</div> */}
              <div className="text-right">
                <div className="up-down-odds">
                  {" "}
                  {data[1]?.runners[0]?.back[0]?.price}
                </div>
                <span>DOWN</span>
              </div>
            </div>
            <div
              className={`down-box ${isDiamondSuspended(
                data?.[1],
                data[0]?.runners[1]
              )}`}
            >
              {/* <div className="up-down-book book-black">0</div> */}
              <div className="text-left">
                <div className="up-down-odds">
                  {" "}
                  {data[1]?.runners[1]?.back[0]?.price}
                </div>
                <span>UP</span>
              </div>
            </div>
            <div className="seven-box">
              <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/trape-seven.png" />
            </div>
          </div>
        </div>
        <div className="teen1daycenter" />
        <div className="teen1dayright">
          <div className="seven-up-down-box">
            <div
              className={`up-box ${isDiamondSuspended(
                data?.[2],
                data[0]?.runners[0]
              )}`}
            >
              {/* <div className="up-down-book book-black">0</div> */}
              <div className="text-right">
                <div className="up-down-odds">
                  {" "}
                  {data[2]?.runners[0]?.back[0]?.price}
                </div>
                <span>DOWN</span>
              </div>
            </div>
            <div
              className={`down-box ${isDiamondSuspended(
                data?.[2],
                data[0]?.runners[1]
              )}`}
            >
              {/* <div className="up-down-book book-black">0</div> */}
              <div className="text-left">
                <div className="up-down-odds">
                  {" "}
                  {data[2]?.runners[1]?.back[0]?.price}
                </div>
                <span>UP</span>
              </div>
            </div>
            <div className="seven-box">
              <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/trape-seven.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneCardOneDay;
