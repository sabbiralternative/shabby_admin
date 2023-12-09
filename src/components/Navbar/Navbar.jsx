import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import Rules from "../Modal/Rules";
import ChangePasswordDropdown from "../Modal/ChangePasswordDropdown";
import UseBalance from "../../hooks/UseBalance";

const Navbar = ({ toggleSidebar, setToggleSidebar }) => {
  const role = localStorage.getItem("adminName");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [changePassDropdown, setChangePassDropdown] = useState(false);
  const [balance] = UseBalance();
  return (
    <header data-v-b00d14ae="" id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          <div className="navbar-brand-box">
            <Link
              to="/"
              aria-current="page"
              className="logo logo-light router-link-exact-active router-link-active"
            >
              <span className="logo-lg">
                <img src="/logo.png" alt="" className="site-logo" />
              </span>
            </Link>
          </div>
          <button
            onClick={() => setToggleSidebar(!toggleSidebar)}
            id="vertical-menu-btn"
            type="button"
            className="btn btn-sm px-3 font-size-16 header-item"
          >
            <i className="fa fa-fw fa-bars"></i>
          </button>
          <div className="site-searchbox mt-3 d-none d-lg-inline-block">
            <div
              tabIndex="-1"
              role="combobox"
              aria-owns="listbox-null"
              className="multiselect"
            >
              <div className="multiselect__select"></div>
              <div className="multiselect__tags">
                <div
                  className="multiselect__tags-wrap"
                  style={{ display: "none" }}
                ></div>
                <div
                  className="multiselect__spinner"
                  style={{ display: "none" }}
                ></div>
                <input
                  name=""
                  type="text"
                  autoComplete="off"
                  spellCheck="false"
                  placeholder="Search User"
                  tabIndex="0"
                  aria-controls="listbox-null"
                  className="multiselect__input"
                  style={{ width: "0px", position: "absolute", padding: "0px" }}
                />
                <span className="multiselect__placeholder"> Search User </span>
              </div>
              <div
                tabIndex="-1"
                className="multiselect__content-wrapper"
                style={{ maxHeight: "300px", display: "none" }}
              >
                <ul
                  role="listbox"
                  id="listbox-null"
                  className="multiselect__content"
                  style={{ display: "block" }}
                >
                  <li style={{ display: "none" }}>
                    <span className="multiselect__option">
                      <span>No elements found</span>
                    </span>
                  </li>
                  <li>
                    <span className="multiselect__option">List is empty.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div
            className="dropdown b-dropdown d-inline-block d-lg-none ml-2 btn-group"
            id="__BVID__14"
          >
            <button
              aria-haspopup="menu"
              aria-expanded="false"
              type="button"
              className="btn dropdown-toggle btn-black header-item noti-icon"
              id="__BVID__14__BV_toggle_"
            >
              <i className="mdi mdi-magnify"></i>
            </button>
            <ul
              role="menu"
              tabIndex="-1"
              className="dropdown-menu dropdown-menu-lg p-0 dropdown-menu-right"
              aria-labelledby="__BVID__14__BV_toggle_"
            >
              <form className="p-3">
                <div className="form-group m-0">
                  <div className="input-group">
                    <div
                      tabIndex="-1"
                      role="combobox"
                      aria-owns="listbox-null"
                      className="multiselect"
                    >
                      <div className="multiselect__select"></div>
                      <div className="multiselect__tags">
                        <div
                          className="multiselect__tags-wrap"
                          style={{ display: "none" }}
                        ></div>

                        <div
                          className="multiselect__spinner"
                          style={{ display: "none" }}
                        ></div>
                        <input
                          name=""
                          type="text"
                          autoComplete="off"
                          spellCheck="false"
                          placeholder="Search User"
                          tabIndex="0"
                          aria-controls="listbox-null"
                          className="multiselect__input"
                          style={{
                            width: "0px",
                            position: "absolute",
                            padding: "0px",
                          }}
                        />
                        <span className="multiselect__placeholder">
                          Search User
                        </span>
                      </div>
                      <div
                        tabIndex="-1"
                        className="multiselect__content-wrapper"
                        style={{ maxHeight: "300px", display: "none" }}
                      >
                        <ul
                          role="listbox"
                          id="listbox-null"
                          className="multiselect__content"
                          style={{ display: "block" }}
                        >
                          <li style={{ display: "none" }}>
                            <span className="multiselect__option">
                              <span>No elements found</span>
                            </span>
                          </li>
                          <li>
                            <span className="multiselect__option">
                              List is empty.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </ul>
          </div>
          <div
            onClick={() => setShowRules(!showRules)}
            style={{ cursor: "pointer" }}
            className="d-none d-sm-inline-block rules-icon nowrap"
          >
            <span className="main-rules">
              <a>
                <i className="fas fa-info-circle mr-1"></i>Rules
              </a>
            </span>
          </div>
          <div className="dropdown d-none d-sm-inline-block ml-1">
            <button type="button" className="btn header-item noti-icon">
              <span className="balance nowrap">
                Pts:{" "}
                <span className="balance-value">
                  <b>{balance?.balance}</b>
                </span>
              </span>
            </button>
          </div>

          <div
            className={`dropdown b-dropdown btn-group ${
              showDropdown ? "show" : ""
            }`}
            id="__BVID__18"
          >
            {/*  <!-- show --> */}
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              aria-haspopup="menu"
              aria-expanded="false"
              type="button"
              className="btn dropdown-toggle btn-black header-item"
              id="__BVID__18__BV_toggle_"
            >
              <span className="ml-1">{role}</span>
              <i className="mdi mdi-chevron-down"></i>
            </button>
            {/* Dropdown */}
            <Dropdown
              showDropdown={showDropdown}
              setShowDropdown={setShowDropdown}
              changePassDropdown={changePassDropdown}
              setChangePassDropdown={setChangePassDropdown}
            />
            {/* Rules */}
            {showRules && (
              <Rules showRules={showRules} setShowRules={setShowRules} />
            )}
            {changePassDropdown && (
              <ChangePasswordDropdown
                changePassDropdown={changePassDropdown}
                setChangePassDropdown={setChangePassDropdown}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
