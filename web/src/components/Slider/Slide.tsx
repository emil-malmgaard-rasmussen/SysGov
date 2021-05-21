import React from 'react'

interface wtf {
    content: string
}
const Slide = (data: wtf) => (
    <div
        style={{backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%', background: "#88206b"}}
    >
        {data.content}
    </div>
)

export default Slide
