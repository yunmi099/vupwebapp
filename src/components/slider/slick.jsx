// Slider는 해당 컴포넌트에서 import해주자
import Slider from "react-slick";

const CarouselSlick = (props) => {
console.log(props.data)
  const dataTitle = ["통합 대기 환경 수치", "통합 대기 환경 지수", "미세먼지 등급(PM10)", "미세먼지 지수(PM10)", "오존 등급","아황산가스 등급" ] 
  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
      <Slider {...sliderSettings}>
        {props.data !== undefined ? <><div style={{margin:5}}>{dataTitle[0]}</div><div style={{fontSize: "2em"}}>{props.data.khaiValue}</div></> : null}
        {props.data !== undefined ? <><div style={{margin:5}}>{dataTitle[1]}</div><div style={{fontSize: "2em"}}>{props.data.khaiGrade}</div></> : null}
        {props.data !== undefined ? <><div style={{margin:5}}>{dataTitle[2]}</div><div style={{fontSize: "2em"}}>{props.data.pm10Grade}</div></> : null}
        {props.data !== undefined ? <><div style={{margin:5}}>{dataTitle[3]}</div><div style={{fontSize: "2em"}}>{props.data.pm10Value}</div></> : null}
        {props.data !== undefined ? <><div style={{margin:5}}>{dataTitle[4]}</div><div style={{fontSize: "2em"}}>{props.data.o3Grade}</div></> : null}
        {props.data !== undefined ? <><div style={{margin:5}}>{dataTitle[5]}</div><div style={{fontSize: "2em"}}>{props.data.so2Grade}</div></> : null}
      </Slider>
  );
};

export default CarouselSlick;