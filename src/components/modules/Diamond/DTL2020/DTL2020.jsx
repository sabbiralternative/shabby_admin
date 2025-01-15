import { isDiamondSuspended } from "../../../../utils/isDiamondSuspended";

const DTL2020 = ({ data }) => {
  return (
    <div className="casino-detail">
      <div className="teen1daycasino-container d-none-small">
        <div className="teen1dayleft">
          <div className="casino-box-row mb-0">
            <div className="casino-nation-name no-border">
              <div />
            </div>
            <div className="casino-bl-box">
              <b>D</b>
            </div>
            <div className="casino-bl-box">
              <b>T</b>
            </div>
            <div className="casino-bl-box">
              <b>L</b>
            </div>
          </div>
          <div className="casino-box-row">
            <div className="casino-nation-name">
              <b>Winner</b>
            </div>
            <div className="float-right dtl20info">
              <i
                data-toggle="collapse"
                data-target="#demo-l-0"
                className="fas fa-info-circle"
              />
              <div id="demo-l-0" className="collapse icon-range">
                {/* R:<span>100</span>-<span>100K</span> */}
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
                  {" "}
                  {data[0]?.runners[0]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[0],
                data?.[0]?.runners?.[0]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[0]?.runners[1]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[0],
                data?.[0]?.runners?.[2]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[0]?.runners[2]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
          </div>
          <div className="casino-box-row">
            <div className="casino-nation-name casino-card-img">
              <span>
                <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/spade.png" />{" "}
                <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/club.png" />
              </span>
            </div>
            <div className="float-right dtl20info">
              <i
                data-toggle="collapse"
                data-target="#demo-l-1"
                className="fas fa-info-circle"
              />
              <div id="demo-l-1" className="collapse icon-range">
                R:<span>100</span>-<span>5K</span>
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data[1],
                data?.[1]?.runners?.[0]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[1]?.runners[0]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[2],
                data?.[2]?.runners?.[0]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[2]?.runners[0]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[3],
                data?.[3]?.runners?.[0]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {data[3]?.runners[0]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
          </div>
          <div className="casino-box-row">
            <div className="casino-nation-name casino-card-img">
              <span>
                <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/heart.png" />{" "}
                <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/diamond.png" />
              </span>
            </div>
            <div className="float-right dtl20info">
              <i
                data-toggle="collapse"
                data-target="#demo-l-2"
                className="fas fa-info-circle"
              />
              <div id="demo-l-2" className="collapse icon-range">
                R:<span>100</span>-<span>5K</span>
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data[1],
                data?.[1]?.runners?.[1]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[1]?.runners[0]?.back[0]?.price}
                </span>{" "}
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
                <span className="casino-box-odd">
                  {" "}
                  {data[2]?.runners[1]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[3],
                data?.[3]?.runners?.[1]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[3]?.runners[1]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
          </div>
          <div className="casino-box-row">
            <div className="casino-nation-name">
              <b>Odd</b>
            </div>
            <div className="float-right dtl20info">
              <i
                data-toggle="collapse"
                data-target="#demo-l-3"
                className="fas fa-info-circle"
              />
              <div id="demo-l-3" className="collapse icon-range">
                R:<span>100</span>-<span>5K</span>
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[4],
                data?.[4]?.runners?.[0]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[4]?.runners[0]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[5],
                data?.[5]?.runners?.[0]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[5]?.runners[0]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[6],
                data?.[6]?.runners?.[0]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[6]?.runners[0]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
          </div>
          <div className="casino-box-row">
            <div className="casino-nation-name">
              <b>Even</b>
            </div>
            <div className="float-right dtl20info">
              <i
                data-toggle="collapse"
                data-target="#demo-l-4"
                className="fas fa-info-circle"
              />
              <div id="demo-l-4" className="collapse icon-range">
                R:<span>100</span>-<span>5K</span>
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[4],
                data?.[4]?.runners?.[1]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {data[4]?.runners[1]?.back[0]?.price}
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
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {data[5]?.runners[1]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[6],
                data?.[6]?.runners?.[1]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[6]?.runners[1]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
          </div>
          <div className="casino-box-row">
            <div className="casino-nation-name casino-card-img">
              <span>
                <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/A.png" />
              </span>
            </div>
            <div className="float-right dtl20info">
              <i
                data-toggle="collapse"
                data-target="#demo-l-5"
                className="fas fa-info-circle"
              />
              <div id="demo-l-5" className="collapse icon-range">
                R:<span>100</span>-<span>5K</span>
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[7],
                data?.[7]?.runners?.[0]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[7]?.runners[0]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[8],
                data?.[8]?.runners?.[0]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {data[8]?.runners[0]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[9],
                data?.[9]?.runners?.[0]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[9]?.runners[0]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
          </div>
          <div className="casino-box-row">
            <div className="casino-nation-name casino-card-img">
              <span>
                <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/2.png" />
              </span>
            </div>
            <div className="float-right dtl20info">
              <i
                data-toggle="collapse"
                data-target="#demo-l-6"
                className="fas fa-info-circle"
              />
              <div id="demo-l-6" className="collapse icon-range">
                R:<span>100</span>-<span>5K</span>
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[7],
                data?.[7]?.runners?.[1]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[7]?.runners[1]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[8],
                data?.[8]?.runners?.[1]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[8]?.runners[1]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[9],
                data?.[9]?.runners?.[1]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {data[9]?.runners[1]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
          </div>
          <div className="casino-box-row">
            <div className="casino-nation-name casino-card-img">
              <span>
                <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/3.png" />
              </span>
            </div>
            <div className="float-right dtl20info">
              <i
                data-toggle="collapse"
                data-target="#demo-l-7"
                className="fas fa-info-circle"
              />
              <div id="demo-l-7" className="collapse icon-range">
                R:<span>100</span>-<span>5K</span>
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[7],
                data?.[7]?.runners?.[2]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {data[7]?.runners[2]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[8],
                data?.[8]?.runners?.[2]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[8]?.runners[2]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[9],
                data?.[9]?.runners?.[2]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {data[9]?.runners[2]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
          </div>
          <div className="casino-box-row">
            <div className="casino-nation-name casino-card-img">
              <span>
                <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/4.png" />
              </span>
            </div>
            <div className="float-right dtl20info">
              <i
                data-toggle="collapse"
                data-target="#demo-l-8"
                className="fas fa-info-circle"
              />
              <div id="demo-l-8" className="collapse icon-range">
                R:<span>100</span>-<span>5K</span>
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[7],
                data?.[7]?.runners?.[3]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[7]?.runners[3]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[8],
                data?.[8]?.runners?.[3]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[8]?.runners[3]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[9],
                data?.[9]?.runners?.[3]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[9]?.runners[3]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
          </div>
        </div>
        <div className="teen1daycenter" />
        <div className="teen1dayright">
          <div className="casino-box-row mb-0 d-none-small">
            <div className="casino-nation-name no-border">
              <div />
            </div>
            <div className="casino-bl-box">
              <b>D</b>
            </div>
            <div className="casino-bl-box">
              <b>T</b>
            </div>
            <div className="casino-bl-box">
              <b>L</b>
            </div>
          </div>
          <div className="casino-box-row">
            <div className="casino-nation-name casino-card-img">
              <span>
                <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/5.png" />
              </span>
            </div>
            <div className="float-right dtl20info">
              <i
                data-toggle="collapse"
                data-target="#demo-r-0"
                className="fas fa-info-circle"
              />
              <div id="demo-r-0" className="collapse icon-range">
                R:<span>100</span>-<span>5K</span>
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[7],
                data?.[7]?.runners?.[4]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[7]?.runners[4]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[8],
                data?.[8]?.runners?.[4]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[8]?.runners[4]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[9],
                data?.[9]?.runners?.[4]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {data[9]?.runners[4]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
          </div>
          <div className="casino-box-row">
            <div className="casino-nation-name casino-card-img">
              <span>
                <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/6.png" />
              </span>
            </div>
            <div className="float-right dtl20info">
              <i
                data-toggle="collapse"
                data-target="#demo-r-1"
                className="fas fa-info-circle"
              />
              <div id="demo-r-1" className="collapse icon-range">
                R:<span>100</span>-<span>5K</span>
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[7],
                data?.[7]?.runners?.[5]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[7]?.runners[5]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[8],
                data?.[8]?.runners?.[5]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {data[8]?.runners[5]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[9],
                data?.[9]?.runners?.[5]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {data[9]?.runners[5]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
          </div>
          <div className="casino-box-row">
            <div className="casino-nation-name casino-card-img">
              <span>
                <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/7.png" />
              </span>
            </div>
            <div className="float-right dtl20info">
              <i
                data-toggle="collapse"
                data-target="#demo-r-2"
                className="fas fa-info-circle"
              />
              <div id="demo-r-2" className="collapse icon-range">
                R:<span>100</span>-<span>5K</span>
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[7],
                data?.[7]?.runners?.[6]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {data[7]?.runners[6]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[8],
                data?.[8]?.runners?.[6]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {data[8]?.runners[6]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[9],
                data?.[9]?.runners?.[6]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {data[9]?.runners[6]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
          </div>
          <div className="casino-box-row">
            <div className="casino-nation-name casino-card-img">
              <span>
                <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/8.png" />
              </span>
            </div>
            <div className="float-right dtl20info">
              <i
                data-toggle="collapse"
                data-target="#demo-r-3"
                className="fas fa-info-circle"
              />
              <div id="demo-r-3" className="collapse icon-range">
                R:<span>100</span>-<span>5K</span>
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[7],
                data?.runners?.[7]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {data[7]?.runners[7]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[8],
                data?.[8]?.runners?.[7]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[8]?.runners[7]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[9],
                data?.[9]?.runners?.[7]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {data[9]?.runners[7]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
          </div>
          <div className="casino-box-row">
            <div className="casino-nation-name casino-card-img">
              <span>
                <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/9.png" />
              </span>
            </div>
            <div className="float-right dtl20info">
              <i
                data-toggle="collapse"
                data-target="#demo-r-4"
                className="fas fa-info-circle"
              />
              <div id="demo-r-4" className="collapse icon-range">
                R:<span>100</span>-<span>5K</span>
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[7],
                data?.[7]?.runners?.[8]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[7]?.runners[8]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[8],
                data?.[8]?.runners?.[8]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {data[8]?.runners[8]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[9],
                data?.[9]?.runners?.[8]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[9]?.runners[8]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
          </div>
          <div className="casino-box-row">
            <div className="casino-nation-name casino-card-img">
              <span>
                <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/10.png" />
              </span>
            </div>
            <div className="float-right dtl20info">
              <i
                data-toggle="collapse"
                data-target="#demo-r-5"
                className="fas fa-info-circle"
              />
              <div id="demo-r-5" className="collapse icon-range">
                R:<span>100</span>-<span>5K</span>
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[7],
                data?.[7]?.runners?.[9]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[7]?.runners[9]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[8],
                data?.[8]?.runners?.[9]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {data[8]?.runners[9]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[9],
                data?.[9]?.runners?.[9]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[9]?.runners[9]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
          </div>
          <div className="casino-box-row">
            <div className="casino-nation-name casino-card-img">
              <span>
                <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/J.png" />
              </span>
            </div>
            <div className="float-right dtl20info">
              <i
                data-toggle="collapse"
                data-target="#demo-r-6"
                className="fas fa-info-circle"
              />
              <div id="demo-r-6" className="collapse icon-range">
                R:<span>100</span>-<span>5K</span>
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[7],
                data?.[7]?.runners?.[10]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[7]?.runners[10]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[8],
                data?.[8]?.runners?.[10]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[8]?.runners[10]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[9],
                data?.[9]?.runners?.[10]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[9]?.runners[10]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
          </div>
          <div className="casino-box-row">
            <div className="casino-nation-name casino-card-img">
              <span>
                <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/Q.png" />
              </span>
            </div>
            <div className="float-right dtl20info">
              <i
                data-toggle="collapse"
                data-target="#demo-r-7"
                className="fas fa-info-circle"
              />
              <div id="demo-r-7" className="collapse icon-range">
                R:<span>100</span>-<span>5K</span>
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[7],
                data?.[7]?.runners?.[11]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[7]?.runners[11]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[8],
                data?.[8]?.runners?.[11]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[8]?.runners[11]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[9],
                data?.[9]?.runners?.[11]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[9]?.runners[11]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
          </div>
          <div className="casino-box-row">
            <div className="casino-nation-name casino-card-img">
              <span>
                <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/K.png" />
              </span>
            </div>
            <div className="float-right dtl20info">
              <i
                data-toggle="collapse"
                data-target="#demo-r-8"
                className="fas fa-info-circle"
              />
              <div id="demo-r-8" className="collapse icon-range">
                R:<span>100</span>-<span>5K</span>
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[7],
                data?.[7]?.runners?.[12]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[7]?.runners[12]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[8],
                data?.[8]?.runners?.[12]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[8]?.runners[12]?.back[0]?.price}
                </span>{" "}
                {/* <span className="casino-book book-black">0</span> */}
              </div>
            </div>
            <div
              className={`casino-bl-box ${isDiamondSuspended(
                data?.[9],
                data?.[9]?.runners?.[12]
              )}`}
            >
              <div className="back casino-bl-box-item">
                <span className="casino-box-odd">
                  {" "}
                  {data[9]?.runners[12]?.back[0]?.price}
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

export default DTL2020;
