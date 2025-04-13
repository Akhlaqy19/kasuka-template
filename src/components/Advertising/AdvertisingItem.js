import React from 'react'
import "./AdvertisingItem.css"

export default function AdvertisingItem(props) {
    return (
        <div className="advertising-caption">
            <div className="adverisiting-image">
                <img src={props.image} alt="" />
            </div>
            <div className="adverisiting-detail">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
