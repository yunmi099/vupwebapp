import { useNavigate } from "react-router-dom";
function Header(props) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", margin: "10px" }}>
        <img
          src={require("../../assets/images/Logo/left-arrow.png")}
          width="20px"
          style={{ marginRight: 15 }}
          onClick={() => {
            navigate(props.location);
          }}
        />
        <img
          src={require("../../assets/images/Logo/logo2.png")}
          width="170px"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
    </div>
  );
}

export default Header;
