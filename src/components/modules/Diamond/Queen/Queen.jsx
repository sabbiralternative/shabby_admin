import { isDiamondSuspended } from "../../../../utils/isDiamondSuspended";

const Queen = ({ data }) => {
  console.log(data);
  return (
    <div className="casino-detail">
      <div className="row">
        {data?.[0]?.runners?.map((runner) => {
          return (
            <div key={runner?.id} className="col-3 ">
              <div className="casino-box-row">
                <div className="casino-nation-name">
                  <b>{runner?.name}</b>
                </div>{" "}
                <div className="casino-bl-box">
                  <div
                    data-toggle="modal"
                    data-target="#casino-betslip"
                    className={`back casino-bl-box-item ${isDiamondSuspended(
                      data?.[0],
                      runner
                    )}`}
                  >
                    <span className="casino-box-odd">
                      {runner?.back?.[0]?.price}
                    </span>
                  </div>{" "}
                  <div
                    className={`lay casino-bl-box-item ${isDiamondSuspended(
                      data?.[0],
                      runner
                    )}`}
                  >
                    <span className="casino-box-odd">
                      {runner?.lay?.[0]?.price}
                    </span>
                  </div>
                </div>{" "}
                {/* <div className="casino-nation-name">
                  <span className="casino-book book-black">0</span>
                </div> */}
              </div>
            </div>
          );
        })}
      </div>{" "}
      <div className="col-12 text-right casino-min-max">
        R:<span>100</span>-<span>300K</span>
      </div>{" "}
      <div className="casino-remark mt-3">
        <div className="remark-icon">
          <img src="https://g1ver.sprintstaticdata.com/v43/static/admin/img/icons/remark.png" />
        </div>{" "}
        <marquee>
          This is 21 cards game 2,3,4,5,6 x 4 =20 and 1 Queen. Minimum total 10
          or queen is required to win.
        </marquee>
      </div>{" "}
    </div>
  );
};

export default Queen;
