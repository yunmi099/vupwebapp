import styled from "styled-components";
import "./menu.css";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className="list">
      <li
        className="button"
        onClick={() => {
          navigate("/ansan");
        }}
      >
        안산 도금
      </li>
      <li
        className="button"
        onClick={() => {
          navigate("/sihwa");
        }}
      >
        시화 도금
      </li>
      <li
        className="button"
        onClick={() => {
          console.log("hello");
        }}
      >
        시화 서울 도금
      </li>
    </div>
  );
};
export default Menu;
