import React from 'react';

interface IMapMarkerIconProps {
    height?: number;
    width?: number;
    color?: string;
}

const MapMarkerIcon = (props: IMapMarkerIconProps) => {
    return (
        <svg
            height={props.height ? props.height : '24'}
            width={props.width ? props.width : '24'}
            viewBox={props.width && props.height ? `0 0 ${props.width} ${props.height}` : '0 0 24 24'}
        >
            <path
                d="M0 0h24v24H0z"
                fill='none'
            />
            <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                fill={props.color ? props.color : 'none'}
            />
        </svg>
    )
}
export default MapMarkerIcon;
