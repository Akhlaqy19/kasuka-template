import React from 'react'
import "./Services.css"
import ServiceBox from '../ServiceBox/ServiceBox'

export default function Services() {
    return (
        
        <section className="services-container">
            <div className="section-title">
                <h2>خدمات</h2>
                <h3>خدمات ما را بررسی کنید</h3>
            </div>

            <div className="services-boxes">
                <ServiceBox></ServiceBox>
                <ServiceBox></ServiceBox>
                <ServiceBox></ServiceBox>
                <ServiceBox></ServiceBox>
                <ServiceBox></ServiceBox>
                <ServiceBox></ServiceBox>
            </div>
        </section>
    )
}
