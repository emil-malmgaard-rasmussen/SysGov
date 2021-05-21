import React, { useState, useEffect, useRef } from 'react'
import Slide from './Slide'
import Arrow from './Arrow'
import Dots from './Dots'

const getWidth = () => window.innerWidth

/**
 * @function Slider
 */
const Slider = (props: any) => {
    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.70
    })
    const { translate, transition, activeIndex } = state
    const autoPlayRef = useRef()

    useEffect(() => {
        autoPlayRef.current = nextSlide
    })

    useEffect(() => {
        const play = () => {
            autoPlayRef.current()
        }

        if (props.autoPlay !== null) {
            const interval = setInterval(play, props.autoPlay * 1000)
            return () => clearInterval(interval)
        }
    }, [props.autoPlay])

    const nextSlide = () => {
        if (activeIndex === props.slides.length - 1) {
            return setState({
                ...state,
                translate: 0,
                activeIndex: 0
            })
        }

        setState({
            ...state,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * getWidth()
        })
    }

    const prevSlide = () => {
        if (activeIndex === 0) {
            return setState({
                ...state,
                translate: (props.slides.length - 1) * getWidth(),
                activeIndex: props.slides.length - 1
            })
        }

        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * getWidth()
        })
    }

    return (
        <div className="h-slider" style={{position: 'relative', width: '100vw', margin: '0 auto', overflow: 'hidden' }}>
            <div style={{
                transform: `translateX(-${translate}px)`,
                transition: `transform ease-out ${transition}s`,
                height: '100%',
                width: `${getWidth() * props.slides.length}px`,
                background: '#e2e8f0',
                display: 'flex'}}
            >
                {props.slides.map((slide, i) => (
                    <div className="mx-64 my-5 flex flex-wrap content-center justify-center flex-col" style={{
                        height: '91%',
                        width: '20%',
                        background: '#cbd5e0',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '50% 50%',
                        alignContent: 'center'
                    }}>
                        <span className="content-center">
                            ABC
                        </span>
                        <span className="italic">
                             - Emil Rasmussen
                        </span>
                    </div>
                ))}
            </div>

            {!props.autoPlay && (
                <>
                    <Arrow direction="left" handleClick={prevSlide} />
                    <Arrow direction="right" handleClick={nextSlide} />
                </>
            )}

            <Dots slides={props.slides} activeIndex={activeIndex} />
        </div>
    )
    // return (
    //     <div className="h-screen2 m-auto" style={{position: 'relative', width: '100vw', overflow: 'hidden' }}>
    //         <div className="flex flex-col" style={{
    //             // transform: `translateX(-${translate}px)`,
    //             // transition: `transform ease-out ${transition}s`,
    //             height: '100%',
    //             background: '#20883e'}}
    //         >
    //             <div className="flex items-center h-full" style={{
    //                 background: 'white',
    //             }}>
    //             </div>
    //             <div>
    //                 <div className="flex justify-center" style={{bottom: '25px' }}>
    //                         <span className="inline-block  flex flex-wrap content-center my-2" style={{height: 25, width: 25, marginRight: '5px', cursor: 'pointer', borderRadius: '50%', background: 'black', }}
    //                         />
    //                     <span className="inline-block  flex flex-wrap content-center my-2" style={{height: 25, width: 25, marginRight: '5px', cursor: 'pointer', borderRadius: '50%', background: 'black', }}
    //                     />
    //                     <span className="inline-block  flex flex-wrap content-center my-2" style={{height: 25, width: 25, marginRight: '5px', cursor: 'pointer', borderRadius: '50%', background: 'black', }}
    //                     />
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
}

Slider.defaultProps = {
    slides: [],
    autoPlay: null
}


export default Slider
