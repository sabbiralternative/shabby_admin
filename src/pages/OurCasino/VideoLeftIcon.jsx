const VideoLeftIcon = ({ data, eventId }) => {
  return (
    <>
      {eventId == "10001" ||
      eventId == "10002" ||
      eventId === "10003" ||
      eventId == "10004" ||
      eventId == "10005" ||
      eventId == "10006" ||
      eventId == "10052" ? (
        <div
          className={`casino-video-cards ${
            data?.[0]?.indexCard?.length === 0 ? "hide-cards" : ""
          } `}
        >
          <div className="casino-cards-shuffle">
            <i className="fas fa-grip-lines-vertical" />
          </div>{" "}
          <div className="casino-video-cards-container">
            <div>
              <span data-v-79776e43>
                {data?.[0]?.indexCard?.length === 0 ? (
                  <img
                    data-v-79776e43
                    src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/1.png"
                  />
                ) : (
                  <img
                    data-v-79776e43
                    src={`/src/assets/cards/${data?.[0]?.indexCard[0]}.jpg`}
                  />
                )}
              </span>
            </div>
          </div>
        </div>
      ) : null}
      {eventId == "10007" ||
      eventId == "10009" ||
      eventId == "10010" ||
      eventId == "10008" ? (
        <div className={`casino-video-cards `}>
          <div className="casino-cards-shuffle">
            <i className="fas fa-grip-lines-vertical"></i>
          </div>
          <div className="casino-video-cards-container">
            <div>
              <span data-v-79776e43="">
                {data?.[0]?.runners?.[0]?.card?.length === 0 ? (
                  <img
                    data-v-79776e43
                    src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/1.png"
                  />
                ) : (
                  <img
                    data-v-79776e43
                    src={`/src/assets/cards/${data?.[0]?.runners[0]?.card?.[0]}.jpg`}
                  />
                )}
              </span>{" "}
              <span data-v-79776e43="">
                {data[0]?.runners?.[1]?.card?.length === 0 ? (
                  <img
                    data-v-79776e43
                    src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/1.png"
                  />
                ) : (
                  <img
                    data-v-79776e43
                    src={`/src/assets/cards/${data?.[0]?.runners[1]?.card?.[0]}.jpg`}
                  />
                )}
              </span>
            </div>
          </div>
        </div>
      ) : null}
      {eventId == "10014" || eventId == "10015" || eventId == "10051" ? (
        <div className="casino-video-cards">
          <div className="casino-cards-shuffle">
            <i className="fas fa-grip-lines-vertical"></i>
          </div>
          <div className="casino-video-cards-container">
            <div>
              <span data-v-79776e43="">
                {data[0]?.runners[0]?.card?.length > 0 ? (
                  <img
                    src={`/src/assets/cards/${data[0]?.runners[0]?.card[0]}.jpg`}
                  />
                ) : (
                  <img
                    data-v-79776e43
                    src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/1.png"
                  />
                )}
              </span>{" "}
              <span data-v-79776e43="">
                {data[0]?.runners[0]?.card?.length > 1 ? (
                  <img
                    src={`/src/assets/cards/${data[0]?.runners[0]?.card[1]}.jpg`}
                  />
                ) : (
                  <img
                    data-v-79776e43
                    src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/1.png"
                  />
                )}
              </span>{" "}
              <span data-v-79776e43="">
                {data[0]?.runners[0]?.card?.length > 2 ? (
                  <img
                    src={`/src/assets/cards/${data[0]?.runners[0]?.card[2]}.jpg`}
                  />
                ) : (
                  <img
                    data-v-79776e43
                    src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/1.png"
                  />
                )}
              </span>
            </div>
            <div>
              <span data-v-79776e43="">
                {data[0]?.runners[1]?.card?.length > 0 ? (
                  <img
                    src={`/src/assets/cards/${data[0]?.runners[1]?.card[0]}.jpg`}
                  />
                ) : (
                  <img
                    data-v-79776e43
                    src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/1.png"
                  />
                )}
              </span>{" "}
              <span data-v-79776e43="">
                {data[0]?.runners[1]?.card?.length > 1 ? (
                  <img
                    src={`/src/assets/cards/${data[0]?.runners[1]?.card[1]}.jpg`}
                  />
                ) : (
                  <img
                    data-v-79776e43
                    src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/1.png"
                  />
                )}
              </span>{" "}
              <span data-v-79776e43="">
                {data[0]?.runners[1]?.card?.length > 2 ? (
                  <img
                    src={`/src/assets/cards/${data[0]?.runners[1]?.card[2]}.jpg`}
                  />
                ) : (
                  <img
                    data-v-79776e43
                    src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/1.png"
                  />
                )}
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default VideoLeftIcon;
