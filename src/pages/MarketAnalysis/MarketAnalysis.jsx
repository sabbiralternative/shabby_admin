import { config } from "../../utils/config";
import axios from "axios";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
const MarketAnalysis = () => {
  const marketAnalysisApi = config?.result?.endpoint?.marketAnalysis;
  const token = localStorage.getItem("adminToken");
  const [loading, setLoading] = useState(false);

  const { data: marketAnalysisData, refetch: refetchMarketAnalysis } = useQuery(
    {
      queryKey: ["marketAnalysis"],
      queryFn: async () => {
        const res = await axios.get(marketAnalysisApi, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = res.data;
        if (data?.success) {
          return data?.result;
        }
      },
    }
  );

  const refetchMarketAnalysisData = () => {
    setLoading(true);
    refetchMarketAnalysis();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div data-v-b00d14ae="" className="page-content">
      <div data-v-b00d14ae="">
        <div data-v-b00d14ae="" className="market-analysis">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0 font-size-18">
                  Market Analysis
                  <a
                    onClick={refetchMarketAnalysisData}
                    title="Refresh Data"
                    className="text-dark pl-2"
                    style={{ cursor: "pointer" }}
                  >
                    <i className={`fa fa-sync ${loading ? "fa-spin" : ""}`}></i>
                  </a>
                </h4>
                <div className="page-title-right">
                  <input
                    type="text"
                    name="searchMarktetText"
                    placeholder="Search Event"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>

          {marketAnalysisData?.length > 0 &&
            marketAnalysisData?.map((data, i) => {
              return (
                <div key={i} className="market-analysis-container">
                  <div className="market-analysis-container">
                    <div className="market-analysis-title">
                      <div>
                        <Link
                          to={`/game-details/${data?.eventTypeId}/${data?.eventId}`}
                          className="ma-link"
                        >
                          {data?.eventName}
                        </Link>
                      </div>
                      <div>{data?.eventDate}</div>
                    </div>
                    <div className="market-analysis-content">
                      <div className="row row5">
                        <div className="col-lg-4">
                          <div>
                            <div
                              className="simplebar-wrapper"
                              style={{ margin: "0px" }}
                            >
                              <div style={{ right: "0px", bottom: "0px" }}>
                                <div
                                  className="simplebar-content-wrapper"
                                  tabIndex="0"
                                  role="region"
                                  aria-label="scrollable content"
                                  style={{ height: "auto", overflow: "hidden" }}
                                >
                                  <div
                                    className="simplebar-content"
                                    style={{ padding: "0px" }}
                                  >
                                    <table className="table">
                                      <tbody>
                                        {data?.markets?.map(
                                          ({ marketName, amount }, i) => {
                                            return (
                                              <tr key={i}>
                                                <td>{marketName}</td>
                                                <td className="text-right">
                                                  {amount}
                                                </td>
                                              </tr>
                                            );
                                          }
                                        )}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MarketAnalysis;
