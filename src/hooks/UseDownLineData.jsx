import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import UseTokenGenerator from "./UseTokenGenerator";
import UseEncryptData from "./UseEncryptData";
import { API } from "../utils";

const UseDownLineData = () => {
  const token = localStorage.getItem("adminToken");
  const [searchUser, setSearchUser] = useState("");
 
  const { data = [], refetch: refetchDownLine } = useQuery({
    queryKey: ["downLineData"],
    queryFn: async () => {
      const generatedToken = UseTokenGenerator()
      const encryptedData = UseEncryptData( {
        downlineId: "",
        searchId: searchUser,
        token:generatedToken
      })
      const res = await axios.post(
        API.downline,encryptedData
       ,
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
