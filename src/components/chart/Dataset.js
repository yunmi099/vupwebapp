import { Data } from "../../assets/data";
export const dataset1 = {
  labels: Data.map((key) => key.COLLECTED_DT.substring(11, 19)),
  datasets: [
    {
      type: "line",
      label: "CRNT",
      yAxisID: "y",
      borderColor: "grey",
      borderWidth: 2,
      data: Data.map((key) => key.CRNT),
    },
    {
      type: "line",
      label: "VOLT",
      yAxisID: "y_sub",
      backgroundColor: "rgb(255, 99, 132)",
      data: Data.map((key) => key.VOLT),
      borderColor: "red",
      borderWidth: 2,
    },
    {
      type: "line",
      label: "POWR",
      yAxisID: "y_sub2",
      backgroundColor: "rgb(75, 192, 192)",
      data: Data.map((key) => key.POWR),
    },
  ],
};
export const dataset2 = {
  labels: Data.map((key) => key.COLLECTED_DT.substring(11, 19)),
  datasets: [
    {
      type: "line",
      label: "POWR_AMT",
      yAxisID: "y",
      borderColor: "grey",
      borderWidth: 2,
      data: Data.map((key) => key.POWR_AMT),
    },
  ],
};
