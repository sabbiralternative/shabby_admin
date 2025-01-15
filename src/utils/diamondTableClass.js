export const diamondTableClass = (eventId) => {
  if (eventId == "10001" || eventId == "10002" || eventId === "10003") {
    return "lucky7";
  }
  if (
    eventId == "10004" ||
    eventId == "10005" ||
    eventId == "10006" ||
    eventId == "10052"
  ) {
    return "aaa";
  }
  if (eventId == "10007" || eventId == "10010" || eventId == "10009") {
    return "dt20";
  }
  if (eventId == "10008") {
    return "dt1day";
  }
  if (eventId == "10014" || eventId == "10015" || eventId == "10051") {
    return "teenpatti1day";
  }
  if (eventId == "10012") {
    return "teen1oneday";
  }
  if (eventId == "10013") {
    return "teen1t20";
  }
  if (eventId == "10020") {
    return "muflis";
  }
  if (eventId == "10018") {
    return "teenpattitest";
  }
};
