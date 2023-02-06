const Dataset2 = (INFO) => {
  return {
    labels: INFO.map((key) => key.COLLECTED_DT.substring(11, 19)),
    datasets: [
      {
        type: "line",
        label: "POWR_AMT",
        yAxisID: "y",
        borderColor: "grey",
        borderWidth: 2,
        data: INFO.map((key) => key.POWR_AMT),
      },
    ],
  };
};
export default Dataset2;
