import { recentWinnerColor } from "../../utils/recentWinnerColor";

const RecentWinner = ({ recent_winner, eventId }) => {
  return (
    <div className="casino-video-last-results">
      {recent_winner?.map((rw, i) => {
        return (
          <span key={i} className={recentWinnerColor(rw?.winner, eventId)}>
            {rw?.winner?.substring(0, 1)}
          </span>
        );
      })}

      <a className="result-more">...</a>
    </div>
  );
};

export default RecentWinner;
