import styled from "styled-components";
export const TitleButton = styled.div`
  background-color: ${(props) => (props.source ? "#1e88e5" : "white")};
  color: ${(props) => (props.source ? "white" : "black")};
  border-radius: 13px;
  border: 1px solid;
  font-size: 0.8em;
  font-weight: 500;
  margin: 2px;
  width: 90px;
  height: 30px;
  line-height: 30px;
  border-color: #1e88e5;
`;
export const DeviceButton = styled.div`
  background-color: white;
  color: black;
  border-radius: 13px;
  border: 1px solid;
  font-size: 0.7em;
  font-weight: 500;
  margin: 10px 10px 10px 10px;
  width: 17%;
  height: 30px;
  line-height: 30px;
  border-color: #1e88e5;
`;
export const Element = styled.div`
  background-color: white;
  color: black;
  border-radius: 13px;
  border: 1px solid;
  font-size: 0.65em;
  font-weight: 600;

  width: 16%;
  height: 32px;
  line-height: 30px;
  border-color: #1e88e5;
`;
export const StyledInput = styled.input`
  background-color: white;
  color: black;
  border-radius: 13px;
  border: 1px solid;
  font-size: 0.65em;
  font-weight: 600;
  margin: 10px;
  width: 11%;
  height: 28.5px;
  line-height: 30px;
  padding-left: 10px;
  border-color: grey;
`;
export const PostButton = styled.div`
  color: white;
  border-radius: 13px;
  border: 1px solid;
  font-size: 0.7em;
  font-weight: 600;
  height: 30px;
  line-height: 30px;
  width: 10%;
  margin: 10px;
  background-color: #1e88e5;
  &:hover {
    background-color: #b3e5fc;
  }
`;
export const TotalPostButton = styled.div`
  color: white;
  border-radius: 13px;
  border: 1px solid;
  font-size: 0.7 em;
  font-weight: 700;
  height: 40px;
  line-height: 40px;
  width: 15%;
  background-color: #1e88e5;
  &:hover {
    background-color: #b3e5fc;
  }
  margin: 3%;
`;
