import React, {Component} from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
import GoogleMapReact from 'google-map-react';


const MapExampleScript = withScriptjs(
    withGoogleMap((props: any) => (
        <GoogleMapReact
            defaultZoom={7}
            defaultCenter={{ lat: 55.992388, lng: 10.334654 }}
            defaultOptions={{
                scrollwheel: false,
                styles: [
                    {
                        featureType: "administrative",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#444444" }],
                    },
                    {
                        featureType: "landscape",
                        elementType: "all",
                        stylers: [{ color: "#f2f2f2" }],
                    },
                    {
                        featureType: "poi",
                        elementType: "all",
                        stylers: [{ visibility: "off" }],
                    },
                    {
                        featureType: "road",
                        elementType: "all",
                        stylers: [{ saturation: -100 }, { lightness: 45 }],
                    },
                    {
                        featureType: "road.highway",
                        elementType: "all",
                        stylers: [{ visibility: "simplified" }],
                    },
                    {
                        featureType: "road.arterial",
                        elementType: "labels.icon",
                        stylers: [{ visibility: "off" }],
                    },
                    {
                        featureType: "transit",
                        elementType: "all",
                        stylers: [{ visibility: "off" }],
                    },
                    {
                        featureType: "water",
                        elementType: "all",
                        stylers: [{ color: "#4299e1" }, { visibility: "on" }],
                    },
                ],
            }}
        >
            <Marker position={{ lat: 55.676098, lng: 12.508337 }} />
            <Marker position={{ lat: 57.053508, lng: 9.909224 }} />
            <Marker position={{ lat: 55.402248, lng: 10.369727 }} />
            <Marker position={{ lat: 55.486619, lng: 12.179579 }} />


        </GoogleMapReact>
    ))
);

function TestMaps() {
    return (
        <MapExampleScript
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCtxDpjQhfM8VEVy0dxW-rpAgYeOiVYtGg"
            loadingElement={<div className="h-full" />}
            containerElement={<div className="relative w-full rounded h-600-px absolute" />}
            mapElement={<div className="rounded h-full" />}
        />
    );
}

export default TestMaps;
