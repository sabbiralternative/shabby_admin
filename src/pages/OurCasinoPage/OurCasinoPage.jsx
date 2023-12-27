import { useEffect, useState } from "react";
import { config } from "../../utils/config";
import axios from "axios";
import { Link } from "react-router-dom";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";

const OurCasinoPage = () => {
  const diamondCasinoUrl = config?.result?.endpoint?.diamondCasino;
  const auraCasinoApi = config?.result?.endpoint?.auraCasino;
  const casinoType = config?.result?.settings?.casino;
  const token = localStorage.getItem("adminToken");
  const [data, setData] = useState([]);
  const [casino_list, setCasino_list] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterGames, setFilterGames] = useState("all");


  useEffect(() => {
    const getAuraCasino = async () => {
      const generatedToken = UseTokenGenerator();
      const encryptedData = UseEncryptData({  token:generatedToken});
      const res = await axios.get(
        `${casinoType == "aura" ? auraCasinoApi : ""} ${
          casinoType == "diamond" ? diamondCasinoUrl : ""
        }`,encryptedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data;
      const sort = data.sort((Link, b) => Link.sort - b.sort);
      setData(sort);
      setCasino_list(sort);
    };
    getAuraCasino();
  }, [diamondCasinoUrl, auraCasinoApi, casinoType, token, filterGames]);

  useEffect(() => {
    const categories = Array.from(new Set(data.map((item) => item.category)));

    setCategories(categories);
  }, [data]);

  useEffect(() => {
    if (filterGames == "all") {
      setCasino_list(data);
    } else {
      setCasino_list(data.filter((game) => game.category === filterGames));
    }
  }, [data, filterGames]);

  return (
    <div data-v-b00d14ae="" className="page-content">
      <div data-v-b00d14ae="">
        <div data-v-b00d14ae="">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0 font-size-18">Our Casino</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <a href="/admin/home" className="" target="_self">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active">
                      <span aria-current="location">Our Casino</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="casino-tabs-admin p-2">
              <div className="casino-tabs-menu w-100">
                <a href="javascript:void(0)" className="arrow-tabs arrow-left">
                  <i className="mdi mdi-chevron-left"></i>
                </a>
                <ul className="nav nav-tabs nav-tabs-custom">
                  <li
                    onClick={() => setFilterGames("all")}
                    className={`nav-item `}
                  >
                    <Link
                      className={`nav-link ${
                        filterGames == "all" ? "active" : ""
                      }`}
                    >
                      All Casino
                    </Link>
                  </li>

                  {categories?.sort().map((category, i) => {
                    return (
                      <li
                        onClick={() => setFilterGames(category)}
                        key={i}
                        className="nav-item"
                      >
                        <Link
                          className={`nav-link ${
                            filterGames == category ? "active" : ""
                          }`}
                        >
                          {category}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <a href="javascript:void(0)" className="arrow-tabs arrow-right">
                  <i className="mdi mdi-chevron-right"></i>
                </a>
              </div>
            </div>

            {casinoType == "diamond" && (
              <div className="casino-banners">
                {casino_list.map((casino, i) => {
                  return (
                    <div key={i} className="casino-banner-item">
                      <Link className="">
                        <img className="img-fluid" src={casino.image} />
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}

            {casinoType == "aura" && (
              <div className="casino-banners">
                {casino_list.map((casino, i) => {
                  return (
                    <div key={i} className="casino-banner-item">
                      <Link className="">
                        <img className="img-fluid" src={casino.image} />
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCasinoPage;
