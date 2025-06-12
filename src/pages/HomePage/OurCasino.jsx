import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";
import { API, settings } from "../../utils";

const OurCasino = () => {
  const [casino_list, setCasino_list] = useState([]);

  useEffect(() => {
    const getAuraCasino = async () => {
      if (settings.casino === "aura" || settings.casino === "diamond") {
        const generatedToken = UseTokenGenerator();
        const encryptedData = UseEncryptData({ token: generatedToken });
        const res = await axios.post(
          `${settings.casino == "aura" ? API.auraCasino : ""} ${
            settings.casino == "diamond" ? API.diamondCasino : ""
          }`,
          encryptedData
        );
        const data = res.data;
        setCasino_list(data);
      }
    };
    getAuraCasino();
  }, []);

  return (
    <div className="row">
      <div className="col-12">
        <h4 className="sport-list-title pl-2">Our Live Casino</h4>
        <div>
          <div className="casino-banners">
            {casino_list?.length > 0 &&
              casino_list?.map((casino, idx) => {
                return (
                  <div key={idx} className="casino-banner-item">
                    <Link
                      to={`/our-casino/${casino?.eventId}/${casino?.eventTypeId}`}
                    >
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
