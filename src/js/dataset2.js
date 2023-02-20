const Dataset2 = (INFO) => {
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
        label: "POWR",
        yAxisID: "y_sub",
        backgroundColor: "grey",
        data: INFO.map((key) => key.POWR),
        borderColor: "grey",
        borderWidth: 1.3,
      },
      {
        type: "line",
        label: "POWR_AMT",
        yAxisID: "y_sub2",
        backgroundColor: "#d1c4e9",
        borderColor: "#d1c4e9",
        borderWidth: 1.3,
        data: INFO.map((key) => key.POWR_AMT),
      },
    ],
  };
};
export default Dataset2;
