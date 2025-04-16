import React from 'react'
import "./Comments.css"

export default function Comments() {
    return (
        <section className='comments-container'>
            <div className="comment-detail">
                <div className="user-profile-img">
                    <img src="./images/testimonials-4.jpg" alt="" />
                </div>
                <div className="user-info">
                    <h3>مت براندون</h3>
                    <h4>فریلنسر</h4>
                </div>
                <div className="user-comment">
                    <p>
                    زیرا من آن کسی بودم که از درد رهایی می یافت ، درد هیچ تقصیری از بسیاری ندارد ، حداقل فوجیات را حداقل از طریق درد ، کار می کند.                  
                    </p>
                </div>
            </div>
            
        </section>
    )
}
