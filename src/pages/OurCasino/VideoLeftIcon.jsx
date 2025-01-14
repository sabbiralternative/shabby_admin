const VideoLeftIcon = ({ data }) => {
  console.log(data);
  return (
    <div
      className={`casino-video-cards ${
        data[0]?.indexCard?.length === 0 ? "hide-cards" : ""
      } `}
    >
      <div className="casino-cards-shuffle">
        <i className="fas fa-grip-lines-vertical" />
      </div>{" "}
      <div className="casino-video-cards-container">
        <div>
          <span data-v-79776e43>
            {data[0]?.indexCard?.length === 0 ? (
              <img
                data-v-79776e43
                src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/1.png"
              />
            ) : (
              <img
                data-v-79776e43
                src={`/src/assets/cards/${data[0]?.indexCard[0]}.jpg`}
              />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoLeftIcon;
