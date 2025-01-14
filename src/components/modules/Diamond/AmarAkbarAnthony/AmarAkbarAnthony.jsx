import { isDiamondSuspended } from "../../../../utils/isDiamondSuspended";

const AmarAkbarAnthony = ({ data }) => {
  return (
    <div className="casino-detail">
      <div className="row row5 d-none-small">
        <div className="col-4">
          <div className="casino-box-row">
            <div className="casino-nation-name">
              <b>A. Amar</b>
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
                  {data[0]?.runners[0]?.lay[0]?.price}
                </span>
              </div>
            </div>
            {/* <div className="casino-nation-name casino-book book-black">0</div> */}
          </div>
        </div>
        <div className="col-4">
          <div className="casino-box-row">
            <div className="casino-nation-name">
              <b>B. Akbar</b>
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
                  {data[0]?.runners[1]?.lay[0]?.price}
                </span>
              </div>
            </div>
            {/* <div className="casino-nation-name casino-book book-black">0</div> */}
          </div>
        </div>
        <div className="col-4">
          <div className="casino-box-row">
            <div className="casino-nation-name">
              <b>C. Anthony</b>
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[0],
                  data?.[0]?.runners?.[2]
                )}`}
              >
                <span className="casino-box-odd">
                  {" "}
                  {data[0]?.runners[2]?.back[0]?.price}
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
                  {data[0]?.runners[2]?.lay[0]?.price}
                </span>
              </div>
            </div>
            {/* <div className="casino-nation-name casino-book book-black">0</div> */}
          </div>
        </div>
        <div className="col-12">
          <div className="teen1daycasino-container justify-content-end casino-min-max">
            <div>{/* R:<span>100</span> - <span>300K</span> */}</div>
          </div>
        </div>
      </div>
      {/**/}
      <div className="row row5 aaa-oe">
        <div className="col-lg-4 col-12">
          <div className="casino-box-row">
            <div className="casino-bl-box">
              <b> {data[1]?.runners[0]?.back[0]?.price}</b>
            </div>
            <div className="casino-bl-box">
              <b> {data[1]?.runners[1]?.back[0]?.price}</b>
            </div>
          </div>
          <div className="casino-box-row">
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[1],
                  data?.[1]?.runners?.[0]
                )}`}
              >
                <span className="casino-box-odd">Even</span>
              </div>
              {/* <div
                className={`casino-book text-center book-black `}
              >
                0
              </div> */}
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[1],
                  data?.[1]?.runners?.[1]
                )}`}
              >
                <span className="casino-box-odd">Odd</span>
              </div>
              {/* <div className="casino-book text-center book-black">0</div> */}
            </div>
          </div>
          <div className="teen1daycasino-container justify-content-end casino-min-max w-100">
            <div>{/* R:<span>100</span>-<span>25K</span> */}</div>
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="casino-box-row">
            <div className="casino-bl-box">
              <b>{data[2]?.runners[0]?.back[0]?.price}</b>
            </div>
            <div className="casino-bl-box">
              <b> {data[2]?.runners[1]?.back[0]?.price}</b>
            </div>
          </div>
          <div className="casino-box-row">
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item casino-card-img ${isDiamondSuspended(
                  data?.[2],
                  data?.[2]?.runners?.[0]
                )}`}
              >
                <span>
                  <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/spade.png" />{" "}
                  <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/club.png" />
                </span>
              </div>
              {/* <div className="casino-book text-center book-black">0</div> */}
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item casino-card-img ${isDiamondSuspended(
                  data?.[2],
                  data?.[2]?.runners?.[1]
                )}`}
              >
                <span>
                  <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/heart.png" />{" "}
                  <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/diamond.png" />
                </span>
              </div>
              {/* <div className="casino-book text-center book-black">0</div> */}
            </div>
          </div>
          <div className="teen1daycasino-container justify-content-end casino-min-max w-100">
            <div>{/* R:<span>100</span>-<span>25K</span> */}</div>
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="casino-box-row">
            <div className="casino-bl-box">
              <b>{data[3]?.runners[0]?.back[0]?.price}</b>
            </div>
            <div className="casino-bl-box">
              <b> {data[3]?.runners[1]?.back[0]?.price}</b>
            </div>
          </div>
          <div className="casino-box-row">
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[3],
                  data?.[3]?.runners?.[0]
                )}`}
              >
                <span className="casino-box-odd">Under 7</span>
              </div>
              {/* <div className="casino-book text-center book-black">0</div> */}
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[3],
                  data?.[3]?.runners?.[1]
                )}`}
              >
                <span className="casino-box-odd">Over 7</span>
              </div>
              {/* <div className="casino-book text-center book-black">0</div> */}
            </div>
          </div>
          <div className="teen1daycasino-container justify-content-end casino-min-max w-100">
            <div>{/* R:<span>100</span>-<span>100K</span> */}</div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <div className="text-center w-100">
          <div className="casino-bl-box">
            <div className="casino-bl-box-item">
              <b>{data[4]?.runners[0]?.back[0]?.price}</b>
            </div>
          </div>
        </div>
        <div className="casino-cards text-center mt-1">
          {data[4]?.runners?.map((runner, i) => {
            return (
              <div
                key={i}
                className={`casino-card-item ${isDiamondSuspended(
                  data?.[4],
                  runner
                )}`}
              >
                <div className="card-image">
                  <img src={`/src/assets/cards/${runner?.name}.png`} />
                </div>
                {/* <div className="casino-book text-center book-black">0</div> */}
              </div>
            );
          })}
        </div>
        <div className="teen1daycasino-container justify-content-end casino-min-max w-100">
          <div>{/* R:<span>100</span>-<span>5K</span> */}</div>
        </div>
      </div>
      {/**/} {/**/}
    </div>
  );
};

export default AmarAkbarAnthony;
