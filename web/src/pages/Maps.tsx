import React from "react";
import GoogleMap from 'components/Maps/GoogleMap';

// components


export default function Maps() {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <GoogleMap />
                    </div>
                </div>
            </div>
        </>
    );
}
