import styled from "styled-components";
const StyledFooter = styled.footer`
  background-color: #81d4fa;
  width: 100vw;
  height: 6vh;
  display: fixed;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1em;
  color: white;
`;
const Footer = () => {
  return <StyledFooter>고등기술연구원</StyledFooter>;
};
export default Footer;
