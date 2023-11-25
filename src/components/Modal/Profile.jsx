const Profile = ({ profileData }) => {
  return (
    <div
      className="tab-content text-muted"
      id="__BVID__2237__BV_tab_container_"
    >
      <div
        role="tabpanel"
        aria-hidden="false"
        className="tab-pane active"
        id="__BVID__2238"
        aria-labelledby="__BVID__2238___BV_tab_button__"
      >
        <div className="row">
          <div className="col-xl-6">
            <div className="card text-center">
              <div className="card-body p-2">
                <div className="avatar-sm mx-auto mb-1">
                  <span className="avatar-title rounded-circle bg-soft-primary text-primary font-size-16 text-uppercase">
                    a
                  </span>
                </div>
                <h5 className="font-size-15">
                  <a className="text-dark">{profileData?.userName}</a>
                </h5>
                <p className="text-muted mb-1">333333</p>
              </div>
              <div className="card-footer bg-transparent border-top">
                <div className="contact-links d-flex font-size-20">
                  <div className="flex-fill">
                    <a title={profileData?.mobile}>
                      <i className="bx bx-phone-call"></i>
                    </a>
                  </div>
                  <div className="flex-fill">
                    <a title={profileData?.city}>
                      <i className="bx bxs-city"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card personalinfo-card">
              <div className="card-body">
                <h4 className="card-title mb-4">Partnership Information</h4>
                <div className="table-responsive mb-0">
                  <table className="table">
                    <tbody>
                      {/* <!---->
                      <!---->
                      <!---->
                      <!----> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title mb-4">Additional Information</h4>
                <div className="table-responsive mb-0">
                  <table className="table">
                    <tbody>
                      <tr>
                        <th scope="row" className="br-0">
                          User Name:
                        </th>
                        <td className="br-0">{profileData?.userName}</td>
                      </tr>
                      <tr>
                        <th scope="row" className="br-0">
                          Full Name:
                        </th>
                        <td className="br-0">{profileData?.fullName}</td>
                      </tr>
                      <tr>
                        <th scope="row" className="br-0">
                          Mobile Number:
                        </th>
                        <td className="br-0">{profileData?.mobile}</td>
                      </tr>
                      <tr>
                        <th scope="row" className="br-0">
                          City:
                        </th>
                        <td className="br-0">{profileData?.city}</td>
                      </tr>
                      <tr>
                        <th scope="row" className="br-0">
                          Credit Pts:
                        </th>
                        <td className="br-0">{profileData?.creditPts}</td>
                      </tr>
                      <tr>
                        <th scope="row" className="br-0">
                          Pts:
                        </th>
                        <td className="br-0">
                          <span>{profileData?.pts}</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="br-0">
                          Client P/L:
                        </th>
                        <td className="br-0">{profileData?.clientPL}</td>
                      </tr>
                      <tr>
                        <th scope="row" className="br-0">
                          Exposure:
                        </th>
                        <td className="br-0">{profileData?.exposure}</td>
                      </tr>
                      <tr>
                        <th scope="row" className="br-0">
                          Casino Pts:
                        </th>
                        <td className="br-0">{profileData?.casinoPts}</td>
                      </tr>
                      <tr>
                        <th scope="row" className="br-0">
                          Sports Pts:
                        </th>
                        <td className="br-0">{profileData?.sportPts}</td>
                      </tr>
                      <tr>
                        <th scope="row" className="br-0">
                          Third Party Pts:
                        </th>
                        <td className="br-0">{profileData?.thirdpartyPts}</td>
                      </tr>
                      <tr>
                        <th scope="row" className="br-0">
                          Created Date :
                        </th>
                        <td className="br-0">
                          <span>{profileData?.createdDate}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
