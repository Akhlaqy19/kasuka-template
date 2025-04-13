import React from 'react'
import "./FooterList.css"

export default function FooterList(props) {
    return (
        <div className={props.class}>
            <h4>{props.title}</h4>
            <ul>
                <li><a href="#">{props.links[0]}</a></li>
                <li><a href="#">{props.links[1]}</a></li>
                <li><a href="#">{props.links[2]}</a></li>
                <li><a href="#">{props.links[3]}</a></li>
                <li><a href="#">{props.links[4]}</a></li>
            </ul>
        </div>
    )
}
