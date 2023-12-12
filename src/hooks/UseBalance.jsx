import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { config } from "../utils/config";
import UseContextState from "./UseContextState";

const UseBalance = () => {
  const balanceApi = config?.result?.endpoint?.balance;
  const {generatedToken} = UseContextState()
  const token = localStorage.getItem("adminToken");
  const { data: balance, refetch: refetchBalance } = useQuery({
    queryKey: ["balance"],
    queryFn: async () => {
      const res = await axios.post(balanceApi,{  token:generatedToken}, {
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
