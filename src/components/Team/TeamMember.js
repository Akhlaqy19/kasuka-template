import React from 'react'
import "./TeamMember.css"

export default function TeamMember(props) {
    return (
        <div className="team-member-box">
            <img src={props.image} alt="" />
            <div className="member-info">
                <h4>{props.title}</h4>
                <span>{props.role}</span>
            </div>
        </div>
    )
}
