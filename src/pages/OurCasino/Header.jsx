const Header = ({ data }) => {
  return (
    <div className="casino-video-title">
      <span className="casino-name"> {data?.eventName}</span>{" "}
      <div className="casino-video-rid">Round ID: {data?.roundId}</div>
    </div>
  );
};

export default Header;
