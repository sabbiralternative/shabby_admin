import { useEffect, useState } from "react";
import { config } from "../utils/config";
import axios from "axios";

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
        const res = await axios.post(
          searchUserApi,
          {
            type: searchUser,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
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
