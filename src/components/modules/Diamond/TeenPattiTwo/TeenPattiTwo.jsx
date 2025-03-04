import { isDiamondSuspended } from "../../../../utils/isDiamondSuspended";

const TeenPattiTwo = ({ data }) => {
  return (
    <div className="casino-detail">
      <div className="teen1daycasino-container">
        <div className="teen1dayleft">
          <div className="casino-box-row d-none-small">
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
              <b className="d-none-small">Main</b>
              <b className="d-none-big">Player A</b>
              <div className="float-right">
                <span className="mr-2 casino-book book-black">0</span>
                <i
                  data-toggle="collapse"
                  data-target="#range1"
                  aria-expanded="false"
                  className="fas fa-info-circle collapsed"
                />
                <div id="range1" className="icon-range collapse">
                  R:<span>50</span>-<span>200K</span>
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
                  {data?.[0]?.runners?.[0]?.lay?.[0]?.price}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="teen1daycenter" />
        <div className="teen1dayright">
          <div className="casino-box-row d-none-small">
            <div className="casino-nation-name no-border casino-bl-box-title">
              <div className="playerb">Player B</div>
            </div>
            <div className="casino-bl-box casino-bl-box-title">
              <div data-toggle="modal" className="casino-bl-box-item">
                <b>Back</b>
              </div>
              <div className="casino-bl-box-item">
                <b>Lay</b>
              </div>
            </div>
          </div>
          <div className="casino-box-row">
            <div className="casino-nation-name">
              <b className="d-none-small">Main</b>
              <b className="d-none-big">Player B</b>
              <div className="float-right">
                <span className="mr-2 casino-book book-black">0</span>
                <i
                  data-toggle="collapse"
                  data-target="#range2"
                  aria-expanded="false"
                  className="fas fa-info-circle collapsed"
                />
                <div id="range2" className="icon-range collapse">
                  R:<span>50</span>-<span>200K</span>
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
                  {data?.[0]?.runners?.[1]?.back?.[0]?.price}
                </span>
              </div>
              <div
                className={`lay casino-bl-box-item suspended ${isDiamondSuspended(
                  data?.[0],
                  data?.[0]?.runners?.[1]
                )}`}
              >
                <span className="casino-box-odd">
                  {data?.[0]?.runners?.[1]?.lay?.[0]?.price}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="teen2uo">
          <div className="teen1dayleft">
            <div className="casino-box-row d-none-big">
              <div className="casino-nation-name no-border casino-bl-box-title">
                <div className="playera">Player A</div>
              </div>
              <div className="casino-bl-box casino-bl-box-title" />
            </div>
            <div className="casino-box-row">
              <div className="casino-nation-name">
                <b>Under 21</b>
                <div className="float-right">
                  <span className="mr-2 casino-book book-black">0</span>
                  <i
                    data-toggle="collapse"
                    data-target="#range3"
                    aria-expanded="false"
                    className="fas fa-info-circle collapsed"
                  />
                  <div id="range3" className="icon-range collapse">
                    R:<span>100</span>-<span>50K</span>
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
                    {data?.[1]?.runners?.[0]?.back?.[0]?.price}
                  </span>
                </div>
              </div>
              <div className="casino-nation-name">
                <b>Over 22</b>
                <div className="float-right">
                  <span className="mr-2 casino-book book-black">0</span>
                  <i
                    data-toggle="collapse"
                    data-target="#range4"
                    aria-expanded="false"
                    className="fas fa-info-circle collapsed"
                  />
                  <div id="range4" className="icon-range collapse">
                    R:<span>100</span>-<span>50K</span>
                  </div>
                </div>
              </div>
              <div className="casino-bl-box">
                <div
                  className={`back casino-bl-box-item ${isDiamondSuspended(
                    data?.[1],
                    data?.[1]?.runners?.[1]
                  )}`}
                >
                  <span className="casino-box-odd">
                    {data?.[1]?.runners?.[1]?.back?.[0]?.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="teen1daycenter" />
          <div className="teen1dayright">
            <div className="casino-box-row d-none-big">
              <div className="casino-nation-name no-border casino-bl-box-title">
                <div className="playerb">Player B</div>
              </div>
              <div className="casino-bl-box casino-bl-box-title" />
            </div>
            <div className="casino-box-row">
              <div className="casino-nation-name">
                <b>Under 21</b>
                <div className="float-right">
                  <span className="mr-2 casino-book book-black">0</span>
                  <i
                    data-toggle="collapse"
                    data-target="#range5"
                    aria-expanded="false"
                    className="fas fa-info-circle collapsed"
                  />
                  <div id="range5" className="icon-range collapse">
                    R:<span>100</span>-<span>50K</span>
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
                    {data?.[2]?.runners?.[0]?.back?.[0]?.price}
                  </span>
                </div>
              </div>
              <div className="casino-nation-name">
                <b>Over 22</b>
                <div className="float-right">
                  <span className="mr-2 casino-book book-black">0</span>
                  <i
                    data-toggle="collapse"
                    data-target="#range6"
                    aria-expanded="false"
                    className="fas fa-info-circle collapsed"
                  />
                  <div id="range6" className="icon-range collapse">
                    R:<span>100</span>-<span>50K</span>
                  </div>
                </div>
              </div>
              <div className="casino-bl-box">
                <div
                  className={`back casino-bl-box-item ${isDiamondSuspended(
                    data?.[2],
                    data?.[0]?.runners?.[1]
                  )}`}
                >
                  <span className="casino-box-odd">
                    {data?.[2]?.runners?.[1]?.back?.[0]?.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="tee2suit mt-1">
        <div className="casino-bl-box tee2suitheader">
          <div className="casino-bl-box-item casino-card-img">
            <span className="casino-box-odd">3.78</span>
          </div>
          <div className="casino-bl-box-item casino-card-img">
            <span className="casino-box-odd">3.78</span>
          </div>
          <div className="casino-bl-box-item casino-card-img">
            <span className="casino-box-odd">3.78</span>
          </div>
          <div className="casino-bl-box-item casino-card-img">
            <span className="casino-box-odd">4.09</span>
          </div>
        </div>
        <div className="casino-bl-box">
          <div className="casino-bl-box-item back casino-card-img">
            <img src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/spade.png" />

            <span className="casino-book book-black">0</span>
          </div>
          <div className="casino-bl-box-item back casino-card-img">
            <img src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/heart.png" />

            <span className="casino-book book-black">0</span>
          </div>
          <div className="casino-bl-box-item back casino-card-img">
            <img src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/club.png" />

            <span className="casino-book book-black">0</span>
          </div>
          <div className="casino-bl-box-item back casino-card-img">
            <img src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/diamond.png" />
            <span className="casino-book book-black">0</span>
          </div>
        </div>
        <div className="casino-min-max text-right mt-4">
          R:<span>100</span>-<span>5K</span>
        </div>
      </div>
      <div className="row row5 mt-3">
        <div className="col-12 col-lg-4">
          <div className="teen2eo">
            <div className="casino-bl-box tee2eoheader">
              <div className="casino-bl-box-item casino-card-img">
                <span className="casino-box-odd">1.8</span>
              </div>
              <div className="casino-bl-box-item casino-card-img">
                <span className="casino-box-odd">2.18</span>
              </div>
            </div>
            <div className="casino-bl-box">
              <div className="casino-bl-box-item back">
                <span className="casino-box-odd">Odd</span>
                <span className="casino-book book-black">0</span>
              </div>
              <div className="casino-bl-box-item back">
                <span className="casino-box-odd">Even</span>
                <span className="casino-book book-black">0</span>
              </div>
            </div>
          </div>
          <div className="casino-min-max text-right mt-3">
            R:<span>100</span>-<span>5K</span>
          </div>
        </div>
        <div className="col-12 col-lg-8">
          <div className="teen2cards">
            <div className="casino-cards text-center mt-1">
              <div className="casino-card-item">
                <div className="casino-box-odd">11.81</div>
                <div className="card-image">
                  <img src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/A.png" />
                </div>
                <div className="casino-book book-black">0</div>
              </div>
              <div className="casino-card-item">
                <div className="casino-box-odd">11.81</div>
                <div className="card-image">
                  <img src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/2.png" />
                </div>
                <div className="casino-book book-black">0</div>
              </div>
              <div className="casino-card-item">
                <div className="casino-box-odd">11.81</div>
                <div className="card-image">
                  <img src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/3.png" />
                </div>
                <div className="casino-book book-black">0</div>
              </div>
              <div className="casino-card-item">
                <div className="casino-box-odd">11.81</div>
                <div className="card-image">
                  <img src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/4.png" />
                </div>
                <div className="casino-book book-black">0</div>
              </div>
              <div className="casino-card-item">
                <div className="casino-box-odd">11.81</div>
                <div className="card-image">
                  <img src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/5.png" />
                </div>
                <div className="casino-book book-black">0</div>
              </div>
              <div className="casino-card-item">
                <div className="casino-box-odd">11.81</div>
                <div className="card-image">
                  <img src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/6.png" />
                </div>
                <div className="casino-book book-black">0</div>
              </div>
              <div className="casino-card-item">
                <div className="casino-box-odd">11.81</div>
                <div className="card-image">
                  <img src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/7.png" />
                </div>
                <div className="casino-book book-black">0</div>
              </div>
              <div className="casino-card-item">
                <div className="casino-box-odd">11.81</div>
                <div className="card-image">
                  <img src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/8.png" />
                </div>
                <div className="casino-book book-black">0</div>
              </div>
              <div className="casino-card-item">
                <div className="casino-box-odd">11.81</div>
                <div className="card-image">
                  <img src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/9.png" />
                </div>
                <div className="casino-book book-black">0</div>
              </div>
              <div className="casino-card-item">
                <div className="casino-box-odd">11.81</div>
                <div className="card-image">
                  <img src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/10.png" />
                </div>
                <div className="casino-book book-black">0</div>
              </div>
              <div className="casino-card-item">
                <div className="casino-box-odd">11.81</div>
                <div className="card-image">
                  <img src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/J.png" />
                </div>
                <div className="casino-book book-black">0</div>
              </div>
              <div className="casino-card-item">
                <div className="casino-box-odd">15.72</div>
                <div className="card-image">
                  <img src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/Q.png" />
                </div>
                <div className="casino-book book-black">0</div>
              </div>
              <div className="casino-card-item">
                <div className="casino-box-odd">11.81</div>
                <div className="card-image">
                  <img src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/K.png" />
                </div>
                <div className="casino-book book-black">0</div>
              </div>
            </div>
            <div className="casino-min-max text-right">
              R:<span>100</span>-<span>5K</span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default TeenPattiTwo;
