import { useEffect, useState } from "react";
import { config } from "../utils/config";
import axios from "axios";
import UseTokenGenerator from "./UseTokenGenerator";
import UseEncryptData from "./UseEncryptData";

const UseSearchUser = () => {
  const [searchUser, setSearchUser] = useState("");
  const searchUserApi = config?.result?.endpoint?.searchUser;
  const token = localStorage.getItem("adminToken");
  const [users, setUsers] = useState([]);
  const [errSearchId, setErrSearchId] = useState("");
  const [showSearchId, setShowSearchId] = useState(false);

  useEffect(() => {
    const handleSearchUser = async () => {
      if (searchUser?.length > 2) {
        const generatedToken = UseTokenGenerator();
        const encryptedData = UseEncryptData({
          type: searchUser,
          token: generatedToken,
        });
        const res = await axios.post(searchUserApi, encryptedData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = res.data;
        if (data?.success) {
          setUsers(data);
          console.log(data);
          setShowSearchId(true);
        } else {
          setErrSearchId(
            "No elements found Consider changing the search query"
          );
        }
      }
    };
    handleSearchUser();
  }, [searchUser, searchUserApi, token]);

  return {
    users,
    setUsers,
    errSearchId,
    setErrSearchId,
    showSearchId,
    setShowSearchId,
    searchUser,
    setSearchUser,
  };
};

export default UseSearchUser;
