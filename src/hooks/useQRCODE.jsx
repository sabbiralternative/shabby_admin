import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { config } from "../utils/config";

const useQRCODE = (secret) => {
  const qrCodeApi = config?.result?.endpoint?.qrCode;
  const token = localStorage.getItem("adminToken");
  const adminName = localStorage.getItem("adminName");
  const siteName = config?.result?.settings?.siteUrl;
  const { data: qrCodeAndKey } = useQuery({
    queryKey: ["qrCode"],
    queryFn: async () => {
      const res = await axios.post(
        qrCodeApi,
        {
          secret: secret,
          username: adminName,
          site: siteName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data;
      console.log(data);
      return data;
    },
  });
  return { qrCodeAndKey };
};

export default useQRCODE;
