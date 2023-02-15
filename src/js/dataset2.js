const Dataset2 = (INFO) => {
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
        label: "POWR",
        yAxisID: "y_sub",
        backgroundColor: "grey",
        data: INFO.map((key) => key.POWR),
        borderColor: "grey",
        borderWidth: 2,
      },
      {
        type: "line",
        label: "POWR_AMT",
        yAxisID: "y_sub2",
        backgroundColor: "#1e88e5",
        borderColor: "#1e88e5",
        data: INFO.map((key) => key.POWR_AMT),
      },
    ],
  };
};
export default Dataset2;
