import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { config } from "../utils/config";

const UseBalance = () => {
  const balanceApi = config?.result?.endpoint?.balance;
  const token = localStorage.getItem("token");
  const { data: balance, refetch: refetchBalance } = useQuery({
    queryKey: ["balance"],
    queryFn: async () => {
      const res = await axios.get(balanceApi, {
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
