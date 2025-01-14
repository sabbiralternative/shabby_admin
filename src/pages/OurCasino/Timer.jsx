const Timer = () => {
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
              strokeDasharray="179 283"
              d="
M 50, 50
m -45, 0
a 45,45 0 1,0 90,0
a 45,45 0 1,0 -90,0
"
              className="base-timer__path-remaining green"
            />
          </g>
        </svg>{" "}
        <span data-v-07e7cfbb className="base-timer__label green">
          <span data-v-07e7cfbb>1</span>
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
