import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API, settings } from "../utils";


const useQRCODE = (secret) => {

  const token = localStorage.getItem("adminToken");
  const adminName = localStorage.getItem("adminName");

  const { data: qrCodeAndKey,refetch:refetchQrCodeAndKey } = useQuery({
    queryKey: ["qrCode"],
    queryFn: async () => {
      const res = await axios.post(
        API.qrCode,
        {
          secret: secret,
          username: adminName,
          site: settings.siteUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data;
      return data;
    },
  });
  return { qrCodeAndKey,refetchQrCodeAndKey };
};

export default useQRCODE;
