import { isDiamondSuspended } from "../../../../utils/isDiamondSuspended";

const DTOneDay = ({ data }) => {
  return (
    <div className="casino-detail">
      <div className="dt1dayfancy">
        <div className="casino-box-row dragonfancy">
          <div className="casino-nation-name">
            <div className="float-left mr-2">
              <i
                data-toggle="collapse"
                data-target="#demo0"
                className="fas fa-info-circle"
              />
              <div id="demo0" className="collapse icon-range">
                R:<span>100</span>-<span>300K</span>
              </div>
            </div>
            <b>Dragon</b>
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
                {data?.[0]?.runners[0]?.back?.[0]?.price}
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
                {data?.[0]?.runners?.[0]?.lay[0]?.price}
              </span>
            </div>
          </div>
          <div className="casino-nation-name text-center w-100">
            {/* <span className="casino-book book-black">0</span> */}
          </div>
        </div>
        <div className="casino-box-row pairfancy">
          <div className="casino-nation-name">
            <div className="float-left mr-2">
              <i
                data-toggle="collapse"
                data-target="#demo2"
                className="fas fa-info-circle"
              />
              <div id="demo2" className="collapse icon-range">
                R:<span>100</span>-<span>10K</span>
              </div>
            </div>
            <b>Pair</b>
          </div>
          <div className={`casino-bl-box `}>
            <div
              className={`back casino-bl-box-item ${isDiamondSuspended(
                data?.[1],
                data?.[1]?.runners?.[0]
              )}`}
            >
              <span className="casino-box-odd">
                {data?.[1]?.runners?.[0]?.back[0]?.price}
              </span>
            </div>
          </div>
          <div className="casino-nation-name text-center w-100">
            {/* <span className="casino-book book-black">0</span> */}
          </div>
        </div>
        <div className="casino-box-row tigerfancy">
          <div className="casino-nation-name">
            <div className="float-left mr-2">
              <i
                data-toggle="collapse"
                data-target="#demo1"
                className="fas fa-info-circle"
              />
              <div id="demo1" className="collapse icon-range">
                R:<span>100</span>-<span>300K</span>
              </div>
            </div>
            <b>Tiger</b>
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
                {data?.[0]?.runners[1]?.back[0]?.price}
              </span>
            </div>
            <div
              className={`lay casino-bl-box-item  ${isDiamondSuspended(
                data?.[0],
                data?.[0]?.runners?.[1]
              )} `}
            >
              <span className="casino-box-odd">
                {" "}
                {data?.[0]?.runners?.[1]?.lay[0]?.price}
              </span>
            </div>
          </div>
          <div className="casino-nation-name text-center w-100">
            {/* <span className="casino-book book-black">0</span> */}
          </div>
        </div>
      </div>
      <div className="teen1daycasino-container mt-2">
        <div className="teen1dayleft">
          <div>
            <div className="casino-box-row casino-odds casino-title">
              <div className="text-left w-100">
                <b className="text-playera">Dragon</b>
              </div>
            </div>
            <div className="casino-box-row">
              <div className={`casino-bl-box `}>
                <b>{data?.[2]?.runners?.[0]?.back?.[0]?.price}</b>
              </div>
              <div className={`casino-bl-box `}>
                <b>{data?.[2]?.runners?.[0]?.back?.[0]?.price}</b>
              </div>
              <div className={`casino-bl-box `}>
                <b>{data?.[4]?.runners?.[0]?.back?.[0]?.price}</b>
              </div>
              <div className="casino-bl-box">
                <b>{data?.[4]?.runners?.[1]?.back?.[0]?.price}</b>
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
              <div
                className={`casino-bl-box ${isDiamondSuspended(
                  data?.[4],
                  data?.[4]?.runners?.[1]
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
            <div className="casino-box-row casino-odds">
              <div className="text-center w-100">
                <span className="float-right casino-min-max">
                  R:<span>100</span>-<span>25K</span>
                </span>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className="casino-box-row">
              <div className="casino-bl-box">
                <div className="casino-bl-box-item casino-card-img">
                  <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/spade.png" />
                </div>
              </div>
              <div className="casino-bl-box">
                <div className="casino-bl-box-item casino-card-img">
                  <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/heart.png" />
                </div>
              </div>
              <div className="casino-bl-box">
                <div className="casino-bl-box-item casino-card-img">
                  <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/club.png" />
                </div>
              </div>
              <div className="casino-bl-box">
                <div className="casino-bl-box-item casino-card-img">
                  <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/diamond.png" />
                </div>
              </div>
            </div>
            <div className="casino-box-row">
              {data?.[6]?.runners?.map((runner) => {
                return (
                  <div
                    key={runner?.id}
                    className={`casino-bl-box ${isDiamondSuspended(
                      data?.[6],
                      runner
                    )}`}
                  >
                    <div className="back casino-bl-box-item">
                      <span className="casino-box-odd">
                        {runner?.back?.[0]?.price}
                      </span>{" "}
                      {/* <span className="casino-book book-black">0</span> */}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="casino-box-row casino-odds">
              <div className="text-center w-100">
                <span className="float-right casino-min-max">
                  R:<span>100</span>-<span>25K</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="teen1daycenter" />
        <div className="teen1dayright">
          <div>
            <div className="casino-box-row casino-odds casino-title">
              <div className="text-left w-100">
                <b className="text-playerb">Tiger</b>
              </div>
            </div>
            <div className="casino-box-row">
              <div className="casino-bl-box">
                <b>{data?.[3]?.runners?.[0]?.back?.[0]?.price}</b>
              </div>
              <div className="casino-bl-box">
                <b>{data?.[3]?.runners?.[1]?.back?.[0]?.price}</b>
              </div>
              <div className="casino-bl-box">
                <b>{data?.[5]?.runners?.[0]?.back?.[0]?.price}</b>
              </div>
              <div className="casino-bl-box">
                <b>{data?.[5]?.runners?.[1]?.back?.[0]?.price}</b>
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
                  <span className="casino-book book-black">0</span>
                </div>
              </div>
              <div
                className={`casino-bl-box  ${isDiamondSuspended(
                  data?.[3],
                  data?.[3]?.runners?.[1]
                )}`}
              >
                <div className="back casino-bl-box-item">
                  <span className="casino-box-odd">Odd</span>{" "}
                  <span className="casino-book book-black">0</span>
                </div>
              </div>
              <div
                className={`casino-bl-box  ${isDiamondSuspended(
                  data?.[5],
                  data?.[5]?.runners?.[0]
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
              <div
                className={`casino-bl-box  ${isDiamondSuspended(
                  data?.[5],
                  data?.[5]?.runners?.[1]
                )}`}
              >
                <div className="back casino-bl-box-item casino-card-img">
                  <span>
                    <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/spade.png" />{" "}
                    <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/club.png" />
                  </span>{" "}
                  <span className="casino-book book-black">0</span>
                </div>
              </div>
            </div>
            <div className="casino-box-row casino-odds">
              <div className="text-center w-100">
                <span className="float-right casino-min-max">
                  R:<span>100</span>-<span>25K</span>
                </span>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className="casino-box-row">
              <div className="casino-bl-box">
                <div className="casino-bl-box-item casino-card-img">
                  <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/spade.png" />
                </div>
              </div>
              <div className="casino-bl-box">
                <div className="casino-bl-box-item casino-card-img">
                  <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/heart.png" />
                </div>
              </div>
              <div className="casino-bl-box">
                <div className="casino-bl-box-item casino-card-img">
                  <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/club.png" />
                </div>
              </div>
              <div className="casino-bl-box">
                <div className="casino-bl-box-item casino-card-img">
                  <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/diamond.png" />
                </div>
              </div>
            </div>
            <div className="casino-box-row">
              {data?.[7]?.runners?.map((runner) => {
                return (
                  <div
                    key={runner?.id}
                    className={`casino-bl-box ${isDiamondSuspended(
                      data?.[7],
                      runner
                    )}`}
                  >
                    <div className="back casino-bl-box-item">
                      <span className="casino-box-odd">
                        {runner?.back?.[0]?.price}
                      </span>{" "}
                      {/* <span className="casino-book book-black">0</span> */}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="casino-box-row casino-odds">
              <div className="text-center w-100">
                <span className="float-right casino-min-max">
                  R:<span>100</span>-<span>25K</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**/} {/**/}
    </div>
  );
};

export default DTOneDay;
