import styled from "styled-components";
const StyledHeader = styled.header`
  background: #81d4fa;
  width: 100vw;
  height: 7vh;
  display: fixed;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.3em;
  color: white;
`;
function Header() {
  return (
    <StyledHeader>
      <div>가상에너지 생산공급설비 v1.4</div>
    </StyledHeader>
  );
}

export default Header;
