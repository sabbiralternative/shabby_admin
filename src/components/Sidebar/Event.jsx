import axios from "axios";
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { config } from "../../utils/config";
import { token } from "../../utils/localStorage";

const Event = () => {
  const [toggleEvent, setToggleEvent] = useState(false);
  const [menu, setMenu] = useState([]);
  const menuApi = config?.result?.endpoint?.menu;

  useEffect(() => {
    const getAllMenuApi = async () => {
      const res = await axios.get(menuApi, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data;
      setMenu(data);
    };
    getAllMenuApi();
  }, [menuApi]);

  return (
    <li
      id="event-tree"
      className={`menu-box ${toggleEvent ? "mm-active" : ""}`}
    >
      <a
        onClick={() => setToggleEvent(!toggleEvent)}
        className="has-arrow"
       style={{cursor:'pointer'}}
      >
        <i className="bx bxs-calendar-event"></i>
        <span>Events</span>
      </a>
      {toggleEvent && (
        <ul className={`sub-menu  ${toggleEvent ? "" : "mm-collapse"} `}>
          {menu?.map((m, i) => (
            <Menu
              key={i}
              eventTypeName={m.eventTypeName}
              length={m?.competitions}
              menu={m}
              singleEvent={m}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Event;

export const Menu = ({ eventTypeName, menu, singleEvent, length }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className={`menu-box ${isOpen ? "mm-active" : ""}`}>
      <a
       style={{cursor:'pointer'}}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="has-arrow sport40"
      >
        <span>{eventTypeName}</span> <span> ({length.length})</span>
      </a>
      {isOpen && (
        <ul className={`sub-menu ${isOpen ? "" : "mm-collapse"}`}>
          {menu.competitions.map((c, i) => (
            <Competitions
              key={i}
              competitions={c}
              menu={menu}
              singleEvent={singleEvent}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export const Competitions = ({ competitions, menu, singleEvent }) => {
  const [links, setLinks] = useState([]);
  const [showLinks, setShowLinks] = useState(false);
  const showLink = (link) => {
    const find = menu.competitions.filter((c) => c.competitionName === link);
    setLinks(find);
  };

  return (
    <li className={`menu-box text-dark ${showLinks ? "mm-active" : ""}`}>
      <a style={{cursor:'pointer'}}
        onClick={() => {
          showLink(competitions.competitionName);
          setShowLinks(!showLinks);
        }}
        className="has-arrow"
      >
        <span>{competitions.competitionName}</span>
        <span> ({competitions?.events?.length})</span>
      </a>
      {showLinks && (
        <ul className={`sub-menu ${showLinks ? "" : "mm-collapse"}`}>
          <li className="text-dark">
            {links[0].events.map((li, i) => (
              <Links
                key={i}
                eventName={li.eventName}
                competitions={competitions}
                singleEvent={singleEvent}
              />
            ))}
          </li>
        </ul>
      )}
    </li>
  );
};

export const Links = ({ eventName, singleEvent, competitions }) => {
  const navigate = useNavigate();
  const getSingleGame = (name) => {
    const filter = competitions.events.find((ev) => ev.eventName === name);
    const evenTypeId = singleEvent.eventTypeId;
    const eventId = filter.eventId;
    navigate(`/game-details/${evenTypeId}/${eventId}`);
  };

  return (
    <a
      style={{
        color: "#fff",
      }}
      onClick={() => getSingleGame(eventName)}
      className="side-nav-link-ref"
    >
      <span>{eventName}</span>
    </a>
  );
};
