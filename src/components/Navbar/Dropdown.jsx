import { Link } from "react-router-dom";

const Dropdown = ({
  showDropdown,
  setShowDropdown,
  setChangePassDropdown,
  showRules,
  setShowRules,
}) => {
  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <ul
      role="menu"
      tabIndex="-1"
      className={`dropdown-menu dropdown-menu-right ${
        showDropdown ? "show" : ""
      }`}
      aria-labelledby="__BVID__18__BV_toggle_"
    >
      {/*  <!-- show --> */}
      {/* <div className="dropdown d-sm-none ml-1 mr-1">
        <div className="bal-box">
          <span className="balance nowrap">
            Pts:{" "}
            <span className="balance-value">
              <b>7,900.00</b>
            </span>
          </span>
        </div>
      </div> */}
      <a
        onClick={() => setShowRules(!showRules)}
        style={{ cursor: "pointer" }}
        className="dropdown-item d-sm-none"
      >
        <i className="fas fa-info-circle mr-1"></i> Rules
      </a>
      <Link
        to="/secureAuth"
        onClick={() => setShowDropdown(false)}
        className="dropdown-item"
      >
        <i className="bx bx-lock-open font-size-16 align-middle mr-1"></i>
        Secure Auth
      </Link>
      <a
        onClick={() => {
          setChangePassDropdown(true);
          setShowDropdown(false);
        }}
        className="dropdown-item"
        style={{ cursor: "pointer" }}
      >
        <i className="bx bx-wallet font-size-16 align-middle mr-1"></i>
        Change Password
      </a>
      <div className="dropdown-divider"></div>
      <Link onClick={handleLogout} className="dropdown-item text-danger">
        <i className="bx bx-power-off font-size-16 align-middle mr-1 text-danger"></i>
        Logout
      </Link>
    </ul>
  );
};

export default Dropdown;
