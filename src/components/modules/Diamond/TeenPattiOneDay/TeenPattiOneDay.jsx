import { isDiamondSuspended } from "../../../../utils/isDiamondSuspended";

const TeenPattiOneDay = ({ data }) => {
  return (
    <div className="casino-detail">
      <div className="teen1daycasino-container d-none-small">
        <div className="teen1dayleft">
          <div className="casino-box-row">
            <div className="casino-nation-name no-border casino-bl-box-title">
              <div className="playera">Player A</div>
            </div>
            <div className="casino-bl-box casino-bl-box-title">
              <div className="casino-bl-box-item">
                <b>Back</b>
              </div>
              <div className="casino-bl-box-item">
                <b>Lay</b>
              </div>
            </div>
          </div>
          <div className="casino-box-row">
            <div className="casino-nation-name">
              <b>Main</b>
              <div className="float-right">
                <span className="mr-2 casino-book book-black">0</span>
                <i
                  data-toggle="collapse"
                  data-target="#range1"
                  aria-expanded="false"
                  className="fas fa-info-circle collapsed"
                />
                <div id="range1" className="icon-range collapse">
                  R:<span>100</span>-<span>500K</span>
                </div>
              </div>
            </div>
            <div className="casino-bl-box">
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
            <div className="casino-nation-name casino-card-img">
              <b>Consecutive</b>
              <div className="float-right">
                <span className="mr-2 casino-book book-black">0</span>
                <i
                  data-toggle="collapse"
                  data-target="#range6"
                  aria-expanded="false"
                  className="fas fa-info-circle collapsed"
                />
                <div id="range6" className="icon-range collapse">
                  R:<span>100</span>-<span>100K</span>
                </div>
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
                </span>
              </div>
              <div
                className={`lay casino-bl-box-item ${isDiamondSuspended(
                  data?.[1],
                  data?.[1]?.runners?.[0]
                )}`}
              >
                <span className="casino-box-odd">
                  {" "}
                  {data?.[1]?.runners?.[0]?.lay?.[0]?.price}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="teen1daycenter" />
        <div className="teen1dayright">
          <div className="casino-box-row">
            <div className="casino-nation-name no-border casino-bl-box-title">
              <div className="playerb">Player B</div>
            </div>
            <div className="casino-bl-box casino-bl-box-title">
              <div className="casino-bl-box-item">
                <b>Back</b>
              </div>
              <div className="casino-bl-box-item">
                <b>Lay</b>
              </div>
            </div>
          </div>
          <div className="casino-box-row">
            <div className="casino-nation-name">
              <b>Main</b>
              <div className="float-right">
                <span className="mr-2 casino-book book-black">0</span>
                <i
                  data-toggle="collapse"
                  data-target="#range7"
                  aria-expanded="false"
                  className="fas fa-info-circle collapsed"
                />
                <div id="range7" className="icon-range collapse">
                  R:<span>100</span>-<span>500K</span>
                </div>
              </div>
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
          <div className="casino-box-row">
            <div className="casino-nation-name casino-card-img">
              <b>Consecutive</b>
              <div className="float-right">
                <span className="mr-2 casino-book book-black">0</span>
                <i
                  data-toggle="collapse"
                  data-target="#range12"
                  aria-expanded="false"
                  className="fas fa-info-circle collapsed"
                />
                <div id="range12" className="icon-range collapse">
                  R:<span>100</span>-<span>100K</span>
                </div>
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
                  {" "}
                  {data?.[2]?.runners?.[0]?.back?.[0]?.price}
                </span>
              </div>
              <div
                className={`lay casino-bl-box-item ${isDiamondSuspended(
                  data?.[2],
                  data?.[2]?.runners?.[0]
                )}`}
              >
                <span className="casino-box-odd">
                  {" "}
                  {data?.[2]?.runners?.[0]?.lay?.[0]?.price}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="teen1dayother">
          <div className="casino-box-row">
            <div className="casino-nation-name no-border" />
            <div className="casino-bl-box">
              <div className="casino-bl-box-item">
                <b>Card 1</b>
              </div>
            </div>
            <div className="casino-bl-box">
              <div className="casino-bl-box-item">
                <b>Card 2</b>
              </div>
            </div>
            <div className="casino-bl-box">
              <div className="casino-bl-box-item">
                <b>Card 3</b>
              </div>
            </div>
            <div className="casino-bl-box">
              <div className="casino-bl-box-item">
                <b>Card 4</b>
              </div>
            </div>
            <div className="casino-bl-box">
              <div className="casino-bl-box-item">
                <b>Card 5</b>
              </div>
            </div>
            <div className="casino-bl-box">
              <div className="casino-bl-box-item">
                <b>Card 6</b>
              </div>
            </div>
          </div>
          <div className="casino-box-row mb-3">
            <div className="casino-nation-name mb-4">
              <b>Odd</b>
              <div className="float-right">
                <i
                  data-toggle="collapse"
                  data-target="#range13"
                  className="fas fa-info-circle"
                />
                <div id="range13" className="collapse icon-range">
                  R:<span>100</span>-<span>25K</span>
                </div>
              </div>
            </div>
            {data?.slice(3, 9)?.map((game) =>
              game?.runners?.slice(0, 1)?.map((runner) => {
                return (
                  <div key={runner?.id} className="casino-bl-box">
                    <div
                      className={`back casino-bl-box-item ${isDiamondSuspended(
                        game,
                        runner
                      )}`}
                    >
                      <span className="casino-box-odd">
                        {runner?.back?.[0]?.price}
                      </span>
                    </div>
                    {/* <div className="casino-book book-black">0</div> */}
                  </div>
                );
              })
            )}
          </div>
          <div className="casino-box-row">
            <div className="casino-nation-name mb-4">
              <b>Even</b>
              <div className="float-right">
                <i
                  data-toggle="collapse"
                  data-target="#range14"
                  className="fas fa-info-circle"
                />
                <div id="range14" className="collapse icon-range">
                  R:<span>100</span>-<span>25K</span>
                </div>
              </div>
            </div>
            {data?.slice(3, 9)?.map((game) =>
              game?.runners?.slice(1, 2)?.map((runner) => {
                return (
                  <div key={runner?.id} className="casino-bl-box">
                    <div
                      className={`back casino-bl-box-item ${isDiamondSuspended(
                        game,
                        runner
                      )}`}
                    >
                      <span className="casino-box-odd">
                        {runner?.back?.[0]?.price}
                      </span>
                    </div>
                    {/* <div className="casino-book book-black">0</div> */}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeenPattiOneDay;
