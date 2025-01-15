import { isDiamondSuspended } from "../../../../utils/isDiamondSuspended";

const MaflisTeenPatti = ({ data }) => {
  return (
    <div className="casino-detail">
      <div className="teen1daycasino-container">
        <div className="teen1dayleft">
          <div className="casino-box-row">
            <div className="casino-nation-name no-border casino-bl-box-title">
              <div className="playera text-left">Player A</div>
            </div>
          </div>
          <div className="row row5">
            <div className="col-12 col-md-4">
              <div className="casino-box-row">
                <div className="casino-nation-name">
                  <b>Winner</b>
                </div>
                <div className="casino-bl-box">
                  <div
                    className={`back casino-bl-box-item  ${isDiamondSuspended(
                      data?.[0],
                      data?.[0]?.runners?.[0]
                    )}`}
                  >
                    <span className="casino-box-odd">
                      {" "}
                      {data[0]?.runners[0]?.back[0]?.price}
                    </span>{" "}
                    {/* <span className="book-black">0</span> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="casino-box-row">
                <div className="casino-nation-name">
                  <b>Top 9</b>
                </div>
                <div className="casino-bl-box">
                  <div
                    className={`back casino-bl-box-item  ${isDiamondSuspended(
                      data[2],
                      data?.[2]?.runners?.[0]
                    )}`}
                  >
                    <span className="casino-box-odd">
                      {" "}
                      {data[2]?.runners[0]?.back[0]?.price}
                    </span>{" "}
                    {/* <span className="book-black">0</span> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="casino-box-row">
                <div className="casino-nation-name">
                  <b>M Baccarat A</b>
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
                      {data[1]?.runners[0]?.back[0]?.price}
                    </span>{" "}
                    {/* <span className="book-black">0</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="teen1daycenter" />
        <div className="teen1dayright">
          <div className="casino-box-row">
            <div className="casino-nation-name no-border casino-bl-box-title">
              <div className="playerb text-left">Player B</div>
            </div>
          </div>
          <div className="row row5">
            <div className="col-12 col-md-4">
              <div className="casino-box-row">
                <div className="casino-nation-name">
                  <b>Winner</b>
                </div>
                <div className="casino-bl-box">
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
                    {/* <span className="book-black">0</span> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="casino-box-row">
                <div className="casino-nation-name">
                  <b>Top 9</b>
                </div>
                <div className="casino-bl-box">
                  <div
                    className={`back casino-bl-box-item  ${isDiamondSuspended(
                      data?.[3],
                      data?.[3]?.runners?.[0]
                    )}`}
                  >
                    <span className="casino-box-odd">
                      {data[3]?.runners[0]?.back[0]?.price}
                    </span>{" "}
                    {/* <span className="book-black">0</span> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="casino-box-row">
                <div className="casino-nation-name">
                  <b>M Baccarat B</b>
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
                      {data[1]?.runners[0]?.back[0]?.price}
                    </span>{" "}
                    {/* <span className="book-black">0</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaflisTeenPatti;
