import styled from 'styled-components';
import React,{useEffect, useState} from 'react';
import { Line, Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import axios from "axios";
import { useDateContext } from '../../context/dateContext';

const Dataset = (INFO) => {
    return {
      labels: INFO.map((key) => key.dtm.substring(11, 19)),
      datasets: [
        {
          type: "line",
          label: "KW",
          yAxisID: "y",
          borderColor: "#ffa000",
          backgroundColor: "#ffa000",
          borderWidth: 1.3,
          data: INFO.map((key) => key.KW),
        },
        {
          type: "line",
          label: "Kwh",
          yAxisID: "y_sub",
          backgroundColor: "grey",
          data: INFO.map((key) => key.Kwh),
          borderColor: "grey",
          borderWidth: 1.3,
        },]
    };
}
const options_1 = {
  responsive: true,
  spanGaps: true,
  grouped: true,
  interaction: {
    mode: "index",
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
  elements: {
    point: {
      radius: 0.9,
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
        text: "KW",
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
        text: "Kwh",
      },
    },
  }
}
const NMchart = () => {
  const [size, setSize] = useState(false);
  const [dataset, setDataset] = useState({});
  const {startDate, endDate} = useDateContext();
  async function getData() {
    
    try {
      const response = await axios.get(
        `http://192.168.3.125:8081/api/vup/woo?st_dt=${startDate}}&en_dt=${endDate}`
      );
        console.log(response.data)
        setDataset(Dataset(response.data));
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(()=>{
    getData()
    },[])
    useEffect(()=>{getData()},[startDate, endDate])
  return (
    <>     
        <Container Mode = {size}>{
         Object.keys(dataset).length !== 0?  <Line type="line" data={dataset} options={options_1}/> : null
        }
        </Container>
      </>
  );
};

export default NMchart;

const Container = styled.div`
  display:flex;
  background-color:white;
  padding:20px;
  align-items: center;
  justify-content: center;
  width : 90%;
`;
