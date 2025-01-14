import { useEffect, useRef, useState } from "react";

const Timer = ({ timer }) => {
  const initialValue = useRef(timer);
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  const [strokeDashoffset, setStrokeDashoffset] = useState(0);
  const [strokeColor, setStrokeColor] = useState("green");

  useEffect(() => {
    const percentage = (timer / initialValue.current) * 100;
    const offset = circumference - (percentage / 100) * circumference;
    setStrokeDashoffset(offset);

    if (percentage >= 70) {
      setStrokeColor("green");
    } else if (percentage >= 50) {
      setStrokeColor("orange");
    } else {
      setStrokeColor("red");
    }
  }, [timer, circumference, initialValue]);
  return (
    <div className="casino-timer">
      <div data-v-07e7cfbb className="base-timer">
        <svg
          data-v-07e7cfbb
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="base-timer__svg"
        >
          <g data-v-07e7cfbb className="base-timer__circle">
            <circle
              data-v-07e7cfbb
              cx={50}
              cy={50}
              r={radius}
              stroke={strokeColor}
              strokeWidth={6}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="base-timer__path-elapsed"
            />{" "}
            <path
              data-v-07e7cfbb
              // strokeDasharray={circumference}
              // strokeDashoffset={strokeDashoffset}
              // strokeDasharray="179 283"
              // d="
              // M 50, 50
              // m -45, 0
              // a 45,45 0 1,0 90,0
              // a 45,45 0 1,0 -90,0
              // "
              className={`base-timer__path-remaining ${strokeColor}`}
            />
          </g>
        </svg>{" "}
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          data-v-07e7cfbb
          className="base-timer__label green"
        >
          <span style={{ width: "100%", marginLeft: "10px" }} data-v-07e7cfbb>
            {timer}
          </span>
          <span
            data-v-07e7cfbb
            className="component-fade-leave-active component-fade-leave-to"
          >
            5
          </span>
          {/**/}
        </span>
      </div>
    </div>
  );
};

export default Timer;
