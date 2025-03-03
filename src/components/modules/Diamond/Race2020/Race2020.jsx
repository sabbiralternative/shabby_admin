import { isDiamondSuspended } from "../../../../utils/isDiamondSuspended";

const Race2020 = ({ data }) => {
  return (
    <div className="casino-detail">
      <div className="row row5">
        <div className="col-6 col-md-3">
          <div className="casino-box-row">
            <div className="casino-nation-name">
              <img src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/KSS.png" />

              <div className="range-icon d-inline-block ml-2">
                <i
                  data-toggle="collapse"
                  data-target="#demo0"
                  className="fas fa-info-circle float-right"
                />
                <div id="demo0" className="collapse icon-range">
                  R:<span>100</span>-<span>300K</span>
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
                  {data[0]?.runners?.[0]?.lay?.[0]?.price}
                </span>
              </div>
            </div>
            {/* <div className="casino-nation-name book-black">0</div> */}
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="casino-box-row">
            <div className="casino-nation-name">
              <img src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/KHH.png" />

              <div className="range-icon d-inline-block ml-2">
                <i
                  data-toggle="collapse"
                  data-target="#demo1"
                  className="fas fa-info-circle float-right"
                />
                <div id="demo1" className="collapse icon-range">
                  R:<span>100</span>-<span>300K</span>
                </div>
              </div>
            </div>
            <div className="casino-bl-box">
              <div
                className={`${isDiamondSuspended(
                  data?.[0],
                  data?.[0]?.runners?.[1]
                )} back casino-bl-box-item `}
              >
                <span className="casino-box-odd">
                  {" "}
                  {data[0]?.runners?.[1]?.back?.[0]?.price}
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
                  {data[0]?.runners?.[1]?.lay?.[0]?.price}
                </span>
              </div>
            </div>
            {/* <div className="casino-nation-name book-black">0</div> */}
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="casino-box-row">
            <div className="casino-nation-name">
              <img src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/KCC.png" />

              <div className="range-icon d-inline-block ml-2">
                <i
                  data-toggle="collapse"
                  data-target="#demo2"
                  className="fas fa-info-circle float-right"
                />
                <div id="demo2" className="collapse icon-range">
                  R:<span>100</span>-<span>300K</span>
                </div>
              </div>
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
                  {data[0]?.runners?.[2]?.back?.[0]?.price}
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
                  {data[0]?.runners?.[2]?.lay?.[0]?.price}
                </span>
              </div>
            </div>
            {/* <div className="casino-nation-name book-black">0</div> */}
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="casino-box-row">
            <div className="casino-nation-name">
              <img src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/KDD.png" />
              <div className="range-icon d-inline-block ml-2">
                <i
                  data-toggle="collapse"
                  data-target="#demo3"
                  className="fas fa-info-circle float-right"
                />
                <div id="demo3" className="collapse icon-range">
                  R:<span>100</span>-<span>300K</span>
                </div>
              </div>
            </div>
            <div className="casino-bl-box">
              <div
                className={`back casino-bl-box-item ${isDiamondSuspended(
                  data?.[0],
                  data?.[0]?.runners?.[3]
                )}`}
              >
                <span className="casino-box-odd">
                  {" "}
                  {data[0]?.runners?.[3]?.back?.[0]?.price}
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
                  {data[0]?.runners?.[3]?.lay?.[0]?.price}
                </span>
              </div>
            </div>
            {/* <div className="casino-nation-name book-black">0</div> */}
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-md-4">
          <div>
            <div className="casino-yn">
              <div />
              <div className="casino-bl-box">
                <div className="casino-bl-box-item yn-header">
                  <b>No</b>
                </div>
                <div className="casino-bl-box-item yn-header">
                  <b>Yes</b>
                </div>
              </div>
            </div>
            <div className="casino-odds-box casino-yn">
              <div className="casino-odds-box-bhav">
                <b>Total points</b>
                <div className="range-icon d-inline-block">
                  <i
                    data-toggle="collapse"
                    data-target="#tp0"
                    className="fas fa-info-circle float-right"
                  />
                  <div id="tp0" className="collapse icon-range">
                    R:<span>100</span>-<span>100K</span>
                  </div>
                </div>
              </div>
              <div className="casino-bl-box">
                <div className="lay casino-bl-box-item suspended">
                  <span className="casino-box-odd">0</span> <span>0</span>
                </div>
                <div className="back casino-bl-box-item suspended">
                  <span className="casino-box-odd">0</span> <span>0</span>
                </div>
              </div>
            </div>
            {/* <div className="casino-yn">
              <div />
              <div className="casino-bl-box">
                <div className="casino-nation-name book-black">0</div>
              </div>
            </div> */}
          </div>
          <div>
            <div className="casino-yn">
              <div />
              <div className="casino-bl-box">
                <div className="casino-bl-box-item yn-header">
                  <b>No</b>
                </div>
                <div className="casino-bl-box-item yn-header">
                  <b>Yes</b>
                </div>
              </div>
            </div>
            <div className="casino-odds-box casino-yn">
              <div className="casino-odds-box-bhav">
                <b>Total cards</b>
                <div className="range-icon d-inline-block">
                  <i
                    data-toggle="collapse"
                    data-target="#tp1"
                    className="fas fa-info-circle float-right"
                  />
                  <div id="tp1" className="collapse icon-range">
                    R:<span>100</span>-<span>100K</span>
                  </div>
                </div>
              </div>
              <div className="casino-bl-box">
                <div className="lay casino-bl-box-item suspended">
                  <span className="casino-box-odd">0</span> <span>0</span>
                </div>
                <div className="back casino-bl-box-item suspended">
                  <span className="casino-box-odd">0</span> <span>0</span>
                </div>
              </div>
            </div>
            {/* <div className="casino-yn">
              <div />
              <div className="casino-bl-box">
                <div className="casino-nation-name book-black">0</div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="col-12 col-md-8 win-with">
          <div className="row row5">
            <div className="col-4">
              <div className="casino-box-row">
                <div className="casino-nation-name">
                  <b>Win with 5</b>
                  <div className="range-icon d-inline-block ml-2">
                    <i
                      data-toggle="collapse"
                      data-target="#fancy2"
                      className="fas fa-info-circle float-right"
                    />
                    <div id="fancy2" className="collapse icon-range">
                      R:<span>100</span>-<span>25K</span>
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
                      {data[1]?.runners?.[0]?.back?.[0]?.price}
                    </span>
                  </div>
                </div>
                {/* <div className="casino-nation-name rf-minheight book-black">
                  0
                </div> */}
              </div>
              <div className="casino-box-row">
                <div className="casino-nation-name">
                  <b>Win with 15</b>
                  <div className="range-icon d-inline-block ml-2">
                    <i
                      data-toggle="collapse"
                      data-target="#fancy5"
                      className="fas fa-info-circle float-right"
                    />
                    <div id="fancy5" className="collapse icon-range">
                      R:<span>100</span>-<span>25K</span>
                    </div>
                  </div>
                </div>
                <div className="casino-bl-box">
                  <div
                    className={`back casino-bl-box-item ${isDiamondSuspended(
                      data?.[1],
                      data?.[1]?.runners?.[3]
                    )}`}
                  >
                    <span className="casino-box-odd">
                      {data[1]?.runners?.[3]?.back?.[0]?.price}
                    </span>
                  </div>
                </div>
                {/* <div className="casino-nation-name rf-minheight book-black">
                  0
                </div> */}
              </div>
            </div>
            <div className="col-4">
              <div className="casino-box-row">
                <div className="casino-nation-name">
                  <b>Win with 6</b>
                  <div className="range-icon d-inline-block ml-2">
                    <i
                      data-toggle="collapse"
                      data-target="#fancy3"
                      className="fas fa-info-circle float-right"
                    />
                    <div id="fancy3" className="collapse icon-range">
                      R:<span>100</span>-<span>25K</span>
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
                      {data[1]?.runners?.[1]?.back?.[0]?.price}
                    </span>
                  </div>
                </div>
                {/* <div className="casino-nation-name rf-minheight book-black">
                  0
                </div> */}
              </div>
              <div className="casino-box-row">
                <div className="casino-nation-name">
                  <b>Win with 16</b>
                  <div className="range-icon d-inline-block ml-2">
                    <i
                      data-toggle="collapse"
                      data-target="#fancy6"
                      className="fas fa-info-circle float-right"
                    />
                    <div id="fancy6" className="collapse icon-range">
                      R:<span>100</span>-<span>25K</span>
                    </div>
                  </div>
                </div>
                <div className="casino-bl-box">
                  <div
                    className={`back casino-bl-box-item ${isDiamondSuspended(
                      data?.[1],
                      data?.[1]?.runners?.[4]
                    )}`}
                  >
                    <span className="casino-box-odd">
                      {data[1]?.runners?.[4]?.back?.[0]?.price}
                    </span>
                  </div>
                </div>
                {/* <div className="casino-nation-name rf-minheight book-black">
                  0
                </div> */}
              </div>
            </div>
            <div className="col-4">
              <div className="casino-box-row">
                <div className="casino-nation-name">
                  <b>Win with 7</b>
                  <div className="range-icon d-inline-block ml-2">
                    <i
                      data-toggle="collapse"
                      data-target="#fancy4"
                      className="fas fa-info-circle float-right"
                    />
                    <div id="fancy4" className="collapse icon-range">
                      R:<span>100</span>-<span>25K</span>
                    </div>
                  </div>
                </div>
                <div className="casino-bl-box">
                  <div
                    className={`back casino-bl-box-item ${isDiamondSuspended(
                      data?.[1],
                      data?.[1]?.runners?.[2]
                    )}`}
                  >
                    <span className="casino-box-odd">
                      {data[1]?.runners?.[2]?.back?.[0]?.price}
                    </span>
                  </div>
                </div>
                {/* <div className="casino-nation-name rf-minheight book-black">
                  0
                </div> */}
              </div>
              <div className="casino-box-row">
                <div className="casino-nation-name">
                  <b>Win with 17</b>
                  <div className="range-icon d-inline-block ml-2">
                    <i
                      data-toggle="collapse"
                      data-target="#fancy7"
                      className="fas fa-info-circle float-right"
                    />
                    <div id="fancy7" className="collapse icon-range">
                      R:<span>100</span>-<span>25K</span>
                    </div>
                  </div>
                </div>
                <div className="casino-bl-box">
                  <div
                    className={`back casino-bl-box-item ${isDiamondSuspended(
                      data?.[1],
                      data?.[1]?.runners?.[5]
                    )}`}
                  >
                    <span className="casino-box-odd">
                      {data[1]?.runners?.[5]?.back?.[0]?.price}
                    </span>
                  </div>
                </div>
                {/* <div className="casino-nation-name rf-minheight book-black">
                  0
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Race2020;
