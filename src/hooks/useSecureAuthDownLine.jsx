import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import UseTokenGenerator from "./UseTokenGenerator";
import UseEncryptData from "./UseEncryptData";
import { API } from "../utils";

const useSecureAuthDownLine = () => {

  const token = localStorage.getItem("adminToken");
  const { data: secretSecureAuth } = useQuery({
    queryKey: ["secureAuth"],
    queryFn: async () => {
      const generatedToken = UseTokenGenerator();
      const encryptedData = UseEncryptData({
        type: "secureAuth",
        token: generatedToken,
      });
      const res = await axios.post(API.downLineEditForm, encryptedData, {
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
