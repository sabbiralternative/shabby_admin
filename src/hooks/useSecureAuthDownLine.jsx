import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { config } from "../utils/config";
import UseTokenGenerator from "./UseTokenGenerator";
import UseEncryptData from "./UseEncryptData";

const useSecureAuthDownLine = () => {
  const downLineEditFormApi = config?.result?.endpoint?.downLineEditForm;
  const token = localStorage.getItem("adminToken");
  const { data: secretSecureAuth } = useQuery({
    queryKey: ["secureAuth"],
    queryFn: async () => {
      const generatedToken = UseTokenGenerator();
      const encryptedData = UseEncryptData({
        type: "secureAuth",
        token: generatedToken,
      });
      const res = await axios.post(downLineEditFormApi, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data;
      return data;
    },
  });
  return { secretSecureAuth };
};

export default useSecureAuthDownLine;
