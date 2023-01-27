import styled from "styled-components";
export const StyledInput = styled.input`
  padding: 12px 10px;
  width: 30vw;
  margin: 7px 0px;
  border-radius: 13px;
  border: 0.5px solid;
  border-color: #1e88e5;
  font-size: 0.7em;
`;
export const SubmitInput = styled(StyledInput)`
  width: 33vw;
  color: white;
  font-weight: 700;
  background-color: #1e88e5;
  font-size: 0.85em;
  margin: 20px 0px 0px 0px;
`;

export const WrapDiv = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 50px;
  border-radius: 20px;
`;
