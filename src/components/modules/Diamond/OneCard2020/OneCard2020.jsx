import { isDiamondSuspended } from "../../../../utils/isDiamondSuspended";

const OneCard2020 = ({ data }) => {
  return (
    <div className="casino-detail">
      <div className="dtobx-top">
        <div
          className={`dragon-box ${isDiamondSuspended(
            data?.[0],
            data?.[0]?.runners?.[0]
          )}`}
        >
          <div className="flex-book">
            <b>Player</b>
            {/* <span className="d-block book-black">0</span> */}
          </div>
          <div className="text-center flex-odds">
            <span className="d-block">
              <b>{data[0]?.runners[0]?.back[0]?.price}</b>
            </span>
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
          <div className="text-center flex-odds">
            <span className="d-block">
              <b> {data[0]?.runners[1]?.back[0]?.price}</b>
            </span>{" "}
            {/* <span className="d-block book-black">0</span> */}
          </div>
        </div>
        <div
          className={`tiger-box ${isDiamondSuspended(
            data?.[0],
            data?.[0]?.runners?.[2]
          )}`}
        >
          <div className="flex-book">
            <b>Dealer</b>
            {/* <span className="d-block book-black">0</span> */}
          </div>
          <div className="text-center flex-odds">
            <span className="d-block">
              <b> {data[0]?.runners[2]?.back[0]?.price}</b>
            </span>
          </div>
        </div>
        <div
          className={`pair-box ${isDiamondSuspended(
            data?.[1],
            data?.[1]?.runners?.[0]
          )}`}
        >
          <div>
            <b>Pair</b>
          </div>
          <div className="text-center flex-odds">
            <span className="d-block">
              <b> {data[1]?.runners[0]?.back[0]?.price}</b>
            </span>{" "}
            {/* <span className="d-block book-black">0</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneCard2020;
