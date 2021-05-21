import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import SvgPin from 'assets/img/svg/MarkerIcon.svg'
import MapMarkerIcon from 'assets/SvgComponents/MapMarkerIcon';

const AnyReactComponent = ({ text }) => <div><MapMarkerIcon color={"red"}/></div>;

const GoogleMap = () => {
    const defaultProps = {
        center: {
            lat: 55.992388,
            lng: 10.334654
        },
        zoom: 1
    };

    return (
            // Important! Always set the container height explicitly
            <div style={{ height: '70vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAHMoCEn9-L-dBr8ksnk7I92jvxTqqAOlI' }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        // @ts-ignore
                        lat={55.992388}
                        lng={10.334654}
                        text="My Marker"
                    />
                    <AnyReactComponent
                        // @ts-ignore
                        lat={65.992388}
                        lng={15.334654}
                        text="My Marker"
                    />
                    <AnyReactComponent
                        // @ts-ignore
                        lat={52.992388}
                        lng={6.334654}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
}

export default GoogleMap;
