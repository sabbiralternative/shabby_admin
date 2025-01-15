import { isDiamondSuspended } from "../../../../utils/isDiamondSuspended";

const DragonTiger2020 = ({ data }) => {
  return (
    <div className="casino-detail">
      <div className="text-right w-100 pr">
        <div className="float-right">
          <i
            data-toggle="collapse"
            data-target="#demo1"
            className="fas fa-info-circle"
          />
          <div id="demo1" className="collapse icon-range">
            Range:<span>100</span>-<span>300K</span>
          </div>
        </div>
      </div>
      <div className="dtobx-top">
        <div
          className={`dragon-box ${isDiamondSuspended(
            data?.[0],
            data?.[0]?.runners?.[0]
          )}`}
        >
          <div>
            <b>Dragon</b>
          </div>
          <div className="text-center">
            <span className="d-block">
              <b>{data[0]?.runners[0]?.back[0]?.price}</b>
            </span>{" "}
            {/* <span className="d-block casino-book book-black">0</span> */}
          </div>
        </div>
        <div
          className={`tiebox ${isDiamondSuspended(
            data?.[0],
            data?.[0]?.runners?.[1]
          )}`}
        >
          <div>
            <b>Tie</b>
          </div>
          <div className="text-center">
            <span className="d-block">
              <b> {data[0]?.runners[1]?.back[0]?.price}</b>
            </span>{" "}
            <span className="d-block casino-book book-black">0</span>
          </div>
        </div>
        <div
          className={`tiger-box ${isDiamondSuspended(
            data?.[0],
            data?.[0]?.runners?.[2]
          )}`}
        >
          <div>
            <b>Tiger</b>
          </div>
          <div className="text-center">
            <span className="d-block">
              <b>{data[0]?.runners[2]?.back[0]?.price}</b>
            </span>{" "}
            {/* <span className="d-block casino-book book-black">0</span> */}
          </div>
        </div>
        <div
          className={`pair-box ${isDiamondSuspended(
            data?.[1],
            data[1]?.runners[0]
          )}`}
        >
          <div>
            <b>Pair</b>
          </div>
          <div className="text-center">
            <span className="d-block">
              <b> {data[1]?.runners[0]?.back[0]?.price}</b>
            </span>{" "}
            <span className="d-block casino-book book-black">0</span>
          </div>
        </div>
      </div>
      <div className="teen1daycasino-container mt-5">
        <div className="teen1dayleft">
          <div>
            <div className="casino-box-row justify-content-center casino-odds casino-title">
              <div className="text-left w-100">
                <b className="text-playera">Dragon</b>
                <div className="float-right">
                  <i
                    data-toggle="collapse"
                    data-target="#demo2"
                    className="fas fa-info-circle"
                  />
                  <div id="demo2" className="collapse icon-range">
                    R:<span>100</span>-<span>10K</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="casino-box-row">
              <div className="casino-bl-box">
                <b> {data[2]?.runners[0]?.back[0]?.price}</b>
              </div>
              <div className="casino-bl-box">
                <b> {data[2]?.runners[1]?.back[0]?.price}</b>
              </div>
              <div className="casino-bl-box">
                <b>{data[4]?.runners[0]?.back[0]?.price}</b>
              </div>
              <div className="casino-bl-box">
                <b> {data[4]?.runners[1]?.back[0]?.price}</b>
              </div>
            </div>
            <div className="casino-box-row">
              <div
                className={`casino-bl-box ${isDiamondSuspended(
                  data?.[2],
                  data?.[2]?.runners?.[0]
                )}`}
              >
                <div className="back casino-bl-box-item">
                  <span className="casino-box-odd">Even</span>{" "}
                  {/* <span className="casino-book book-black">0</span> */}
                </div>
              </div>
              <div
                className={`casino-bl-box ${isDiamondSuspended(
                  data?.[2],
                  data?.[2]?.runners?.[1]
                )}`}
              >
                <div className="back casino-bl-box-item">
                  <span className="casino-box-odd">Odd</span>{" "}
                  {/* <span className="casino-book book-black">0</span> */}
                </div>
              </div>
              <div
                className={`casino-bl-box ${isDiamondSuspended(
                  data?.[4],
                  data?.[4]?.runners?.[0]
                )}`}
              >
                <div className="back casino-bl-box-item casino-card-img">
                  <span>
                    <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/spade.png" />{" "}
                    <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/club.png" />
                  </span>{" "}
                  {/* <span className="casino-book book-black">0</span> */}
                </div>
              </div>
              <div className={`casino-bl-box ${data?.[4]?.runners?.[1]}`}>
                <div className="back casino-bl-box-item casino-card-img">
                  <span>
                    <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/heart.png" />{" "}
                    <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/diamond.png" />
                  </span>{" "}
                  {/* <span className="casino-book book-black">0</span> */}
                </div>
              </div>
            </div>
          </div>
          <div className="casino-box cards-box">
            <div className="w-100">
              <div className="casino-odds casino-cards-odds-title">
                <div className="text-center w-100">
                  <b>{data[6]?.runners[0]?.back[0]?.price}</b>
                  <div className="float-right">
                    <i
                      data-toggle="collapse"
                      data-target="#demo3"
                      className="fas fa-info-circle"
                    />
                    <div id="demo3" className="collapse icon-range">
                      R:<span>100</span>-<span>5K</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="casino-cards text-center mt-1">
                {data?.[6]?.runners?.map((runner, i) => {
                  return (
                    <div
                      key={i}
                      className={`casino-card-item ${isDiamondSuspended(
                        data?.[6],
                        runner
                      )}`}
                    >
                      <div className="card-image">
                        <img
                          src={`/src/assets/cards/${runner?.name}.${
                            runner?.name !== "1" ? "png" : "jpg"
                          }`}
                        />
                      </div>
                      {/* <div className="casino-book book-black">0</div> */}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="teen1daycenter" />
        <div className="teen1dayright">
          <div>
            <div className="casino-box-row justify-content-center casino-odds casino-title">
              <div className="text-left w-100">
                <b className="text-playerb">Tiger</b>
                <div className="float-right">
                  <i
                    data-toggle="collapse"
                    data-target="#demo4"
                    className="fas fa-info-circle"
                  />
                  <div id="demo4" className="collapse icon-range">
                    R:<span>100</span>-<span>10K</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="casino-box-row">
              <div className="casino-bl-box">
                <b>{data[3]?.runners[0]?.back[0]?.price}</b>
              </div>
              <div className="casino-bl-box">
                <b> {data[3]?.runners[1]?.back[0]?.price}</b>
              </div>
              <div className="casino-bl-box">
                <b>{data[5]?.runners[0]?.back[0]?.price}</b>
              </div>
              <div className="casino-bl-box">
                <b>{data[5]?.runners[1]?.back[0]?.price}</b>
              </div>
            </div>
            <div className="casino-box-row">
              <div
                className={`casino-bl-box ${isDiamondSuspended(
                  data?.[3],
                  data?.[3]?.runners?.[0]
                )}`}
              >
                <div className="back casino-bl-box-item">
                  <span className="casino-box-odd">Even</span>{" "}
                  {/* <span className="casino-book book-black">0</span> */}
                </div>
              </div>
              <div
                className={`casino-bl-box ${
                  (data?.[3], data?.[3]?.runners?.[1])
                }`}
              >
                <div className="back casino-bl-box-item">
                  <span className="casino-box-odd">Odd</span>{" "}
                  {/* <span className="casino-book book-black">0</span> */}
                </div>
              </div>
              <div
                className={`casino-bl-box ${isDiamondSuspended(
                  data?.[5],
                  data?.[5]?.runners?.[0]
                )}`}
              >
                <div className="back casino-bl-box-item casino-card-img">
                  <span>
                    <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/spade.png" />{" "}
                    <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/club.png" />
                  </span>{" "}
                  {/* <span className="casino-book book-black">0</span> */}
                </div>
              </div>
              <div
                className={`casino-bl-box ${isDiamondSuspended(
                  data?.[5],
                  data?.[5]?.runners?.[1]
                )}`}
              >
                <div className="back casino-bl-box-item casino-card-img">
                  <span>
                    <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/heart.png" />{" "}
                    <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/diamond.png" />
                  </span>{" "}
                  {/* <span className="casino-book book-black">0</span> */}
                </div>
              </div>
            </div>
          </div>
          <div className="casino-box cards-box">
            <div className="w-100">
              <div className="casino-odds casino-cards-odds-title">
                <div className="text-center w-100">
                  <b>{data?.[7]?.runners?.[0]?.back?.[0]?.price}</b>
                  <div className="float-right">
                    <i
                      data-toggle="collapse"
                      data-target="#demo5"
                      className="fas fa-info-circle"
                    />
                    <div id="demo5" className="collapse icon-range">
                      R:<span>100</span>-<span>5K</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="casino-cards text-center mt-1">
                {data?.[7]?.runners?.map((runner, i) => {
                  return (
                    <div
                      key={i}
                      className={`casino-card-item ${isDiamondSuspended(
                        data?.[7],
                        runner
                      )}`}
                    >
                      <div className="card-image">
                        <img
                          src={`/src/assets/cards/${runner?.name}.${
                            runner?.name !== "1" ? "png" : "jpg"
                          }`}
                        />
                      </div>
                      {/* <div className="casino-book book-black">0</div> */}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="casino-remark mt-3">
        <div className="remark-icon">
          <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/icons/remark.png" />
        </div>
        <marquee> </marquee>
      </div>
      {/**/}
    </div>
  );
};

export default DragonTiger2020;
