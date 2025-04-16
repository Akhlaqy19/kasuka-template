import React from 'react'
import "./Portfolio.css"

export default function Portfolio() {
    return (
        <section>
            <div className="portfolio-container">
                <div className="section-title">
                    <h2>نمونه کارها</h2>
                    <h3>نمونه کارها ما را بررسی کنید</h3>
                </div>

                <div className="portfolio-list">
                    <ul>
                        <li>همه</li>
                        <li>برنامه</li>
                        <li>محصول</li>
                        <li>اینترنت</li>
                    </ul>
                </div>

                <div className="portfolio-products">
                    <div className="portfolio-product">
                        <img className='portfolio-3' src="./images/portfolio-img/portfolio-3.jpg" alt="" />
                    </div>
                    <div className="portfolio-product">
                        <img className='portfolio-2' src="./images/portfolio-img/portfolio-2.jpg" alt="" />
                    </div>
                    <div className="portfolio-product">
                        <img className='portfolio-1' src="./images/portfolio-img/portfolio-1.jpg" alt="" />
                    </div>
                    <div className="portfolio-product">
                        <img className='portfolio-5' src="./images/portfolio-img/portfolio-5.jpg" alt="" />
                    </div>
                    <div className="portfolio-product">
                        <img className='portfolio-4' src="./images/portfolio-img/portfolio-4.jpg" alt="" />
                    </div>
                    <div className="portfolio-product">
                        <img className='portfolio-6' src="./images/portfolio-img/portfolio-6.jpg" alt="" />
                    </div>
                    <div className="portfolio-product">
                        <img className='portfolio-9' src="./images/portfolio-img/portfolio-9.jpg" alt="" />
                    </div>
                    <div className="portfolio-product">
                        <img className='portfolio-7' src="./images/portfolio-img/portfolio-7.jpg" alt="" />
                    </div>
                    <div className="portfolio-product">
                        <img className='portfolio-8' src="./images/portfolio-img/portfolio-8.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
