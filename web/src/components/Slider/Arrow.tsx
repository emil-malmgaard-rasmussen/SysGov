import React from 'react'
import leftArrow from '../../assets/img/svg/left-arrow.svg'
import rightArrow from '../../assets/img/svg/right-arrow.svg'

const Arrow = ({ direction, handleClick }) => (
    <div style={{
        display: 'flex',
        position: 'absolute',
        top: '50%',
        height: '50px',
        width: '50px',
        justifyContent: 'center',
        background: '#fff',
        borderRadius: '50%',
        cursor: 'pointer',
        alignItems: 'center',
        transition: 'transform ease-in 0.1s',
    }}
        onClick={handleClick}
    >
        {direction === 'right' ? <img src={rightArrow} /> : <img src={leftArrow} />}
    </div>
)

export default Arrow
