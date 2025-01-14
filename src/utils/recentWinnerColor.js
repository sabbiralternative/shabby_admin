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
  /* bollywood casino 1-2, and amar akbar anthony 1-2 */
  if (
    eventId == "10006" ||
    eventId == "10052" ||
    eventId == "10005" ||
    eventId == "10004"
  ) {
    return `result${winner?.substring(0, 1)?.toLowerCase()}`;
  }
};
