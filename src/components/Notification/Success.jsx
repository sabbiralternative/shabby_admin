import { useEffect } from "react";

const Success = ({ message, setMessage }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message, setMessage]);
  return (
    <div
      className="swal2-container swal2-top-end "
      style={{ overflowY: "auto" }}
    >
      <div
        aria-labelledby="swal2-title"
        aria-describedby="swal2-content"
        className="swal2-popup swal2-toast swal2-icon-success swal2-show"
        tabIndex="-1"
        role="alert"
        aria-live="polite"
        style={{ display: "flex" }}
      >
        <div className="swal2-header">
          <ul className="swal2-progress-steps" style={{ display: "none" }}></ul>
          <div
            className="swal2-icon swal2-error"
            style={{ display: "none" }}
          ></div>
          <div
            className="swal2-icon swal2-question"
            style={{ display: "none" }}
          ></div>
          <div
            className="swal2-icon swal2-warning"
            style={{ display: "none" }}
          ></div>
          <div
            className="swal2-icon swal2-info"
            style={{ display: "none" }}
          ></div>
          <div
            className="swal2-icon swal2-success swal2-icon-show"
            style={{ display: "flex" }}
          >
            <div
              className="swal2-success-circular-line-left"
              style={{ backgroundColor: "rgb(15, 32, 57)" }}
            ></div>
            <span className="swal2-success-line-tip"></span>{" "}
            <span className="swal2-success-line-long"></span>
            <div className="swal2-success-ring"></div>
            <div
              className="swal2-success-fix"
              style={{ backgroundColor: "rgb(15, 32, 57)" }}
            ></div>
            <div
              className="swal2-success-circular-line-right"
              style={{ backgroundColor: "rgb(15, 32, 57)" }}
            ></div>
          </div>
          <img className="swal2-image" style={{ display: "none" }} />
          <h2
            className="swal2-title swal2-theme-title"
            id="swal2-title"
            style={{ display: "none" }}
          ></h2>
          <button
            type="button"
            className="swal2-close"
            aria-label="Close this dialog"
            style={{ display: "none" }}
          >
            ×
          </button>
        </div>
        <div className="swal2-content">
          <div
            id="swal2-content"
            className="swal2-html-container"
            style={{ display: "block" }}
          >
            {message}
          </div>
          <input className="swal2-input" style={{ display: "none" }} />
          <input
            type="file"
            className="swal2-file"
            style={{ display: "none" }}
          />
          <div className="swal2-range" style={{ display: "none" }}>
            <input type="range" />
            <output></output>
          </div>
          <select className="swal2-select" style={{ display: "none" }}></select>
          <div className="swal2-radio" style={{ display: "none" }}></div>
          <label
            htmlFor="swal2-checkbox"
            className="swal2-checkbox"
            style={{ display: "none" }}
          >
            <input type="checkbox" />
            <span className="swal2-label"></span>
          </label>
          <textarea
            className="swal2-textarea"
            style={{ display: "none" }}
          ></textarea>
          <div
            className="swal2-validation-message"
            id="swal2-validation-message"
          ></div>
        </div>
        <div className="swal2-actions" style={{ display: "none" }}>
          <button
            type="button"
            className="swal2-confirm swal2-styled"
            aria-label=""
            style={{
              display: "none",
              borderLeftColor: "rgb(48, 133, 214)",
              borderRightColor: "rgb(48, 133, 214)",
            }}
          >
            OK
          </button>
          <button
            type="button"
            className="swal2-cancel swal2-styled"
            aria-label=""
            style={{ display: "none" }}
          >
            Cancel
          </button>
        </div>
        <div className="swal2-footer" style={{ display: "none" }}></div>
        <div className="swal2-timer-progress-bar-container">
          <div
            className="swal2-timer-progress-bar"
            style={{ display: "none" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Success;
