import React from 'react'
import "./ExperanceItem.css"

export default function ExperanceItem(props) {
    return (
        <div>
            <div className="experance-box">
                <div className="title-box">
                    <img src={props.image} alt="" />
                    <span>{props.number}</span>
                </div>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
