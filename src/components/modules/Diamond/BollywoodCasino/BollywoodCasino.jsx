import { isDiamondSuspended } from "../../../../utils/isDiamondSuspended";

const BollywoodCasino = ({ data }) => {
  return (
    <div className="casino-detail">
      <div className="row row5 d-none-small">
        <div className="col-4">
          <div className="casino-box-row">
            <div className="casino-nation-name">
              <b>A. Don</b>
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
            {/* <div className="casino-book text-center book-black">0</div> */}
          </div>
        </div>
        <div className="col-4">
          <div className="casino-box-row">
            <div className="casino-nation-name">
              <b>B. Amar Akbar Anthony</b>
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
            {/* <div className="casino-book text-center book-black">0</div> */}
          </div>
        </div>
        <div className="col-4">
          <div className="casino-box-row">
            <div className="casino-nation-name">
              <b>C. Sahib Bibi Aur Ghulam</b>
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
            {/* <div className="casino-book text-center book-black">0</div> */}
          </div>
        </div>
        <div className="col-4">
          <div className="casino-box-row">
            <div className="casino-nation-name">
              <b>D. Dharam Veer</b>
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[0],
                  data?.[0]?.runners?.[3]
                )}`}
              >
                <span className="casino-box-odd">
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
            {/* <div className="casino-book text-center book-black">0</div> */}
          </div>
        </div>
        <div className="col-4">
          <div className="casino-box-row">
            <div className="casino-nation-name">
              <b>E. Kis Kis Ko Pyaar Karoon</b>
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[0],
                  data?.[0]?.runners?.[4]
                )}`}
              >
                <span className="casino-box-odd">
                  {data?.[0]?.runners?.[4]?.back?.[0]?.price}
                </span>
              </div>
              <div
                className={`lay casino-bl-box-item ${isDiamondSuspended(
                  data?.[0],
                  data?.[0]?.runners?.[4]
                )}`}
              >
                <span className="casino-box-odd">
                  {" "}
                  {data?.[0]?.runners?.[4]?.lay?.[0]?.price}
                </span>
              </div>
            </div>
            {/* <div className="casino-book text-center book-black">0</div> */}
          </div>
        </div>
        <div className="col-4">
          <div className="casino-box-row">
            <div className="casino-nation-name">
              <b>F. Ghulam</b>
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[0],
                  data?.[0]?.runners?.[5]
                )}`}
              >
                <span className="casino-box-odd">
                  {data?.[0]?.runners?.[5]?.back?.[0]?.price}
                </span>
              </div>
              <div
                className={`lay casino-bl-box-item ${isDiamondSuspended(
                  data?.[0],
                  data?.[0]?.runners?.[5]
                )}`}
              >
                <span className="casino-box-odd">
                  {data?.[0]?.runners?.[5]?.lay?.[0]?.price}
                </span>
              </div>
            </div>
            {/* <div className="casino-book text-center book-black">0</div> */}
          </div>
        </div>
        <div className="col-12">
          <div className="teen1daycasino-container justify-content-end casino-min-max">
            <div>{/* R:<span>100</span> - <span>100K</span> */}</div>
          </div>
        </div>
      </div>
      {/**/}
      <div className="row row5">
        <div className="col-lg-4 col-12 d-none-small">
          <div className="casino-box-row">
            <div className="casino-nation-name">
              <b>Odd</b>
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
            {/* <div className="casino-book text-center book-black">0</div> */}
            <div className="teen1daycasino-container justify-content-end casino-min-max w-100">
              <div>{/* R:<span>100</span> - <span>100K</span> */}</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-6 bc-fancy">
          <div className="casino-box-row">
            <div className="casino-nation-name">
              <b>{data?.[2]?.runners?.[0]?.back?.[0]?.price}</b>
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[2],
                  data?.[2]?.runners?.[0]
                )}`}
              >
                <span className="casino-box-odd">Dulha Dulhan K-Q</span>
              </div>
              {/* <span className="casino-book text-center book-black">0</span> */}
            </div>
          </div>
          <div className="teen1daycasino-container justify-content-end casino-min-max w-100">
            <div>{/* R:<span>100</span> - <span>100K</span> */}</div>
          </div>
        </div>
        <div className="col-lg-4 col-6 bc-fancy">
          <div className="casino-box-row">
            <div className="casino-nation-name">
              <b>{data?.[2]?.runners?.[1]?.back?.[0]?.price}</b>
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[2],
                  data?.[2]?.runners?.[1]
                )}`}
              >
                <span className="casino-box-odd">Barati J-A</span>
              </div>
              {/* <span className="casino-book text-center book-black">0</span> */}
            </div>
          </div>
          <div className="teen1daycasino-container justify-content-end casino-min-max w-100">
            <div>{/* R:<span>100</span> - <span>100K</span> */}</div>
          </div>
        </div>
      </div>
      <div className="row row5">
        <div className="col-lg-6 col-12 aaa-oe">
          <div className="casino-box-row">
            <div className="casino-bl-box">
              <b>{data?.[3]?.runners?.[0]?.back?.[0]?.price}</b>
            </div>
            <div className="casino-bl-box">
              <b>{data?.[3]?.runners?.[1]?.back[0]?.price}</b>
            </div>
          </div>
          <div className="casino-box-row">
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item casino-card-img ${isDiamondSuspended(
                  data?.[3],
                  data?.[3]?.runners[0]
                )}`}
              >
                <span>
                  <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/heart.png" />{" "}
                  <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/diamond.png" />
                </span>
              </div>
              {/* <span className="casino-book text-center book-black">0</span> */}
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item casino-card-img ${isDiamondSuspended(
                  data?.[3],
                  data?.[3]?.runners?.[1]
                )}`}
              >
                <span>
                  <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/spade.png" />{" "}
                  <img src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/club.png" />
                </span>
              </div>
              {/* <span className="casino-book text-center book-black">0</span> */}
            </div>
          </div>
          <div className="teen1daycasino-container justify-content-end casino-min-max w-100">
            <div>{/* R:<span>100</span> - <span>100K</span> */}</div>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="text-center w-100">
            <div className="casino-bl-box">
              <div className="casino-bl-box-item">
                <b>Cards {data?.[4]?.runners?.[0]?.back?.[0]?.price}</b>
              </div>
            </div>
          </div>
          <div className="casino-cards text-center mt-1">
            {data?.[4]?.runners?.map((runner, i) => {
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
            <div>{/* R:<span>100</span> - <span>25K</span> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BollywoodCasino;
