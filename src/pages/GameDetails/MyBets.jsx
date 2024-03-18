import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import CurrentBetsAll from "../../components/Modal/CurrentBetsAll";
const MyBets = ({ myBets, iFrameUrl, match_odds, eventTypeId,eventId }) => {
  const [showIFrame, setShowIFrame] = useState(true);
  const [showCurrentBets,setShowCurrentBets] = useState(false)
  return (
    <>
   {
    showCurrentBets && (
      <CurrentBetsAll 
      setShowCurrentBets={setShowCurrentBets}
      showCurrentBets={showCurrentBets}
      eventId={eventId}
      />
    )
   }
      <div className="simplebar-wrapper" style={{ margin: "0px" }}>
        <div className="simplebar-height-auto-observer-wrapper">
          <div className="simplebar-height-auto-observer"></div>
        </div>
        <div className="simplebar-mask">
          <div
            className="simplebar-offset"
            style={{ right: "0px", bottom: "0px" }}
          >
            <div
              className="simplebar-content-wrapper"
              role="region"
              aria-label="scrollable content"
              style={{ height: "auto", overflow: "hidden" }}
            >
              <div className="simplebar-content" style={{ padding: "0px" }}>
                {match_odds?.length > 0 && match_odds[0]?.hasVideo && (
                  <div className="card m-b-10">
                    <div onClick={()=> setShowIFrame((prev)=> !prev)}
                      data-toggle="collapse"
                      data-target=".video-tv"
                      aria-expanded="true"
                      className="card-header pointer"
                    >
                      <h6 className="card-title">
                        <a >
                          {showIFrame ? (
                            <MdKeyboardArrowDown
                              size={25}
                              style={{ color: "white" }}
                              className="mr-1"
                            />
                          ) : (
                            <MdKeyboardArrowRight
                              size={25}
                              style={{ color: "white" }}
                              className="mr-1"
                            />
                          )}
                        </a>
                        Live Match
                      </h6>
                    </div>

                   {showIFrame && (
                     <div className="video-tv collapse show">
                     <iframe src={iFrameUrl?.url}></iframe>
                   </div>
                   )}
                  </div>
                )}
                {/* Score */}
                {eventTypeId == 4 &&
                  match_odds?.[0]?.score?.map((score, i) => {
                    return (
                      <div key={i}>
                        <div className="scorecard">
                          <div className="scorecard-row">
                            <div className="score-top-row">
                              <div className="score-team">
                                <b>{score?.team1Name}</b>{" "}
                                <b>{score?.team1Score}</b>
                              </div>
                              <div className="score-rr"></div>
                            </div>
                          </div>
                          <div className="scorecard-row">
                            <div className="score-top-row">
                              <div className="score-team">
                                <b>{score?.team2Name}</b> {score?.team2Score}
                              </div>
                              <div className="score-rr">
                                <span>{score?.runRate}</span>
                              </div>
                              <div className="score-message">
                                {score?.recent?.map((r, i) => {
                                  return (
                                    <span
                                      key={i}
                                      className={`ball-runs mr-1 ${
                                        r === "ww" ? "wicket" : ""
                                      }`}
                                    >
                                      {r}
                                    </span>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                {/* My bets */}
                <div id="my-game-bets" className="card m-b-10 my-bet">
                  <div className="card-header">
                    <h6 className="card-title float-left">My Bets</h6>
                    <a
                    onClick={()=> setShowCurrentBets(true)}
                      className="btn btn-back float-right"
                    >
                      View More
                    </a>
                  </div>
                  <div className="card-body">
                    <div className="tabs" id="__BVID__1619">
                      <div className="">
                        <ul
                          role="tablist"
                          className="nav nav-tabs small"
                          id="__BVID__1619__BV_tab_controls_"
                        >
                          <li role="presentation" className="nav-item">
                            <a
                              role="tab"
                              aria-selected="true"
                              aria-setsize="1"
                              aria-posinset="1"
                              href="#"
                              target="_self"
                              className="nav-link active"
                              id="__BVID__1620___BV_tab_button__"
                              aria-controls="__BVID__1620"
                            >
                              Matched Bets
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="tab-content"
                        id="__BVID__1619__BV_tab_container_"
                      >
                        <div
                          role="tabpanel"
                          aria-hidden="false"
                          className="tab-pane active"
                          id="__BVID__1620"
                          aria-labelledby="__BVID__1620___BV_tab_button__"
                        >
                          <div id="matched-bet" className="tab-pane active">
                            <div className="table-responsive">
                              <table className="table coupon-table mb-0">
                                <thead>
                                  <tr>
                                    <th style={{ minWidth: "90px" }}>
                                      UserName
                                    </th>
                                    <th style={{ minWidth: "90px" }}>Nation</th>
                                    <th
                                      className="text-right"
                                      style={{ minWidth: "50px" }}
                                    >
                                      Rate
                                    </th>
                                    <th
                                      className="text-right"
                                      style={{ minWidth: "70px" }}
                                    >
                                      Amount
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {myBets?.map((bets) => {
                                    return (
                                      <>
                                        <tr
                                          className={`${
                                            bets?.betType === "Back"
                                              ? "back-border"
                                              : "lay-border"
                                          }`}
                                        >
                                          <td colSpan="4">
                                            <b
                                              style={{
                                                textTransform: "uppercase",
                                              }}
                                            >
                                              {bets?.marketName}
                                            </b>{" "}
                                            <span className="float-right">
                                              {bets?.placeDate}
                                            </span>
                                          </td>
                                        </tr>
                                        <tr
                                          className={`${
                                            bets?.betType === "Back"
                                              ? "back-border"
                                              : "lay-border"
                                          }`}
                                        >
                                          <td className="bt0">
                                            {bets?.username}
                                          </td>
                                          <td className="bt0">
                                            {bets?.nation}
                                          </td>
                                          <td className="text-right bt0">
                                            {bets?.userRate}
                                          </td>
                                          <td className="text-right bt0">
                                            {bets?.amount}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td
                                            colSpan="4"
                                            className=""
                                            style={{
                                              height: "3px",
                                              padding: "0px",
                                            }}
                                          ></td>
                                        </tr>
                                      </>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="simplebar-placeholder"
          style={{ width: "auto", height: "692px" }}
        ></div>
      </div>
      {/* <div
        className="simplebar-track simplebar-horizontal"
        style={{visibility:'hidden'}}
      >
        <div
          className="simplebar-scrollbar"
          style="width: 0px; display: none;"
        ></div>
      </div>
      <div
        className="simplebar-track simplebar-vertical"
        style="visibility: hidden;"
      >
        <div
          className="simplebar-scrollbar"
          style="height: 0px; display: none;"
        ></div>
      </div> */}
    </>
  );
};

export default MyBets;
