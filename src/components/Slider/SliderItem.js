import React from 'react'
import './SliderItem.css'

export default function SliderItem(props) {
    return (

        <div className="slider-item">
            <img src={props.image} alt=""/>
        </div>
        
    )
}
