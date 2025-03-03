import { isDiamondSuspended } from "../../../../utils/isDiamondSuspended";

const Baccrat29 = ({ data }) => {
  return (
    <div className="casino-detail">
      <div className="teen20casino-container">
        <div className="teen20left">
          <div className="casino-box-row">
            <div className="casino-nation-name no-border casino-bl-box-title">
              <div className="playera">Player A</div>
            </div>
          </div>
          <div className="casino-bl-box casino-bl-box-title d-none-small">
            <div className="casino-bl-box-item">
              <span>Winner</span>
            </div>
            <div className="casino-bl-box-item">
              <span>High Card</span>
            </div>
            <div className="casino-bl-box-item">
              <span>Pair</span>
            </div>
            <div className="casino-bl-box-item">
              <span>Color Plus</span>
            </div>
          </div>
          <div className="casino-bl-box">
            <div className="casino-bl-box-item d-none-big">
              <span>Winner</span>
            </div>
            <div
              className={`back casino-bl-box-item ${isDiamondSuspended(
                data?.[0],
                data?.[0]?.runners?.[0]
              )}`}
            >
              <span className="casino-box-odd">
                {" "}
                {data?.[0]?.runners[0]?.back[0]?.price}
              </span>{" "}
              {/* <span className="book-black">0</span> */}
            </div>
            <div className="casino-bl-box-item d-none-big">
              <span>High Card</span>
            </div>
            <div
              className={`back casino-bl-box-item ${isDiamondSuspended(
                data?.[2],
                data?.[2]?.runners?.[0]
              )}`}
            >
              <span className="casino-box-odd">
                {" "}
                {data?.[2]?.runners[0]?.back[0]?.price}
              </span>{" "}
              {/* <span className="book-black">0</span> */}
            </div>
            <div className="casino-bl-box-item d-none-big">
              <span>Pair</span>
            </div>
            <div
              className={`back casino-bl-box-item ${isDiamondSuspended(
                data?.[4],
                data?.[4]?.runners?.[0]
              )}`}
            >
              <span className="casino-box-odd">
                {" "}
                {data?.[4]?.runners[0]?.back[0]?.price}
              </span>{" "}
              {/* <span className="book-black">0</span> */}
            </div>
            <div className="casino-bl-box-item d-none-big">
              <span>Color Plus</span>
            </div>
            <div
              className={`back casino-bl-box-item ${isDiamondSuspended(
                data?.[6],
                data?.[6]?.runners?.[0]
              )}`}
            >
              <span className="casino-box-odd">
                {" "}
                {data?.[6]?.runners[0]?.back[0]?.price}
              </span>{" "}
              {/* <span className="book-black">0</span> */}
            </div>
          </div>
        </div>
        <div className="teen20center" />
        <div className="teen20right">
          <div className="casino-box-row">
            <div className="casino-nation-name no-border casino-bl-box-title">
              <div className="playerb">Player B</div>
            </div>
          </div>
          <div className="casino-bl-box casino-bl-box-title d-none-small">
            <div className="casino-bl-box-item">
              <span>Winner</span>
            </div>
            <div className="casino-bl-box-item">
              <span>High Card</span>
            </div>
            <div className="casino-bl-box-item">
              <span>Pair</span>
            </div>
            <div className="casino-bl-box-item">
              <span>Color Plus</span>
            </div>
          </div>
          <div className="casino-bl-box">
            <div className="casino-bl-box-item d-none-big">
              <span>Winner</span>
            </div>
            <div
              className={`back casino-bl-box-item ${isDiamondSuspended(
                data?.[1],
                data?.[1]?.runners?.[0]
              )}`}
            >
              <span className="casino-box-odd">
                {" "}
                {data?.[1]?.runners[0]?.back[0]?.price}
              </span>{" "}
              {/* <span className="book-black">0</span> */}
            </div>
            <div className="casino-bl-box-item d-none-big">
              <span>High Card</span>
            </div>
            <div
              className={`back casino-bl-box-item ${isDiamondSuspended(
                data?.[3],
                data?.[3]?.runners?.[0]
              )}`}
            >
              <span className="casino-box-odd">
                {" "}
                {data?.[3]?.runners[0]?.back[0]?.price}
              </span>{" "}
              {/* <span className="book-black">0</span> */}
            </div>
            <div className="casino-bl-box-item d-none-big">
              <span>Pair</span>
            </div>
            <div
              className={`back casino-bl-box-item ${isDiamondSuspended(
                data?.[5],
                data?.[5]?.runners?.[0]
              )}`}
            >
              <span className="casino-box-odd">
                {" "}
                {data?.[5]?.runners[0]?.back[0]?.price}
              </span>{" "}
              {/* <span className="book-black">0</span> */}
            </div>
            <div className="casino-bl-box-item d-none-big">
              <span>Color Plus</span>
            </div>
            <div
              className={`back casino-bl-box-item ${isDiamondSuspended(
                data?.[7],
                data?.[7]?.runners?.[0]
              )}`}
            >
              <span className="casino-box-odd">
                {" "}
                {data?.[7]?.runners[0]?.back[0]?.price}
              </span>{" "}
              {/* <span className="book-black">0</span> */}
            </div>
          </div>
        </div>
      </div>
      <div className="sin-khal-box">
        <img src="https://g1ver.sprintstaticdata.com/v42/static/admin/img/lucky9.png" />
        <div className="casino-bl-box">
          <div
            className={`back casino-bl-box-item ${isDiamondSuspended(
              data?.[8],
              data?.[8]?.runners?.[0]
            )}`}
          >
            <span className="casino-box-odd">
              {" "}
              {data?.[8]?.runners[0]?.back[0]?.price}
            </span>
          </div>
          <div
            className={`lay casino-bl-box-item ${isDiamondSuspended(
              data?.[8],
              data?.[8]?.runners?.[0]
            )}`}
          >
            <span className="casino-box-odd">
              {" "}
              {data?.[8]?.runners[0]?.lay?.[0]?.price}
            </span>
          </div>
          <div className="sin-khal-box-book book-black">0</div>
        </div>
      </div>
    </div>
  );
};

export default Baccrat29;
