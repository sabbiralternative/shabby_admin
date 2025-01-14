import { useEffect, useRef, useState } from "react";

const Timer = ({ timer }) => {
  const initialValue = useRef(timer); // Store the initial timer value
  const [strokeColor, setStrokeColor] = useState("green");
  const [strokeDasharray, setStrokeDasharray] = useState("283 283"); // Initial value for full circle

  useEffect(() => {
    // Ensure we use the correct initial value
    if (initialValue.current === undefined) {
      initialValue.current = timer;
    }

    // Calculate percentage of remaining time
    const percentage = (parseInt(timer) / initialValue.current) * 100;

    // Calculate strokeDasharray value
    const dashArray = (283 * percentage) / 100; // 283 corresponds to 100%
    setStrokeDasharray(`${dashArray} 283`);

    // Set stroke color based on percentage
    if (percentage >= 70) {
      setStrokeColor("green");
    } else if (percentage >= 50) {
      setStrokeColor("orange");
    } else {
      setStrokeColor("red");
    }
  }, [timer]);

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
              r={45}
              className="base-timer__path-elapsed"
            />{" "}
            <path
              data-v-07e7cfbb
              strokeDasharray={strokeDasharray} // Dynamic strokeDasharray
              d="
M 50, 50
m -45, 0
a 45,45 0 1,0 90,0
a 45,45 0 1,0 -90,0
"
              className={`base-timer__path-remaining ${strokeColor}`}
              style={{
                transition: "stroke-dasharray 1s linear", // Smooth transition
              }}
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
          className={`base-timer__label ${strokeColor}`}
        >
          <span style={{ width: "100%", marginLeft: "10px" }} data-v-07e7cfbb>
            {timer}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Timer;
