import { useEffect, useState } from "react";
import { config } from "../../utils/config";
import axios from "axios";

const Balance = () => {
  const balanceApi = config?.result?.endpoint?.balance;
  const token = localStorage.getItem("token");
  const [balance, setBalance] = useState({});

  useEffect(() => {
    const getBalanceData = async () => {
      const res = await axios.get(balanceApi, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data;
      setBalance(data?.result);
    };
    getBalanceData();
  }, [balanceApi,token]);

  return (
    <div className="row row5">
      <div className="col-6 col-md-3">
        <div className="card mini-stats-wid">
          <div className="card-body">
            <p className="text-muted fw-medium">Upper Level Credit Referance</p>
            <h4>{balance?.upperLevelCreditReferance}</h4>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="card mini-stats-wid">
          <div className="card-body">
            <p className="text-muted fw-medium">Down level Occupy Balance</p>
            <h4>{balance?.downLevelOccupyBalance}</h4>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="card mini-stats-wid">
          <div className="card-body">
            <p className="text-muted fw-medium">Down Level Credit Referance</p>
            <h4>{balance?.downLevelCreditReferance}</h4>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="card mini-stats-wid">
          <div className="card-body">
            <p className="text-muted fw-medium">Total Master Balance</p>
            <h4>{balance?.totalMasterBalance}</h4>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="card mini-stats-wid">
          <div className="card-body">
            <p className="text-muted fw-medium">Upper Level</p>
            <h4>{balance?.getUpperLevel}</h4>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="card mini-stats-wid">
          <div className="card-body">
            <p className="text-muted fw-medium">Down Level Profit/Loss</p>
            <h4>{balance?.getDownLevelProfitLoss}</h4>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="card mini-stats-wid">
          <div className="card-body">
            <p className="text-muted fw-medium">Available Balance</p>
            <h4>{balance?.getAvailableBalance}</h4>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="card mini-stats-wid">
          <div className="card-body">
            <p className="text-muted fw-medium">
              Available Balance With Profit/Loss
            </p>
            <h4>{balance?.getAvailableBalanceWithProfitLoss}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
