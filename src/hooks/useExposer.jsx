import { useQuery } from "@tanstack/react-query";

import UseTokenGenerator from "./UseTokenGenerator";
import UseEncryptData from "./UseEncryptData";
import axios from "axios";
import { config } from "../utils/config";

/* exposure api */
const useExposer = (eventId) => {
  const adminExposer = config?.result?.endpoint?.adminExposure;
  const adminToken = localStorage.getItem("adminToken");

  const { data: exposer = [], refetch: refetchExposure } = useQuery({
    queryKey: ["exposure"],

    queryFn: async () => {
      const generatedToken = UseTokenGenerator();
      const encryptedData = UseEncryptData(generatedToken);
      const res = await axios.post(
        `${adminExposer}/${eventId}`,
        encryptedData,
        {
          headers: {
            Authorization: `Bearer ${adminToken}`,
          },
        }
      );
      const data = res.data;
      console.log(data);
      if (data.success) {
        return data.result;
      }
    },
  });
  return { exposer, refetchExposure };
};

export default useExposer;
