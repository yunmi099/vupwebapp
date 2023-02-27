import styled from "styled-components";
export const StyledLi = styled.div`
  border: solid 1px;
  border-color: #1e88e5;
  border-radius: 17px;
  background-color: white;
  color: #1e88e5;
  padding: 10px 0px;
  margin: 20px;
  width: 200px;
  font-size: 0.8em;
  font-weight: 800;
  &:hover {
    border-color: #b3e5fc;
    color: #b3e5fc;
  }
`;
export const StyledMenu = styled.div`
  border: solid 1px;
  border-color: #1e88e5;
  border-radius: 17px;
  background-color: white;
  color: #1e88e5;
  padding: 10px 20px;
  margin: 20px 5px 20px 5px;
  font-size: 0.7em;
  font-weight: 800;
  height: 2vh;
  &:hover {
    border-color: #b3e5fc;
    color: #b3e5fc;
  }
`;
export const StyledRouting = styled.div`
  margin: 10px;
  text-decoration: underline;
  font-weight: 500;
  &:hover {
    color: #b3e5fc;
  }
`;
export const ClickedView = styled.div`
  width: 15vw;
  height: 20vh;
  position: absolute;
  z-index: 100;
  top: 8vh;
  left: -3.8vw;
  background-color: white;
  font-size: 0.85em;
  font-weight: 500;
  border: 1.7px solid;
  border-color: green;
  border-radius: 15px;
`;
