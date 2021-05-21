import React from 'react';

const Marker = ({text, onClick}) => (
    <div style={{
        position: ' absolute',
        top: '50%',
        left: '50%',
        width: '18px;',
        height: '18px',
        color: '#000',
        border: '2px solid #fff',
        borderRadius: '100%',
        userSelect: 'none',
        transform: 'translate(-50%, -50%)',
        cursor: 'pointer'
    }}
         alt={text}
         onClick={onClick}
    />
);

Marker.defaultProps = {
    onClick: null,
};

Marker.propTypes = {
    text: "aaa",
};

export default Marker;
