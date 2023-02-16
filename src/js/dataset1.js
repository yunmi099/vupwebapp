const Dataset1 = (INFO) => {
  return {
    labels: INFO.map((key) => key.COLLECTED_DT.substring(11, 19)),
    datasets: [
      {
        type: "line",
        label: "CRNT",
        yAxisID: "y",
        borderColor: "#ffa000",
        backgroundColor: "#ffa000",
        borderWidth: 1.3,
        data: INFO.map((key) => key.CRNT),
      },
      {
        type: "line",
        label: "VOLT",
        yAxisID: "y_sub",
        backgroundColor: "#43a047",
        data: INFO.map((key) => key.VOLT),
        borderColor: "#43a047",
        borderWidth: 1.3,
      },
      {
        type: "line",
        label: "POWR",
        yAxisID: "y_sub2",
        borderColor: "grey",
        backgroundColor: "grey",
        borderWidth: 1.3,
        data: INFO.map((key) => key.POWR),
      },
    ],
  };
};
export default Dataset1;
