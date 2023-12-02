import { useQuery } from "@tanstack/react-query";
import { config } from "../utils/config";
import axios from "axios";
import { useState } from "react";

const UseDownLineData = () => {
  const downLineApi = config?.result?.endpoint?.downline;
  const token = localStorage.getItem("adminToken");
  const [searchUser, setSearchUser] = useState("");
  const { data = [], refetch: refetchDownLine } = useQuery({
    queryKey: ["downLineData"],
    queryFn: async () => {
      const res = await axios.post(
        downLineApi,
        {
          downlineId: "",
          searchId: searchUser,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = res?.data?.result;
      return data;
    },
  });

  return [data, refetchDownLine, setSearchUser, searchUser];
};

export default UseDownLineData;
