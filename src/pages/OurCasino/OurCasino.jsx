import { useParams } from "react-router-dom";
import { useGetSingleDiamond } from "../../hooks/event";
import AntMedia from "./AntMedia";
import RightSidebar from "./RightSidebar";
import RecentWinner from "./RecentWinner";
import ActionButtons from "./ActionButtons";
import Timer from "./Timer";
import VideoLeftIcon from "./VideoLeftIcon";
import Header from "./Header";
import LuckySevenA from "../../components/modules/Diamond/LuckySevenA/LuckySevenA";
import AmarAkbarAnthony from "../../components/modules/Diamond/AmarAkbarAnthony/AmarAkbarAnthony";
import { diamondTableClass } from "../../utils/diamondTableClass";
import BollywoodCasino from "../../components/modules/Diamond/BollywoodCasino/BollywoodCasino";

const OurCasino = () => {
  const { eventId, eventTypeId } = useParams();
  const { data } = useGetSingleDiamond(eventTypeId, eventId);

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
                      <VideoLeftIcon data={data} />
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
