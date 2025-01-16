import { useParams } from "react-router-dom";
import { useGetSingleDiamond } from "../../hooks/event";
import AntMedia from "./AntMedia";
import RightSidebar from "./RightSidebar";
import RecentWinner from "./RecentWinner";
import ActionButtons from "./ActionButtons";
import Timer from "./Timer";
import Header from "./Header";
import LuckySevenA from "../../components/modules/Diamond/LuckySevenA/LuckySevenA";
import AmarAkbarAnthony from "../../components/modules/Diamond/AmarAkbarAnthony/AmarAkbarAnthony";
import { diamondTableClass } from "../../utils/diamondTableClass";
import BollywoodCasino from "../../components/modules/Diamond/BollywoodCasino/BollywoodCasino";
import DragonTiger2020 from "../../components/modules/Diamond/DragonTiger2020/DragonTiger2020";
import { useEffect } from "react";
import DTL2020 from "../../components/modules/Diamond/DTL2020/DTL2020";
import DTOneDay from "../../components/modules/Diamond/DTOneDay/DTOneDay";
import InstantTeenPatti from "../../components/modules/Diamond/InstantTeenPatti/InstantTeenPatti";
import Card from "./Card";
import OneCardOneDay from "../../components/modules/Diamond/OneCardOneDay/OneCardOneDay";
import OneCard2020 from "../../components/modules/Diamond/OneCard2020/OneCard2020";
import MaflisTeenPatti from "../../components/modules/Diamond/MaflisTeenPatti/MaflisTeenPatti";
import TeenPattiTest from "../../components/modules/Diamond/TeenPattiTest/TeenPattiTest";
import TeenPatti2020 from "../../components/modules/Diamond/TeenPatti2020/TeenPatti2020";

const OurCasino = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { eventId, eventTypeId } = useParams();
  const { data } = useGetSingleDiamond(eventTypeId, eventId);
  console.log({ data });
  if (!data || data?.length === 0) {
    return null;
  }

  return (
    <div data-v-b00d14ae="" className="page-content">
      <div data-v-b00d14ae="">
        <div data-v-b00d14ae="" className="p-1">
          <div data-v-b00d14ae className="detail-page-container">
            <div className="center-main-container">
              <div className="center-content">
                <div className="casino-container">
                  <div className={`casino-table ${diamondTableClass(eventId)}`}>
                    <div className="casino-video">
                      <Header data={data?.[0]} />
                      <div className="video-box-container">
                        <div className="video-box">
                          <AntMedia
                            server={data?.[0]?.server}
                            streamKey={data?.[0]?.streamKey}
                          />
                        </div>
                      </div>{" "}
                      {data?.[0] && <Card data={data} eventId={eventId} />}
                      {data?.[0]?.timer > 0 && (
                        <Timer timer={data?.[0]?.timer} />
                      )}
                      <ActionButtons />
                      <RecentWinner
                        recent_winner={data?.[0]?.recent_winner}
                        eventId={eventId}
                      />
                    </div>

                    {eventId == "10001" ||
                    eventId == "10002" ||
                    eventId === "10003" ? (
                      <LuckySevenA data={data} />
                    ) : null}
                    {eventId == "10004" || eventId == "10005" ? (
                      <AmarAkbarAnthony data={data} />
                    ) : null}
                    {eventId == "10006" || eventId == "10052" ? (
                      <BollywoodCasino data={data} />
                    ) : null}
                    {eventId == "10007" || eventId == "10009" ? (
                      <DragonTiger2020 data={data} />
                    ) : null}
                    {eventId == "10010" && <DTL2020 data={data} />}
                    {eventId == "10008" && <DTOneDay data={data} />}
                    {eventId == "10014" ||
                    eventId == "10015" ||
                    eventId == "10051" ? (
                      <InstantTeenPatti data={data} />
                    ) : null}
                    {eventId == "10012" && <OneCardOneDay data={data} />}
                    {eventId == "10013" && <OneCard2020 data={data} />}
                    {eventId == "10020" && <MaflisTeenPatti data={data} />}
                    {eventId == "10018" && <TeenPattiTest data={data} />}
                    {eventId == "10017" ||
                    eventId == "10041" ||
                    eventId == "10053" ? (
                      <TeenPatti2020 data={data} />
                    ) : null}
                  </div>
                </div>
              </div>
              <RightSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCasino;
