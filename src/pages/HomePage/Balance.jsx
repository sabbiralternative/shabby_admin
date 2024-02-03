import UseBalance from "../../hooks/UseBalance";

const Balance = () => {
  const [balance] = UseBalance()
  return (
    <div className="row row5">
       <div className="col-6 col-md-3">
        <div className="card mini-stats-wid">
          <div className="card-body">
            <p className="text-muted fw-medium">Upper Level Credit Reference</p>
            <h4 
            style={{fontWeight:'500',lineHeight:'3.2rem',fontSize:'1.3rem'}}
            >{balance?.upperLevelCreditReferance}</h4>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="card mini-stats-wid">
          <div className="card-body">
            <p className="text-muted fw-medium">Down level occupy balance</p>
            <h4 
            style={{fontWeight:'500',lineHeight:'3.2rem',fontSize:'1.3rem'}}
            >{balance?.downLevelOccupyBalance}</h4>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="card mini-stats-wid">
          <div className="card-body">
            <p className="text-muted fw-medium">Down level Cred. Reference</p>
            <h4 
            style={{fontWeight:'500',lineHeight:'3.2rem',fontSize:'1.3rem'}}
            >{balance?.downLevelCreditReferance}</h4>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="card mini-stats-wid">
          <div className="card-body">
            <p className="text-muted fw-medium">Total Master Balance</p>
            <h4 
            style={{fontWeight:'500',lineHeight:'3.2rem',fontSize:'1.3rem'}}
            >{balance?.totalMasterBalance}</h4>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="card mini-stats-wid">
          <div className="card-body">
            <p className="text-muted fw-medium">Upper Level</p>
            <h4
              style={{fontWeight:'500',lineHeight:'3.2rem',fontSize:'1.3rem'}}
            >{balance?.upperLevel}</h4>
          </div>
        </div>
      </div> 

      <div className="col-6 col-md-3">
        <div className="card mini-stats-wid">
          <div className="card-body">
            <p className="text-muted fw-medium">Downlevel Profit/Loss</p>
            <h4
              style={{fontWeight:'500',lineHeight:'3.2rem',fontSize:'1.3rem'}}
            >{balance?.downLevelProfitLoss
            }</h4>
          </div>
        </div>
      </div>

      <div className="col-6 col-md-3">
        <div className="card mini-stats-wid">
          <div className="card-body">
            <p className="text-muted fw-medium">Available Balance</p>
            <h4
              style={{fontWeight:'500',lineHeight:'3.2rem',fontSize:'1.3rem'}}
            >{balance?.availableBalance
            }</h4>
          </div>
        </div>
      </div>

      <div className="col-6 col-md-3">
        <div className="card mini-stats-wid">
          <div className="card-body">
            <p className="text-muted fw-medium">Available Balance with P/L</p>
            <h4
              style={{fontWeight:'500',lineHeight:'3.2rem',fontSize:'1.3rem'}}
            >{balance?.availableBalanceWithProfitLoss
            }</h4>
          </div>
        </div>
      </div>


      {/* <div className="col-6 col-md-3">
        <div className="card mini-stats-wid">
          <div className="card-body">
            <p className="text-muted fw-medium">Balance</p>
            <h4 
            style={{fontWeight:'500',lineHeight:'3.2rem',fontSize:'1.3rem'}}
            >{balance?.balance}</h4>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="card mini-stats-wid">
          <div className="card-body">
            <p className="text-muted fw-medium">Exposure</p>
            <h4
              style={{fontWeight:'500',lineHeight:'3.2rem',fontSize:'1.3rem'}}
            >{balance?.exposure
            }</h4>
          </div>
        </div>
      </div>
       <div className="col-6 col-md-3">
        <div className="card mini-stats-wid">
          <div className="card-body">
            <p className="text-muted fw-medium">Credit Pts</p>
            <h4
              style={{fontWeight:'500',lineHeight:'3.2rem',fontSize:'1.3rem'}}
            >{balance?.creditPts}</h4>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="card mini-stats-wid">
          <div className="card-body">
            <p className="text-muted fw-medium">All Pts</p>
            <h4
              style={{fontWeight:'500',lineHeight:'3.2rem',fontSize:'1.3rem'}}
            >{balance?.allPts}</h4>
          </div>
        </div>
      </div> 
     
      <div className="col-6 col-md-3">
        <div className="card mini-stats-wid">
          <div className="card-body">
            <p className="text-muted fw-medium">Settlement Pts</p>
            <h4
              style={{fontWeight:'500',lineHeight:'3.2rem',fontSize:'1.3rem'}}
            >{balance?.settlementPts}</h4>
          </div>
        </div>
      </div>
      
      <div className="col-6 col-md-3">
        <div className="card mini-stats-wid">
          <div className="card-body">
            <p className="text-muted fw-medium">Down Pts</p>
            <h4
              style={{fontWeight:'500',lineHeight:'3.2rem',fontSize:'1.3rem'}}
            >{balance?.downPts
            }</h4>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Balance;
