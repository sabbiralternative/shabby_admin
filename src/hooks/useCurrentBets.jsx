import { useQuery } from "@tanstack/react-query";
import UseTokenGenerator from "./UseTokenGenerator";
import UseEncryptData from "./UseEncryptData";
import axios from "axios";
import { API } from "../utils";


const useCurrentBets = (eventId) => {
  const token = localStorage.getItem("adminToken");
  const { data: myBets, refetch: refetchCurrentBets } = useQuery({
    queryKey: ["currentBets"],
    queryFn: async () => {
      const generatedToken = UseTokenGenerator();
      const encryptedData = UseEncryptData({
        type: eventId,
        token: generatedToken,
      });
      const res = await axios.post(`${API.currentBets}`, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res?.data?.result;

      return data;
    },
    refetchInterval: 7000,
  });
  return { myBets, refetchCurrentBets };
};

export default useCurrentBets;
