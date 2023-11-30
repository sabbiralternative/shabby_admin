import { Link } from "react-router-dom";

const SecureAuth = () => {
  return (
    <div data-v-b00d14ae="" className="page-content">
      <div data-v-b00d14ae="">
        <div data-v-b00d14ae="" className="security-auth">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0 font-size-18">Secure Auth Verification</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to="/" className="" target="_self">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">
                      <span aria-current="location">Secure Auth</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card-body">
              <div className="text-center">
                <b>Secure Auth Verification Status:</b>
                <span className="badge badge-danger">Disabled</span>
              </div>
              <div className="mt-2 text-center">
                Please select below option to enable secure auth verification
              </div>
              <div className="casino-report-tabs mt-3">
                <ul className="nav nav-tabs">
                  <li className="nav-item pointer">
                    <a className="nav-link">Enable Using Mobile App</a>
                  </li>
                  <li className="nav-item pointer">
                    <a className="nav-link">Enable Using Telegram</a>
                  </li>
                </ul>
              </div>
              <div className="tab-content mt-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecureAuth;
