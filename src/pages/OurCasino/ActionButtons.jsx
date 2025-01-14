const ActionButtons = () => {
  return (
    <div className="casino-video-right-icons">
      <div title="Home" className="casino-video-home-icon">
        <a
          href="/admin/casino/list"
          className
          style={{ color: "var(--text-highlight)" }}
        >
          <i className="fas fa-home" />
        </a>
      </div>{" "}
      <div title="Rules" className="casino-video-rules-icon">
        <i className="fas fa-info-circle" />
      </div>{" "}
      <div title="Last Results" className="casino-video-lr-icon">
        <i className="fas fa-chevron-circle-up" />
      </div>
    </div>
  );
};

export default ActionButtons;
