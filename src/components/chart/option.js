export const options_1 = {
  responsive: true,
  spanGaps: true,
  grouped: true,
  interaction: {
    mode: "index",
  },
  elements: {
    point: {
      radius: 0.5,
    },
  },
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
        padding: 10,
        font: {
          lineHeight: 1,
        },
      },
    },
  },

  scales: {
    y: {
      // 'y'라는 id를 가진 y축에 대한 설정
      type: "linear",
      // 리니어 스케일뿐만 아니라 로그 스케일로도 표시할 수 있습니다.
      grid: {
        // 가로선 설정
        color: "#E2E2E230",
      },
      afterDataLimits: (scale) => {
        // y축의 최대값은 데이터의 최대값에 딱 맞춰져서 그려지므로
        // y축 위쪽 여유공간이 없어 좀 답답한 느낌이 들 수 있는데요,
        // 이와 같이 afterDataLimits 콜백을 사용하여 y축의 최대값을 좀 더 여유있게 지정할 수 있습니다!
        scale.max = scale.max * 1;
      },
      axis: "y", // 이 축이 y축임을 명시해줍니다.
      display: true, // 축의 가시성 여부도 설정할 수 있습니다.
      position: "left", // 축이 왼쪽에 표시될지, 오른쪽에 표시될지 정할 수 있습니다.
      title: {
        // 이 축의 단위 또는 이름도 title 속성을 이용하여 표시할 수 있습니다.
        display: true,
        align: "end",
        color: "#808080",
        font: {
          size: 12,
          family: "'Noto Sans KR', sans-serif",
          weight: 300,
        },
        text: "전류",
      },
    },
    // y축을 여러 개 두고 싶다면 아래와 같이 또 만들어 주세요.
    y_sub: {
      position: "right",
      title: {
        display: true,
        align: "end",
        color: "#808080",
        font: {
          size: 12,
          family: "'Noto Sans KR', sans-serif",
          weight: 300,
        },
        text: "전압",
      },
    },
    y_sub2: {
      position: "left",
      title: {
        display: true,
        align: "end",
        color: "#808080",
        font: {
          size: 12,
          family: "'Noto Sans KR', sans-serif",
          weight: 300,
        },
        text: "전력",
      },
    },
  },
};
export const options_2 = {
  responsive: true,
  spanGaps: true,
  grouped: true,
  interaction: {
    mode: "index",
  },
  elements: {
    point: {
      radius: 0.5,
    },
  },
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
        padding: 10,
        font: {
          lineHeight: 1,
        },
      },
    },
  },

  scales: {
    y: {
      // 'y'라는 id를 가진 y축에 대한 설정
      type: "linear",
      // 리니어 스케일뿐만 아니라 로그 스케일로도 표시할 수 있습니다.
      grid: {
        // 가로선 설정
        color: "#E2E2E230",
      },
      afterDataLimits: (scale) => {
        // y축의 최대값은 데이터의 최대값에 딱 맞춰져서 그려지므로
        // y축 위쪽 여유공간이 없어 좀 답답한 느낌이 들 수 있는데요,
        // 이와 같이 afterDataLimits 콜백을 사용하여 y축의 최대값을 좀 더 여유있게 지정할 수 있습니다!
        scale.max = scale.max * 1;
      },
      axis: "y", // 이 축이 y축임을 명시해줍니다.
      display: true, // 축의 가시성 여부도 설정할 수 있습니다.
      position: "left", // 축이 왼쪽에 표시될지, 오른쪽에 표시될지 정할 수 있습니다.
      title: {
        // 이 축의 단위 또는 이름도 title 속성을 이용하여 표시할 수 있습니다.
        display: true,
        align: "end",
        color: "#808080",
        font: {
          size: 12,
          family: "'Noto Sans KR', sans-serif",
          weight: 300,
        },
        text: "전류",
      },
    },
    // y축을 여러 개 두고 싶다면 아래와 같이 또 만들어 주세요.
    y_sub: {
      position: "right",
      title: {
        display: true,
        align: "end",
        color: "#808080",
        font: {
          size: 12,
          family: "'Noto Sans KR', sans-serif",
          weight: 300,
        },
        text: "전력",
      },
    },
    y_sub2: {
      position: "left",
      title: {
        display: true,
        align: "end",
        color: "#808080",
        font: {
          size: 12,
          family: "'Noto Sans KR', sans-serif",
          weight: 300,
        },
        text: "누적전력",
      },
    },
  },
};
