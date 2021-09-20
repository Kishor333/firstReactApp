import React from 'react';
import './index.css'
const Scroller = (props) => {
    return (
        <div className="scroll-box">
            {props.children}
        </div>
    )
}

export default Scroller;
