import assets from "../../assets";

const Card = ({ data, eventId }) => {
  console.log(data);
  return (
    <>
      {eventId == "10001" ||
      eventId == "10002" ||
      eventId === "10003" ||
      eventId == "10004" ||
      eventId == "10005" ||
      eventId == "10006" ||
      eventId == "10052" ? (
        <div
          className={`casino-video-cards ${
            data?.[0]?.indexCard?.length === 0 ? "hide-cards" : ""
          } `}
        >
          <div className="casino-cards-shuffle">
            <i className="fas fa-grip-lines-vertical" />
          </div>{" "}
          <div className="casino-video-cards-container">
            <div>
              <span data-v-79776e43>
                {data?.[0]?.indexCard?.length === 0 ? (
                  <img data-v-79776e43 src={assets.one} />
                ) : (
                  <img
                    data-v-79776e43
                    src={`/src/assets/cards/${data?.[0]?.indexCard[0]}.jpg`}
                  />
                )}
              </span>
            </div>
          </div>
        </div>
      ) : null}
      {eventId == "10007" ||
      eventId == "10009" ||
      eventId == "10010" ||
      eventId == "10008" ? (
        <div
          className={`casino-video-cards 
        
          ${
            data?.[0]?.runners?.[0]?.card?.length === 0 &&
            data[0]?.runners?.[1]?.card?.length === 0
              ? "hide-cards"
              : ""
          }
        `}
        >
          <div className="casino-cards-shuffle">
            <i className="fas fa-grip-lines-vertical"></i>
          </div>
          <div className="casino-video-cards-container">
            <div>
              <span data-v-79776e43="">
                {data?.[0]?.runners?.[0]?.card?.length === 0 ? (
                  <img data-v-79776e43 src={assets.one} />
                ) : (
                  <img
                    data-v-79776e43
                    src={`/src/assets/cards/${data?.[0]?.runners[0]?.card?.[0]}.jpg`}
                  />
                )}
              </span>{" "}
              <span data-v-79776e43="">
                {data[0]?.runners?.[1]?.card?.length === 0 ? (
                  <img data-v-79776e43 src={assets.one} />
                ) : (
                  <img
                    data-v-79776e43
                    src={`/src/assets/cards/${data?.[0]?.runners[1]?.card?.[0]}.jpg`}
                  />
                )}
              </span>
            </div>
          </div>
        </div>
      ) : null}
      {eventId == "10014" ||
      eventId == "10015" ||
      eventId == "10051" ||
      eventId == "10020" ||
      eventId == "10017" ||
      eventId == "10041" ||
      eventId == "10053" ? (
        <div
          className={`casino-video-cards
         ${
           data?.[0]?.runners?.[0]?.card?.length === 0 &&
           data[0]?.runners?.[1]?.card?.length === 0
             ? "hide-cards"
             : ""
         }
        `}
        >
          <div className="casino-cards-shuffle">
            <i className="fas fa-grip-lines-vertical"></i>
          </div>
          <div className="casino-video-cards-container">
            <div>
              <span data-v-79776e43="">
                {data[0]?.runners[0]?.card?.length > 0 ? (
                  <img
                    src={`/src/assets/cards/${data[0]?.runners[0]?.card[0]}.jpg`}
                  />
                ) : (
                  <img data-v-79776e43 src={assets.one} />
                )}
              </span>{" "}
              <span data-v-79776e43="">
                {data[0]?.runners[0]?.card?.length > 1 ? (
                  <img
                    src={`/src/assets/cards/${data[0]?.runners[0]?.card[1]}.jpg`}
                  />
                ) : (
                  <img data-v-79776e43 src={assets.one} />
                )}
              </span>{" "}
              <span data-v-79776e43="">
                {data[0]?.runners[0]?.card?.length > 2 ? (
                  <img
                    src={`/src/assets/cards/${data[0]?.runners[0]?.card[2]}.jpg`}
                  />
                ) : (
                  <img data-v-79776e43 src={assets.one} />
                )}
              </span>
            </div>
            <div>
              <span data-v-79776e43="">
                {data[0]?.runners[1]?.card?.length > 0 ? (
                  <img
                    src={`/src/assets/cards/${data[0]?.runners[1]?.card[0]}.jpg`}
                  />
                ) : (
                  <img data-v-79776e43 src={assets.one} />
                )}
              </span>{" "}
              <span data-v-79776e43="">
                {data[0]?.runners[1]?.card?.length > 1 ? (
                  <img
                    src={`/src/assets/cards/${data[0]?.runners[1]?.card[1]}.jpg`}
                  />
                ) : (
                  <img data-v-79776e43 src={assets.one} />
                )}
              </span>{" "}
              <span data-v-79776e43="">
                {data[0]?.runners[1]?.card?.length > 2 ? (
                  <img
                    src={`/src/assets/cards/${data[0]?.runners[1]?.card[2]}.jpg`}
                  />
                ) : (
                  <img data-v-79776e43 src={assets.one} />
                )}
              </span>
            </div>
          </div>
        </div>
      ) : null}
      {eventId == "10012" || eventId == "10013" ? (
        <div
          className={`casino-video-cards ${
            data[0]?.runners[0]?.card?.length > 0 &&
            data[0]?.runners[1]?.card?.length > 0
              ? "hide-cards"
              : ""
          }`}
        >
          <div className="casino-cards-shuffle">
            <i className="fas fa-grip-lines-vertical"></i>
          </div>
          <div className="casino-video-cards-container">
            <div>
              <div className="dealer-name w-100 mb-1">Player</div>
              <div>
                <span>
                  <span data-v-79776e43="">
                    {data[0]?.runners[0]?.card?.length > 0 ? (
                      <img
                        src={`/src/assets/cards/${data[0]?.runners[0]?.card[0]}.jpg`}
                      />
                    ) : (
                      <img data-v-79776e43 src={assets.one} />
                    )}
                  </span>
                </span>
              </div>
            </div>
            <div>
              <div className="dealer-name w-100 mb-1">Dealer</div>
              <div>
                <span>
                  <span data-v-79776e43="">
                    {data[0]?.runners[1]?.card?.length > 0 ? (
                      <img
                        src={`/src/assets/cards/${data[0]?.runners[1]?.card[0]}.jpg`}
                      />
                    ) : (
                      <img data-v-79776e43 src={assets.one} />
                    )}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {eventId == "10018" && (
        <div
          className={`casino-video-cards
        ${
          data?.[0]?.runners?.[0]?.card?.length === 0 &&
          data[0]?.runners?.[1]?.card?.length === 0 &&
          data[0]?.runners?.[2]?.card?.length === 0
            ? "hide-cards"
            : ""
        }
        `}
        >
          <div className="casino-cards-shuffle">
            <i className="fas fa-grip-lines-vertical"></i>
          </div>
          <div className="casino-video-cards-container">
            <div>
              <div className="dealer-name w-100 mb-1">Tiger</div>
              <span data-v-79776e43="">
                {data[0]?.runners[0]?.card?.length > 0 ? (
                  <img
                    src={`/src/assets/cards/${data[0]?.runners[0]?.card[0]}.jpg`}
                  />
                ) : (
                  <img data-v-79776e43 src={assets.one} />
                )}
              </span>{" "}
              <span data-v-79776e43="">
                {data[0]?.runners[0]?.card?.length > 1 ? (
                  <img
                    src={`/src/assets/cards/${data[0]?.runners[0]?.card[1]}.jpg`}
                  />
                ) : (
                  <img data-v-79776e43 src={assets.one} />
                )}
              </span>{" "}
              <span data-v-79776e43="">
                {data[0]?.runners[0]?.card?.length > 2 ? (
                  <img
                    src={`/src/assets/cards/${data[0]?.runners[0]?.card[2]}.jpg`}
                  />
                ) : (
                  <img data-v-79776e43 src={assets.one} />
                )}
              </span>
            </div>
            <div>
              <div className="dealer-name w-100 mb-1">Lion</div>
              <span data-v-79776e43="">
                {data[0]?.runners[1]?.card?.length > 0 ? (
                  <img
                    src={`/src/assets/cards/${data[0]?.runners[1]?.card[0]}.jpg`}
                  />
                ) : (
                  <img data-v-79776e43 src={assets.one} />
                )}
              </span>{" "}
              <span data-v-79776e43="">
                {data[0]?.runners[1]?.card?.length > 1 ? (
                  <img
                    src={`/src/assets/cards/${data[0]?.runners[1]?.card[1]}.jpg`}
                  />
                ) : (
                  <img data-v-79776e43 src={assets.one} />
                )}
              </span>{" "}
              <span data-v-79776e43="">
                {data[0]?.runners[1]?.card?.length > 2 ? (
                  <img
                    src={`/src/assets/cards/${data[0]?.runners[1]?.card[2]}.jpg`}
                  />
                ) : (
                  <img data-v-79776e43 src={assets.one} />
                )}
              </span>
            </div>
            <div>
              <div className="dealer-name w-100 mb-1">Dragon</div>
              <span data-v-79776e43="">
                {data[0]?.runners[2]?.card?.length > 0 ? (
                  <img
                    src={`/src/assets/cards/${data[0]?.runners[2]?.card[0]}.jpg`}
                  />
                ) : (
                  <img data-v-79776e43 src={assets.one} />
                )}
              </span>{" "}
              <span data-v-79776e43="">
                {data[0]?.runners[2]?.card?.length > 1 ? (
                  <img
                    src={`/src/assets/cards/${data[0]?.runners[2]?.card[1]}.jpg`}
                  />
                ) : (
                  <img data-v-79776e43 src={assets.one} />
                )}
              </span>{" "}
              <span data-v-79776e43="">
                {data[0]?.runners[2]?.card?.length > 2 ? (
                  <img
                    src={`/src/assets/cards/${data[0]?.runners[2]?.card[2]}.jpg`}
                  />
                ) : (
                  <img data-v-79776e43 src={assets.one} />
                )}
              </span>
            </div>
          </div>
        </div>
      )}
      {/* {eventId == "10017" && (
        <div className="casino-video-cards ">
          <div className="casino-cards-shuffle">
            <i className="fas fa-grip-lines-vertical"></i>
          </div>
          <div className="casino-video-cards-container">
            <div>
              <span data-v-79776e43="">
                <img
                  data-v-79776e43=""
                  src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/JSS.png"
                />
              </span>{" "}
              <span data-v-79776e43="">
                <img
                  data-v-79776e43=""
                  src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/1.png"
                />
              </span>{" "}
              <span data-v-79776e43="">
                <img
                  data-v-79776e43=""
                  src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/1.png"
                />
              </span>
            </div>
            <div>
              <span data-v-79776e43="">
                <img
                  data-v-79776e43=""
                  src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/3HH.png"
                />
              </span>{" "}
              <span data-v-79776e43="">
                <img
                  data-v-79776e43=""
                  src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/1.png"
                />
              </span>{" "}
              <span data-v-79776e43="">
                <img
                  data-v-79776e43=""
                  src="https://g1ver.sprintstaticdata.com/v40/static/admin/img/cards/1.png"
                />
              </span>
            </div>
          </div>
        </div>
      )} */}
      {eventId == "10039" && (
        <div
          className={`casino-video-cards   ${
            data?.[0]?.runners?.[0]?.card == null &&
            data[0]?.runners?.[1]?.card == null &&
            data[0]?.runners?.[2]?.card == null &&
            data[0]?.runners?.[3]?.card == null
              ? "hide-cards"
              : ""
          }`}
        >
          <div className="casino-cards-shuffle">
            <i className="fas fa-grip-lines-vertical" />
          </div>
          <div className="casino-video-cards-container">
            <div>
              {data?.[0]?.runners?.[0]?.card?.map((c) => (
                <span key={c}>
                  <img src={`/src/assets/cards/${c}.jpg`} />
                </span>
              ))}
            </div>
            <div>
              {data?.[0]?.runners?.[1]?.card?.map((c) => (
                <span key={c}>
                  <img src={`/src/assets/cards/${c}.jpg`} />
                </span>
              ))}
            </div>
            <div>
              {data?.[0]?.runners?.[2]?.card?.map((c) => (
                <span key={c}>
                  <img src={`/src/assets/cards/${c}.jpg`} />
                </span>
              ))}
            </div>
            <div>
              {data?.[0]?.runners?.[3]?.card?.map((c) => (
                <span key={c}>
                  <img src={`/src/assets/cards/${c}.jpg`} />
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
      {eventId == "10026" && (
        <div
          className={`casino-video-cards ${
            data?.[0]?.runners?.[0]?.card?.length == 0 &&
            data[0]?.runners?.[1]?.card?.length == 0
              ? "hide-cards"
              : ""
          }`}
        >
          <div className="casino-cards-shuffle">
            <i className="fas fa-grip-lines-vertical" />
          </div>
          <div className="casino-video-cards-container">
            <div>
              {data?.[0]?.runners?.[0]?.card?.map((c) => (
                <span data-v-79776e43 key={c}>
                  <img data-v-79776e43 src={`/src/assets/cards/${c}.jpg`} />
                </span>
              ))}
            </div>
            <div>
              {data?.[0]?.runners?.[1]?.card?.map((c) => (
                <span data-v-79776e43 key={c}>
                  <img data-v-79776e43 src={`/src/assets/cards/${c}.jpg`} />
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
      {eventId === "10045" || eventId == "10046" ? (
        <div
          className={`casino-video-cards ${
            data?.[0]?.runners?.[0]?.card?.length == 0 &&
            data[0]?.runners?.[1]?.card?.length == 0
              ? "hide-cards"
              : ""
          }`}
        >
          <div className="casino-cards-shuffle">
            <i className="fas fa-grip-lines-vertical"></i>
          </div>
          <div className="casino-video-cards-container">
            <div>
              {data?.[0]?.runners?.[0]?.card?.map((c) => (
                <span data-v-79776e43 key={c}>
                  <img data-v-79776e43 src={`/src/assets/cards/${c}.jpg`} />
                </span>
              ))}
            </div>
            <div>
              {data?.[0]?.runners?.[1]?.card?.map((c) => (
                <span data-v-79776e43 key={c}>
                  <img data-v-79776e43 src={`/src/assets/cards/${c}.jpg`} />
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : null}
      {eventId == "10048" && (
        <div
          className={`casino-video-cards  ${
            data?.[0]?.indexCard?.length > 0 ? "" : "hide-cards"
          }`}
        >
          <div className="casino-cards-shuffle">
            <i className="fas fa-grip-lines-vertical"></i>
          </div>
          <div className="casino-video-cards-container">
            <span data-v-79776e43="">
              <img
                data-v-79776e43=""
                src={`/src/assets/cards/${data?.[0]?.indexCard?.[0]}.jpg`}
              />
            </span>
          </div>
        </div>
      )}
      {eventId == "10019" && (
        <div
          className={`casino-video-cards ${
            data?.[0]?.indexCard?.length === 0 ? "hide-cards" : ""
          }`}
        >
          <div className="casino-cards-shuffle">
            <i className="fas fa-grip-lines-vertical"></i>
          </div>
          <div className="casino-video-cards-container">
            <div className="dealer-name">Dealer</div>
            <div>
              {data?.[0]?.indexCard?.map((card) => (
                <span key={card} data-v-79776e43="">
                  <img
                    data-v-79776e43=""
                    src={`/src/assets/cards/${card}.jpg`}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
      {eventId == "10042" && (
        <div className="casino-video-cards">
          <div className="casino-cards-shuffle">
            <i className="fas fa-grip-lines-vertical"></i>
          </div>
          <div className="casino-video-cards-container">
            {data?.[0]?.runners?.map((runner) => (
              <div key={runner?.id}>
                {runner?.card?.map((c) => (
                  <span key={c} data-v-79776e43="">
                    <img
                      data-v-79776e43=""
                      src={`/src/assets/cards/${c}.jpg`}
                    />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
      {eventId == "10016" && (
        <div
          className={`casino-video-cards  ${
            data?.[0]?.runners?.some((runner) => runner?.card?.length > 0)
              ? ""
              : "hide-cards"
          }`}
        >
          <div className="casino-cards-shuffle">
            <i className="fas fa-grip-lines-vertical" />
          </div>
          <div className="casino-video-cards-container">
            {data?.[0]?.runners?.map((runner) => (
              <div key={runner?.id}>
                {runner?.card?.map((c) => (
                  <span key={c} data-v-79776e43="">
                    <img
                      data-v-79776e43=""
                      src={`/src/assets/cards/${c}.jpg`}
                    />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
      {eventId == "10027" || eventId == "10028" ? (
        <div
          className={`casino-video-cards ${
            data?.[0]?.runners?.some((runner) => runner?.card?.length > 0)
              ? ""
              : "hide-cards"
          }`}
        >
          <div className="casino-cards-shuffle">
            <i className="fas fa-grip-lines-vertical"></i>
          </div>
          <div className="casino-video-cards-container">
            {data?.[0]?.runners?.map((runner) => (
              <div key={runner?.id}>
                <div className="dealer-name w-100 mb-1">
                  <span className="">{runner?.name}: </span>
                  <span className="text-warning">{runner?.total}</span>
                </div>
                <div>
                  {runner?.card?.map((c) => (
                    <span key={c} data-v-79776e43="">
                      <img
                        data-v-79776e43=""
                        src={`/src/assets/cards/${c}.jpg`}
                      />
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {eventId == "10037" && (
        <div
          className={`casino-video-cards 
            ${
              data?.[0]?.runners?.some((runner) => runner?.card?.length > 0)
                ? ""
                : "hide-cards"
            }`}
        >
          <div className="casino-cards-shuffle">
            <i className="fas fa-grip-lines-vertical"></i>
          </div>{" "}
          <div className="casino-video-cards-container">
            {data?.[0]?.runners?.map((runner) => {
              return (
                <div key={runner?.id}>
                  <div className="dealer-name w-100 mb-1">
                    <span className="">{runner?.name}: </span>{" "}
                    <span className="text-warning ml-1">{runner?.hdp}</span>
                  </div>{" "}
                  {runner?.card?.length > 0 && (
                    <div>
                      <span data-v-79776e43="">
                        <img
                          data-v-79776e43=""
                          src={`/src/assets/cards/${runner?.card?.[0]}.jpg`}
                        />
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
      {eventId == "10034" || eventId == "10035" ? (
        <div
          className={`casino-video-cards 
           ${data[0]?.indexCard?.length > 0 ? "" : "hide-cards"}`}
        >
          <div className="casino-cards-shuffle">
            <i className="fas fa-grip-lines-vertical"></i>
          </div>{" "}
          <div className="casino-video-cards-container">
            <div>
              {data[0]?.indexCard?.map((card, i) => {
                return (
                  <span key={i} data-v-79776e43="">
                    <img
                      data-v-79776e43=""
                      src={`/src/assets/cards/${card}.jpg`}
                    />
                  </span>
                );
              })}{" "}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Card;
