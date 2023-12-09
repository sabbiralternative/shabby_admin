import UseBalance from "../../hooks/UseBalance";

const Balance = () => {
  const [balance] = UseBalance()
  return (
    <div className="row row5">
      <div className="col-6 col-md-3">
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
      {/* <div className="col-6 col-md-3">
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
      </div> */}
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
            <p className="text-muted fw-medium">Upper Pts</p>
            <h4
              style={{fontWeight:'500',lineHeight:'3.2rem',fontSize:'1.3rem'}}
            >{balance?.upperPts
            }</h4>
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
      </div>
    </div>
  );
};

export default Balance;
