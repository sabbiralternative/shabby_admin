import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../utils";

export const useGetSingleDiamond = (eventTypeId, eventId) => {
  return useQuery({
    queryKey: [""],
    queryFn: async () => {
      const { data } = await axios.get(`${API.odds}/${eventTypeId}/${eventId}`);
      return data?.result;
    },
    refetchInterval: 1000,
  });
};
