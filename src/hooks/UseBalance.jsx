import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import UseTokenGenerator from "./UseTokenGenerator";
import UseEncryptData from "./UseEncryptData";
import { API } from "../utils";

const UseBalance = () => {
  const token = localStorage.getItem("adminToken");
  const { data: balance, refetch: refetchBalance } = useQuery({
    queryKey: ["balance"],
    queryFn: async () => {
      const generatedToken = UseTokenGenerator();
      const encryptedData = UseEncryptData({ token: generatedToken });
      const res = await axios.post(API.balance, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data?.result;
      return data;
    },
  });
  return [balance, refetchBalance];
};

export default UseBalance;
