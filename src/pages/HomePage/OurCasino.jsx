import { useEffect, useState } from "react";
import { config } from "../../utils/config";
import axios from "axios";
import { Link } from "react-router-dom";
import { token } from "../../utils/localStorage";
import UseContextState from "../../hooks/UseContextState";

const OurCasino = () => {
  const isCasino = config?.result?.settings.casino;
  const auraCasinoApi = config?.result?.endpoint?.auraCasino;
  const diamondCasinoApi = config?.result?.endpoint?.diamondCasino;
  const [casino_list, setCasino_list] = useState([]);
  const {generatedToken} = UseContextState()

  useEffect(() => {
    const getAuraCasino = async () => {
      const res = await axios.post(
        `${isCasino == "aura" ? auraCasinoApi : ""} ${
          isCasino == "diamond" ? diamondCasinoApi : ""
        }`,{  token:generatedToken},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data;
      setCasino_list(data);
    };
    getAuraCasino();
  }, [auraCasinoApi, diamondCasinoApi, isCasino]);
  return (
    <div className="row">
      <div className="col-12">
        <h4 className="sport-list-title pl-2">Our Live Casino</h4>
        <div>
          <div className="casino-banners">
            {casino_list?.map((casino, idx) => {
              return (
                <div key={idx} className="casino-banner-item">
                  <Link className="">
                    <img className="img-fluid" src={casino?.image} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCasino;
