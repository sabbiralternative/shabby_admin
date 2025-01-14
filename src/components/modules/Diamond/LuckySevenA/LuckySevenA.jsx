const LuckySevenA = ({ data }) => {
  const isSuspended = (data, runner) => {
    if (data?.status !== "OPEN" || runner?.status !== "ACTIVE") {
      return "suspended";
    }
  };
  return (
    <div className="casino-detail">
      <div className="casino-box low-high-box">
        <div
          className={`low-odds ${isSuspended(data[0], data[0]?.runners?.[0])}`}
        >
          <div className="casino-odds">
            {data[0]?.runners[0]?.back[0]?.price}
          </div>{" "}
          <div className="text-center casino-buttons">
            <span>Low Card</span>
          </div>{" "}
          <div className="casino-book book-black">0</div>
        </div>{" "}
        <div className="text-center lucky7-card">
          <img src="/src/assets/cards/7.png" className="img-fluid" />
        </div>{" "}
        <div
          className={`high-odds ${isSuspended(data[0], data[0]?.runners[1])}`}
        >
          <div className="casino-odds">2</div>{" "}
          <div className="text-center casino-buttons">
            <span>High Card</span>
          </div>{" "}
          <div className="casino-book book-black">
            {" "}
            {data[0]?.runners[1]?.back[0]?.price}
          </div>
        </div>{" "}
        <div className="casino-min-max text-right">
          {/* R:<span>100</span>-<span>100K</span> */}
        </div>
      </div>{" "}
      <div className="casino-box sidebets-box">
        <div className="lucky7-extra-bets">
          <div
            className={`lucky7-extra-bets-item-container ${isSuspended(
              data?.[1],
              data?.[1]?.runners?.[0]
            )}`}
          >
            <div className="lucky7-extra-bets-item">
              <div className="casino-odds">
                {" "}
                {data[1]?.runners[0]?.back[0]?.price}
              </div>{" "}
              <div className="casino-buttons">Even</div>{" "}
              <div className="casino-book book-black">0</div>
            </div>{" "}
            <div className="casino-min-max text-right">
              {/* R:<span>100</span>-<span>25K</span> */}
            </div>
          </div>{" "}
          <div
            className={`lucky7-extra-bets-item-container ${isSuspended(
              data?.[1],
              data?.[1]?.runners?.[1]
            )}`}
          >
            <div className="lucky7-extra-bets-item">
              <div className="casino-odds">
                {" "}
                {data[1]?.runners[1]?.back[0]?.price}
              </div>{" "}
              <div className="casino-buttons">Odd</div>{" "}
              <div className="casino-book book-black">0</div>
            </div>{" "}
            <div className="casino-min-max text-right">
              {/* R:<span>100</span>-<span>25K</span> */}
            </div>
          </div>{" "}
          <div
            className={`lucky7-extra-bets-item-container ${isSuspended(
              data?.[2],
              data?.[2]?.runners?.[0]
            )}`}
          >
            <div className="lucky7-extra-bets-item">
              <div className="casino-odds">
                {" "}
                {data[2]?.runners[0]?.back[0]?.price}
              </div>{" "}
              <div className="casino-buttons">
                <img src="/src/assets/spade.png" />{" "}
                <img src="/src/assets/club.png" />
              </div>{" "}
              <div className="casino-book book-black">0</div>
            </div>{" "}
            <div className="casino-min-max text-right">
              {/* R:<span>100</span>-<span>25K</span> */}
            </div>
          </div>{" "}
          <div
            className={`lucky7-extra-bets-item-container ${isSuspended(
              data?.[2],
              data?.[2]?.runners?.[1]
            )}`}
          >
            <div className="lucky7-extra-bets-item">
              <div className="casino-odds">
                {" "}
                {data[2]?.runners[1]?.back[0]?.price}
              </div>{" "}
              <div className="casino-buttons">
                <img src="/src/assets/heart.png" />{" "}
                <img src="/src/assets/diamond.png" />
              </div>{" "}
              <div className="casino-book book-black">0</div>
            </div>{" "}
            <div className="casino-min-max text-right">
              {/* R:<span>100</span>-<span>25K</span> */}
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="casino-box cards-top">
        <div className="container-fluid container-fluid-5">
          <div className="row row5">
            <div
              className={`col-6 col-md-3 ${isSuspended(
                data?.[3],
                data?.[3]?.runners?.[0]
              )}`}
            >
              <div>
                <div className="casino-odds">
                  {" "}
                  {data[3]?.runners[0]?.back[0]?.price}
                </div>{" "}
                <div className="casino-cards text-center mt-1">
                  <div className="casino-box cards-top-box">
                    <div className="casino-card-item">
                      <div className="card-image">
                        <img src="/src/assets/cards/A.png" />
                      </div>
                    </div>{" "}
                    <div className="casino-card-item">
                      <div className="card-image">
                        <img src="/src/assets/cards/2.png" />
                      </div>
                    </div>{" "}
                    <div className="casino-card-item">
                      <div className="card-image">
                        <img src="/src/assets/cards/3.png" />
                      </div>
                    </div>
                  </div>{" "}
                  <div className="w-100 casino-book book-black">0</div>
                </div>{" "}
                <div className="casino-min-max text-center">
                  {/* R:<span>100</span>-<span>5K</span> */}
                </div>
              </div>
            </div>{" "}
            <div
              className={`col-6 col-md-3 ${isSuspended(
                data?.[3],
                data?.[3]?.runners?.[1]
              )}`}
            >
              <div>
                <div className="casino-odds">
                  {" "}
                  {data[3]?.runners[1]?.back[0]?.price}
                </div>{" "}
                <div className="casino-cards text-center mt-1">
                  <div className="casino-box cards-top-box">
                    <div className="casino-card-item">
                      <div className="card-image">
                        <img src="/src/assets/cards/4.png" />
                      </div>
                    </div>{" "}
                    <div className="casino-card-item">
                      <div className="card-image">
                        <img src="/src/assets/cards/5.png" />
                      </div>
                    </div>{" "}
                    <div className="casino-card-item">
                      <div className="card-image">
                        <img src="/src/assets/cards/6.png" />
                      </div>
                    </div>
                  </div>{" "}
                  <div className="w-100 casino-book book-black">0</div>
                </div>{" "}
                <div className="casino-min-max text-center">
                  {/* R:<span>100</span>-<span>5K</span> */}
                </div>
              </div>
            </div>{" "}
            <div
              className={`col-6 col-md-3 ${isSuspended(
                data?.[3],
                data?.[3]?.runners?.[2]
              )}`}
            >
              <div>
                <div className="casino-odds">
                  {" "}
                  {data[3]?.runners[2]?.back[0]?.price}
                </div>{" "}
                <div className="casino-cards text-center mt-1">
                  <div className="casino-box cards-top-box">
                    <div className="casino-card-item">
                      <div className="card-image">
                        <img src="/src/assets/cards/8.png" />
                      </div>
                    </div>{" "}
                    <div className="casino-card-item">
                      <div className="card-image">
                        <img src="/src/assets/cards/9.png" />
                      </div>
                    </div>{" "}
                    <div className="casino-card-item">
                      <div className="card-image">
                        <img src="/src/assets/cards/10.png" />
                      </div>
                    </div>
                  </div>{" "}
                  <div className="w-100 casino-book book-black">0</div>
                </div>{" "}
                <div className="casino-min-max text-center">
                  {/* R:<span>100</span>-<span>5K</span> */}
                </div>
              </div>
            </div>{" "}
            <div
              className={`col-6 col-md-3 ${isSuspended(
                data?.[3],
                data?.[3]?.runners?.[3]
              )}`}
            >
              <div>
                <div className="casino-odds">
                  {" "}
                  {data[3]?.runners[3]?.back[0]?.price}
                </div>{" "}
                <div className="casino-cards text-center mt-1">
                  <div className="casino-box cards-top-box">
                    <div className="casino-card-item">
                      <div className="card-image">
                        <img src="/src/assets/cards/J.png" />
                      </div>
                    </div>{" "}
                    <div className="casino-card-item">
                      <div className="card-image">
                        <img src="/src/assets/cards/Q.png" />
                      </div>
                    </div>{" "}
                    <div className="casino-card-item">
                      <div className="card-image">
                        <img src="/src/assets/cards/K.png" />
                      </div>
                    </div>
                  </div>{" "}
                  <div className="w-100 casino-book book-black">0</div>
                </div>{" "}
                <div className="casino-min-max text-center">
                  {/* R:<span>100</span>-<span>5K</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div
        className={`casino-box cards-box ${isSuspended(
          data?.[4],
          data?.[4]?.runners?.[0]
        )}`}
      >
        <div className="w-100">
          <div className="casino-odds">
            {" "}
            {data[4]?.runners[0]?.back[0]?.price}
          </div>{" "}
          <div className="casino-cards text-center mt-1">
            {data[4]?.runners?.map((runner, i) => {
              return (
                <div key={i} className="casino-card-item">
                  <div className="card-image">
                    <img src={`/src/assets/cards/${runner?.name}.png`} />
                  </div>{" "}
                  <div className="casino-book book-black">0</div>
                </div>
              );
            })}
          </div>
        </div>{" "}
        <div className="casino-min-max text-right">
          {/* R:<span>100</span>-<span>5K</span> */}
        </div>
      </div>
    </div>
  );
};

export default LuckySevenA;
