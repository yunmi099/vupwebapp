import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Select= () => {
  const navigate = useNavigate();
  return (
    <div>
      <StyledLi
        onClick={() => {
          navigate("/prevansan");
        }}
      >
        안산 도금
      </StyledLi>
      <StyledLi
        onClick={() => {
          navigate("/prevsihwa");
        }}
      >
        시화 도금
      </StyledLi>
      <StyledLi
        onClick={() => {
          navigate("/prevseoulsihwa");
        }}
      >
        시화 서울 도금
      </StyledLi>
    </div>
  );
};
const StyledLi = styled.div`
border:solid 1px;
border-color: #1e88e5;
border-radius: 17px;
background-color:white;
color: #1e88e5;
padding:10px 10vw;
margin: 20px;
display:flex;
flex-direction: row;
justify-content: space-evenly;
font-size: 0.8em;
font-weight: 800;
`
export default Select;