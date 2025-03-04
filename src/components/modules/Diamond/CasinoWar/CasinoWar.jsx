import { isDiamondSuspended } from "../../../../utils/isDiamondSuspended";

const CasinoWar = ({ data }) => {
  return (
    <div className="casino-detail">
      <div className="teen1daycasino-container">
        <div className="casino-war-container">
          <div className="casino-box-row">
            <div className="casino-nation-name no-border" />
            <div className="casino-bl-box">
              <div className="casino-bl-box-item casino-card-img">
                <span data-v-79776e43>
                  {data?.[0]?.runners?.[0]?.card?.length > 0 ? (
                    <img
                      src={`/src/assets/cards/${data?.[0]?.runners?.[0]?.card?.[0]}.jpg`}
                    />
                  ) : (
                    <img
                      data-v-79776e43
                      src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/1.png"
                    />
                  )}
                </span>
              </div>
            </div>
            <div className="casino-bl-box">
              <div className="casino-bl-box-item casino-card-img">
                <span data-v-79776e43>
                  {data?.[1]?.runners?.[0]?.card?.length > 0 ? (
                    <img
                      src={`/src/assets/cards/${data?.[1]?.runners?.[0]?.card?.[0]}.jpg`}
                    />
                  ) : (
                    <img
                      data-v-79776e43
                      src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/1.png"
                    />
                  )}
                </span>
              </div>
            </div>
            <div className="casino-bl-box">
              <div className="casino-bl-box-item casino-card-img">
                <span data-v-79776e43>
                  {data?.[2]?.runners?.[0]?.card?.length > 0 ? (
                    <img
                      src={`/src/assets/cards/${data?.[2]?.runners?.[0]?.card?.[0]}.jpg`}
                    />
                  ) : (
                    <img
                      data-v-79776e43
                      src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/1.png"
                    />
                  )}
                </span>
              </div>
            </div>
            <div className="casino-bl-box">
              <div className="casino-bl-box-item casino-card-img">
                <span data-v-79776e43>
                  {data?.[3]?.runners?.[0]?.card?.length > 0 ? (
                    <img
                      src={`/src/assets/cards/${data?.[3]?.runners?.[0]?.card?.[0]}.jpg`}
                    />
                  ) : (
                    <img
                      data-v-79776e43
                      src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/1.png"
                    />
                  )}
                </span>
              </div>
            </div>
            <div className="casino-bl-box">
              <div className="casino-bl-box-item casino-card-img">
                <span data-v-79776e43>
                  {data?.[4]?.runners?.[0]?.card?.length > 0 ? (
                    <img
                      src={`/src/assets/cards/${data?.[4]?.runners?.[0]?.card?.[0]}.jpg`}
                    />
                  ) : (
                    <img
                      data-v-79776e43
                      src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/1.png"
                    />
                  )}
                </span>
              </div>
            </div>
            <div className="casino-bl-box">
              <div className="casino-bl-box-item casino-card-img">
                <span data-v-79776e43>
                  {data?.[5]?.runners?.[0]?.card?.length > 0 ? (
                    <img
                      src={`/src/assets/cards/${data?.[5]?.runners?.[0]?.card?.[0]}.jpg`}
                    />
                  ) : (
                    <img
                      data-v-79776e43
                      src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/1.png"
                    />
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="casino-box-row casino-war-title">
            <div className="casino-nation-name no-border" />
            <div className="casino-bl-box">
              <div className="casino-bl-box-item">
                <b>1</b>
              </div>
            </div>
            <div className="casino-bl-box">
              <div className="casino-bl-box-item">
                <b>2</b>
              </div>
            </div>
            <div className="casino-bl-box">
              <div className="casino-bl-box-item">
                <b>3</b>
              </div>
            </div>
            <div className="casino-bl-box">
              <div className="casino-bl-box-item">
                <b>4</b>
              </div>
            </div>
            <div className="casino-bl-box">
              <div className="casino-bl-box-item">
                <b>5</b>
              </div>
            </div>
            <div className="casino-bl-box">
              <div className="casino-bl-box-item">
                <b>6</b>
              </div>
            </div>
          </div>
          <div className="casino-box-row mb-4">
            <div className="casino-nation-name">
              <b>Winner</b>
              <div className="float-right">
                <i
                  data-toggle="collapse"
                  data-target="#minmaxinfo0"
                  className="fas fa-info-circle"
                />
                <div id="minmaxinfo0" className="collapse icon-range">
                  R:<span>100</span>-<span>100K</span>
                </div>
              </div>
            </div>

            {data?.slice(0, 6).map((game) =>
              game?.runners?.map((runner, i) => {
                return (
                  <div key={i} className={`casino-bl-box `}>
                    <div
                      className={`back casino-bl-box-item ${isDiamondSuspended(
                        data,
                        runner
                      )}`}
                    >
                      <span className="casino-box-odd">
                        {runner?.back?.[0]?.price}
                      </span>
                      {/* <span className="casino-book book-black">0</span> */}
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="casino-box-row mb-4">
            <div className="casino-nation-name casino-card-img">
              <span>
                <img src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/spade.png" />
                <img src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/club.png" />
              </span>
              <div className="float-right">
                <i
                  data-toggle="collapse"
                  data-target="#minmaxinfo1"
                  className="fas fa-info-circle"
                />
                <div id="minmaxinfo1" className="collapse icon-range">
                  R:<span>100</span>-<span>25K</span>
                </div>
              </div>
            </div>

            {data?.slice(6, 12).map((game) =>
              game?.runners?.slice(0, 1)?.map((runner, i) => {
                return (
                  <div key={i} className={`casino-bl-box `}>
                    <div
                      className={`back casino-bl-box-item ${isDiamondSuspended(
                        game,
                        runner
                      )}`}
                    >
                      <span className="casino-box-odd">
                        {" "}
                        {runner?.back?.[0]?.price}
                      </span>
                      {/* <span className="casino-book book-black">0</span> */}
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="casino-box-row mb-4">
            <div className="casino-nation-name casino-card-img">
              <span>
                <img src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/heart.png" />
                <img src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/diamond.png" />
              </span>
              <div className="float-right">
                <i
                  data-toggle="collapse"
                  data-target="#minmaxinfo2"
                  className="fas fa-info-circle"
                />
                <div id="minmaxinfo2" className="collapse icon-range">
                  R:<span>100</span>-<span>25K</span>
                </div>
              </div>
            </div>
            {data?.slice(6, 12).map((game) =>
              game?.runners?.slice(1, 2)?.map((runner, i) => {
                return (
                  <div key={i} className="casino-bl-box">
                    <div
                      className={`back casino-bl-box-item ${isDiamondSuspended(
                        game,
                        runner
                      )}`}
                    >
                      <span className="casino-box-odd">
                        {" "}
                        {runner?.back?.[0]?.price}
                      </span>
                      {/* <span className="casino-book book-black">0</span> */}
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="casino-box-row mb-4">
            <div className="casino-nation-name">
              <b>Odd</b>
              <div className="float-right">
                <i
                  data-toggle="collapse"
                  data-target="#minmaxinfo3"
                  className="fas fa-info-circle"
                />
                <div id="minmaxinfo3" className="collapse icon-range">
                  R:<span>100</span>-<span>25K</span>
                </div>
              </div>
            </div>

            {data?.slice(12, 18).map((game) =>
              game?.runners?.slice(0, 1)?.map((runner, i) => {
                return (
                  <div key={i} className="casino-bl-box">
                    <div
                      className={`back casino-bl-box-item ${isDiamondSuspended(
                        game,
                        runner
                      )}`}
                    >
                      <span className="casino-box-odd">
                        {runner?.back?.[0]?.price}
                      </span>
                      {/* <span className="casino-book book-black">0</span> */}
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="casino-box-row mb-4">
            <div className="casino-nation-name">
              <b>Even</b>
              <div className="float-right">
                <i
                  data-toggle="collapse"
                  data-target="#minmaxinfo4"
                  className="fas fa-info-circle"
                />
                <div id="minmaxinfo4" className="collapse icon-range">
                  R:<span>100</span>-<span>25K</span>
                </div>
              </div>
            </div>

            {data?.slice(12, 18).map((game) =>
              game?.runners?.slice(1, 2)?.map((runner, i) => {
                return (
                  <div key={i} className="casino-bl-box">
                    <div
                      className={`back casino-bl-box-item ${isDiamondSuspended(
                        game,
                        runner
                      )}`}
                    >
                      <span className="casino-box-odd">
                        {runner?.back?.[0]?.price}
                      </span>
                      {/* <span className="casino-book book-black">0</span> */}
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="casino-box-row mb-4">
            <div className="casino-nation-name casino-card-img">
              <span>
                <img src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/spade.png" />
              </span>
              <div className="float-right">
                <i
                  data-toggle="collapse"
                  data-target="#minmaxinfo5"
                  className="fas fa-info-circle"
                />
                <div id="minmaxinfo5" className="collapse icon-range">
                  R:<span>100</span>-<span>25K</span>
                </div>
              </div>
            </div>

            {data?.slice(18, 24).map((game) =>
              game?.runners?.slice(0, 1)?.map((runner, i) => {
                return (
                  <div key={i} className="casino-bl-box">
                    <div
                      className={`back casino-bl-box-item ${isDiamondSuspended(
                        game,
                        runner
                      )}`}
                    >
                      <span className="casino-box-odd">
                        {" "}
                        {runner?.back?.[0]?.price}
                      </span>
                      {/* <span className="casino-book book-black">0</span> */}
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="casino-box-row mb-4">
            <div className="casino-nation-name casino-card-img">
              <span>
                <img src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/club.png" />
              </span>
              <div className="float-right">
                <i
                  data-toggle="collapse"
                  data-target="#minmaxinfo6"
                  className="fas fa-info-circle"
                />
                <div id="minmaxinfo6" className="collapse icon-range">
                  R:<span>100</span>-<span>25K</span>
                </div>
              </div>
            </div>

            {data?.slice(18, 24).map((game) =>
              game?.runners?.slice(1, 2)?.map((runner, i) => {
                return (
                  <div key={i} className="casino-bl-box">
                    <div
                      className={`back casino-bl-box-item ${isDiamondSuspended(
                        game,
                        runner
                      )}`}
                    >
                      <span className="casino-box-odd">
                        {" "}
                        {runner?.back?.[0]?.price}
                      </span>
                      {/* <span className="casino-book book-black">0</span> */}
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="casino-box-row mb-4">
            <div className="casino-nation-name casino-card-img">
              <span>
                <img src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/heart.png" />
              </span>
              <div className="float-right">
                <i
                  data-toggle="collapse"
                  data-target="#minmaxinfo7"
                  className="fas fa-info-circle"
                />
                <div id="minmaxinfo7" className="collapse icon-range">
                  R:<span>100</span>-<span>25K</span>
                </div>
              </div>
            </div>

            {data?.slice(18, 24).map((game) =>
              game?.runners?.slice(2, 3)?.map((runner, i) => {
                return (
                  <div key={i} className="casino-bl-box">
                    <div
                      className={`back casino-bl-box-item ${isDiamondSuspended(
                        game,
                        runner
                      )}`}
                    >
                      <span className="casino-box-odd">
                        {" "}
                        {runner?.back?.[0]?.price}
                      </span>
                      {/* <span className="casino-book book-black">0</span> */}
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="casino-box-row mb-4">
            <div className="casino-nation-name casino-card-img">
              <span>
                <img src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/cards/diamond.png" />
              </span>
              <div className="float-right">
                <i
                  data-toggle="collapse"
                  data-target="#minmaxinfo8"
                  className="fas fa-info-circle"
                />
                <div id="minmaxinfo8" className="collapse icon-range">
                  R:<span>100</span>-<span>25K</span>
                </div>
              </div>
            </div>
            {data?.slice(18, 24).map((game) =>
              game?.runners?.slice(3, 4)?.map((runner, i) => {
                return (
                  <div key={i} className="casino-bl-box">
                    <div
                      className={`back casino-bl-box-item ${isDiamondSuspended(
                        game,
                        runner
                      )}`}
                    >
                      <span className="casino-box-odd">
                        {" "}
                        {runner?.back?.[0]?.price}
                      </span>
                      {/* <span className="casino-book book-black">0</span> */}
                    </div>
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

export default CasinoWar;
