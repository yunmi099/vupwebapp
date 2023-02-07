import React, {memo, useState, useEffect, useRef} from 'react';
import {
    GoogleMap,
    LoadScript,
    DirectionsService,
    DirectionsRenderer,
} from '@react-google-maps/api';
const APIKEY = 'AIzaSyAd01GNKNnl9puewl_xMj2tcbpGiPUjJb8';
const Directions = (props)=>{
    const [directions, setDirections] = useState();
    const {origin, destination} = props;
    const count = useRef(0);

    const options = {
        polylineOptions: {
            strokeColor: "red", 
            strokeWeight: 6,
            strokeOpacity:0.8
        }
    }
    useEffect(()=>{
        count.current = 0;
        console.log(origin, destination);
    }, [origin.lat, origin.lng, destination.lat, destination.lng]);

    const directionsCallback = (result,status)=>{
        console.log(result, status);
        if (status === "OK" && count.current === 0){
            count.current += 1;
            setDirections(result);
        }
    }

    return(
        <>
            <DirectionsService
             options={{origin, destination, travelMode:'TRANSMIT'}} callback={directionsCallback}></DirectionsService>
            <DirectionsRenderer directions={directions} options={options}/>
        </>
    )
}

export const Map = (props)=> {
    const {startPoint, endPoint} = props;
    return (
    <LoadScript googleMapsApiKey={APIKEY}>
        <GoogleMap
            mapContainerStyle={{
                height: "30vh", 
                witdh: "100%",
            }}
            zoom = {16}
            center={startPoint ? {lat: 38, lng: 127}: undefined}
            >
        <Directions origin={startPoint} destination={endPoint}/>
        </GoogleMap>

    </LoadScript>        
    )
}
export default memo(Map);