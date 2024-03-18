import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UseTokenGenerator from "./UseTokenGenerator";
import UseEncryptData from "./UseEncryptData";
import { config } from "../utils/config";

/* Iframe  api  */
const useIFrame = (eventTypeId, eventId, hasVideo) => {
  const accessTokenApi = config?.result?.endpoint?.accessToken;
  const token = localStorage.getItem("adminToken");
  const { data: iFrameUrl } = useQuery({
    queryKey: ["iframeVideo"],
    /* match odds hasvideo = true then enable */
    enabled: hasVideo,
    queryFn: async () => {
      const generatedToken = UseTokenGenerator();
      const encryptedVideoData = UseEncryptData({
        eventTypeId: eventTypeId,
        eventId: eventId,
        type: "video",
        token: generatedToken,
      });
      const res = await axios.post(accessTokenApi, encryptedVideoData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res?.data;

      if (data?.success) {
        return data?.result;
      }
    },
  });
  return { iFrameUrl };
};

export default useIFrame;
