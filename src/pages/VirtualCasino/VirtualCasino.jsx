import { useEffect, useState } from "react";
import axios from "axios";
import { config } from "../../utils/config";
import UseContextState from "../../hooks/UseContextState";

const VirtualCasino = () => {
  const virtualGamesApi = config?.result?.endpoint?.virtualCasino;
  const token = localStorage.getItem("adminToken");
  const [virtualGames, setVirtualGames] = useState([]);
  const {generatedToken} = UseContextState()

  useEffect(() => {
    const getVirtualGames = async () => {
      const res = await axios.post(virtualGamesApi, {
        token:generatedToken
      },{
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = res.data;
      setVirtualGames(data);
    };
    getVirtualGames();
  }, [token, virtualGamesApi]);
  return (
    <div data-v-b00d14ae="" className="page-content">
      {/*       <!----> */}
      <div data-v-b00d14ae="">
        <div data-v-b00d14ae="">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0 font-size-18">Virtual Casino</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <a href="/admin/home" className="" target="_self">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active">
                      <span aria-current="location">Virtual Casino</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="casino-banners">
              {virtualGames?.map((virtualGame, i) => {
                return (
                  <div key={i} className="casino-banner-item">
                    <a
                      // to={`/our-virtual/${virtualGame?.eventId}/${virtualGame?.eventTypeId}`}
                      className=""
                    >
                      <img className="img-fluid" src={virtualGame?.image} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualCasino;
