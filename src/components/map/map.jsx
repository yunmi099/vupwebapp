import Graph from "../../components/chart/chart";
import { useCallback, useEffect, useRef } from 'react';
import { ansanLoc } from "./mapInfo/locationInfo";
import { sihwaLoc } from "./mapInfo/locationInfo";
import { seoulSihwaLoc } from "./mapInfo/locationInfo";
const APIKEY = 'AIzaSyAd01GNKNnl9puewl_xMj2tcbpGiPUjJb8';

function GoogleMap(props) {
  let locations = [];
  let centralLocation= {} 
  let zoomRate;
  if (props.location == 0) {
    locations = ansanLoc;
    centralLocation ={lat:37.3, lng :126.8}
    zoomRate=12;
  } else if (props.location == 1) {
    locations = sihwaLoc;
    centralLocation ={lat: 37.33524059088744, lng: 126.71949304396288}
    zoomRate=17;
  } else if (props.location == 2) {
    locations = seoulSihwaLoc;
    centralLocation ={    lat: 37.34170034365066,
      lng: 126.69774935143738,}
    zoomRate=13;
  }
  const mapElement = useRef(null);

  // 컴포넌트가 마운트될 때, 수동으로 스크립트를 넣어줍니다. 
  // ﻿이는 script가 실행되기 이전에 window.initMap이 먼저 선언되어야 하기 때문입니다.
  const loadScript = useCallback((url: string) => {
    const firstScript = window.document.getElementsByTagName('script')[0];
    const newScript = window.document.createElement('script');
    newScript.src = url;
    newScript.async = true;
    newScript.defer = true;
    firstScript?.parentNode?.insertBefore(newScript, firstScript);
  }, []);

  // script에서 google map api를 가져온 후에 실행될 callback 함수
  const initMap = useCallback(() => {
    const { google } = window;
    if (!mapElement.current || !google) return;

    const map = new google.maps.Map(mapElement.current, {
      zoom: zoomRate,
      center: centralLocation ,
    });

    for (var i = 0; i < locations.length; i++) {
      const marker = new google.maps.Marker({
        map: map,
        label: {
          text: locations[i].place,
          fontSize: '0.6em',
          fontWeight:'500',
        },
        position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
      });
    }
  }, []);

  useEffect(() => {
    const script = window.document.getElementsByTagName('script')[0];
    const includeCheck = script.src.startsWith(
      'https://maps.googleapis.com/maps/api'
    );

    // script 중복 호출 방지
    if (includeCheck) return initMap();

    window.initMap = initMap;
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${APIKEY}&callback=initMap&language=en`
    );
  }, [initMap, loadScript]);

  return <div ref={mapElement} style={{ height: "40vh", display: "flex", width: "100%"}} />;
}

export default GoogleMap;

