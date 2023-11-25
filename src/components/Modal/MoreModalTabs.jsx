import UseContextState from "../../hooks/UseContextState";

const MoreModalTabs = () => {
  const { moreModalCount, setMoreModalCount } = UseContextState();
  return (
    <div className="">
      <ul
        role="tablist"
        className="nav nav-tabs"
        id="__BVID__2237__BV_tab_controls_"
      >
        {/*    <!----> */}
        <li role="presentation" className="nav-item">
          <a
            onClick={() => setMoreModalCount("profile")}
            role="tab"
            style={{ cursor: "pointer" }}
            aria-selected="true"
            aria-setsize="5"
            aria-posinset="1"
            target="_self"
            className={`nav-link   ${
              moreModalCount === "profile" ? "tab-bg-primary active" : ""
            }`}
            id="__BVID__2238___BV_tab_button__"
            aria-controls="__BVID__2238"
          >
            <span>Profile</span>
          </a>
        </li>
        <li role="presentation" className="nav-item">
          <a
            onClick={() => setMoreModalCount("changePass")}
            role="tab"
            tabIndex="-1"
            aria-selected="false"
            aria-setsize="5"
            aria-posinset="2"
            href="#"
            target="_self"
            className={`nav-link   ${
              moreModalCount === "changePass" ? "tab-bg-primary active" : ""
            }`}
            id="__BVID__2240___BV_tab_button__"
            aria-controls="__BVID__2240"
          >
            <span className="d-inline-block d-sm-none">C Pass</span>
            <span className="d-none d-sm-inline-block">Change Password</span>
          </a>
        </li>
        <li role="presentation" className="nav-item">
          <a
            onClick={() => setMoreModalCount("userLock")}
            style={{ cursor: "pointer" }}
            role="tab"
            tabIndex="-1"
            aria-selected="false"
            aria-setsize="5"
            aria-posinset="3"
            href="#"
            target="_self"
            className={`nav-link   ${
              moreModalCount === "userLock" ? "tab-bg-primary active" : ""
            }`}
            id="__BVID__2242___BV_tab_button__"
            aria-controls="__BVID__2242"
          >
            <span className="d-inline-block d-sm-none">Lock</span>
            <span className="d-none d-sm-inline-block">User lock</span>
          </a>
        </li>
        <li role="presentation" className="nav-item">
          <a
            onClick={() => setMoreModalCount("accountHistory")}
            role="tab"
            tabIndex="-1"
            aria-selected="false"
            aria-setsize="5"
            aria-posinset="4"
            style={{ cursor: "pointer" }}
            target="_self"
            className={`nav-link   ${
              moreModalCount === "accountHistory" ? "tab-bg-primary active" : ""
            }`}
            id="__BVID__2246___BV_tab_button__"
            aria-controls="__BVID__2246"
          >
            <span className="d-inline-block d-sm-none">Acc history</span>
            <span className="d-none d-sm-inline-block">Account history</span>
          </a>
        </li>
        <li role="presentation" className="nav-item">
          <a
            onClick={() => setMoreModalCount("editProfile")}
            style={{ cursor: "pointer" }}
            role="tab"
            tabIndex="-1"
            aria-selected="false"
            aria-setsize="5"
            aria-posinset="5"
            target="_self"
            className={`nav-link   ${
              moreModalCount === "editProfile" ? "tab-bg-primary active" : ""
            }`}
            id="__BVID__2263___BV_tab_button__"
            aria-controls="__BVID__2263"
          >
            <span className="d-inline-block d-sm-none">Edit Profile</span>
            <span className="d-none d-sm-inline-block">Edit Profile</span>
          </a>
        </li>
        {/*   <!----> */}
      </ul>
    </div>
  );
};

export default MoreModalTabs;
