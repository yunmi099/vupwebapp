import styled from "styled-components";
export const Styles = styled.div`
  table{
    width:90vw;
    margin-bottom:20px;
  }
  table,
  th,
  td {
    border: 1px solid #f4f4f4;
    border-collapse: collapse;
  
    font-size: 0.85em;;
    text-align: center;
  }
  
  th {
    background-color: #fafafa;
    padding: 20px;
  }
  
  td {
    background-color: white;
  
    padding: 16px 0;
  }
  }
`;
export const TitleButton = styled.div`
  background-color: ${(props) => (props.air ? "#1e88e5" : "white")};
  color: ${(props) => (props.air ? "white" : "black")};
  border-radius: 13px;
  border: 1px solid;
  font-size: 0.8em;
  font-weight: 500;
  margin: 2px;
  width: 120px;
  height: 30px;
  line-height: 30px;
  border-color: #1e88e5;
`;
