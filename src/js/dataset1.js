const Dataset1 = (INFO) => {
  return {
    labels: INFO.map((key) => key.COLLECTED_DT.substring(11, 19)),
    datasets: [
      {
        type: "line",
        label: "CRNT",
        yAxisID: "y",
        borderColor: "black",
        backgroundColor: "black",
        borderWidth: 2,
        data: INFO.map((key) => key.CRNT),
      },
      {
        type: "line",
        label: "VOLT",
        yAxisID: "y_sub",
        backgroundColor: "red",
        data: INFO.map((key) => key.VOLT),
        borderColor: "red",
        borderWidth: 2,
      },
      {
        type: "line",
        label: "POWR",
        yAxisID: "y_sub2",
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgb(75, 192, 192)",
        data: INFO.map((key) => key.POWR),
      },
    ],
  };
};
export default Dataset1;
