import { useEffect, useState } from "react";
import axios from "axios";
import UseTokenGenerator from "./UseTokenGenerator";
import UseEncryptData from "./UseEncryptData";
import { API } from "../utils";

const UseSearchUser = () => {
  const [searchUser, setSearchUser] = useState("");
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
        const res = await axios.post(API.searchUser, encryptedData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = res.data;
        if (data?.success) {
          setUsers(data);
      
          setShowSearchId(true);
        } else {
          setErrSearchId(
            "No elements found Consider changing the search query"
          );
        }
      }
    };
    handleSearchUser();
  }, [searchUser, token]);

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
