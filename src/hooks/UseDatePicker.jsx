import moment from "moment/moment";
import { useState } from "react";
const UseDatePicker = () => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(new Date().setDate(new Date().getDate() - 7)),
    endDate: new Date(),
  });

  const onChange = (dates) => {
    setDateRange((prevState) => ({
      ...prevState,
      startDate: dates[0],
      endDate: dates[1],
    }));
  };

  const fromDate = moment(dateRange?.startDate).format("YYYY-MM-DD");
  const toDate = moment(dateRange?.endDate).format("YYYY-MM-DD");

  const formattedStartDate = fromDate.split("-").reverse().join("-");
  const formattedEndDate = toDate.split("-").reverse().join("-");

  return {
    onChange,
    formattedStartDate,
    formattedEndDate,
    dateRange,
    setDateRange,
  };
};

export default UseDatePicker;
