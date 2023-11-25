import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ showDropdown, setShowDropdown,setChangePassDropdown }) => {
  const dropdownRef = useRef();
  /* Close dropdown click outside the dropdown */
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setShowDropdown]);

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <ul
      ref={dropdownRef}
      role="menu"
      tabIndex="-1"
      className={`dropdown-menu dropdown-menu-right ${
        showDropdown ? "show" : ""
      }`}
      aria-labelledby="__BVID__18__BV_toggle_"
    >
      {/*  <!-- show --> */}
      <div className="dropdown d-sm-none ml-1 mr-1">
        <div className="bal-box">
          <span className="balance nowrap">
            Pts:{" "}
            <span className="balance-value">
              <b>7,900.00</b>
            </span>
          </span>
        </div>
      </div>
      <Link className="dropdown-item d-sm-none">
        <i className="fas fa-info-circle mr-1"></i> Rules
      </Link>
      <Link
      to='/secureAuth'
      onClick={()=> setShowDropdown(false)}
      className="dropdown-item">
        <i className="bx bx-lock-open font-size-16 align-middle mr-1"></i>
        Secure Auth
      </Link>
      <a
      onClick={()=>{
        setChangePassDropdown(true)
        setShowDropdown(false)
      }}
      className="dropdown-item"
      style={{cursor:'pointer'}}
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
