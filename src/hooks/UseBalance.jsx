import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { config } from "../utils/config";
import UseTokenGenerator from "./UseTokenGenerator";
import UseEncryptData from "./UseEncryptData";

const UseBalance = () => {
  const balanceApi = config?.result?.endpoint?.balance;
  const token = localStorage.getItem("adminToken");
  const { data: balance, refetch: refetchBalance } = useQuery({
    queryKey: ["balance"],
    queryFn: async () => {
      const generatedToken = UseTokenGenerator();
      const encryptedData = UseEncryptData({ token: generatedToken });
      const res = await axios.post(balanceApi, encryptedData, {
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
