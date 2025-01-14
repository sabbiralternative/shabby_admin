export const recentWinnerColor = (winner, eventId) => {
  /* Lucky7a,lucky7b,lucky7c */
  if (eventId == "10001" || eventId == "10002" || eventId === "10003") {
    if (winner == "L") {
      return "resultlow";
    }
    if (winner == "H" || winner == "7") {
      return "resulthigh";
    }
  }
};
