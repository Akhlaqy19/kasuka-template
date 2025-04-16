import React from 'react'
import "./CopyRight.css"

export default function CopyRight() {
    return (
        <div className='copyright-footer'>
            <div className="copyright">
                <strong>
                    <span>Kasuka</span>
                </strong>
                <span>همه حقوق محفوظ است</span>
            </div>
            <div className="right-publish">
                <span>طراحی شده توسط</span>
                <a href="#">Kasuka</a>
            </div>
        </div>
    )
}
