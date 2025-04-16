import React from 'react'
import FooterList from './FooterList'
import "./Footer.css"

export default function Footer() {

    let userClassName = "user-links"
    let usefulLinksTitle = "لینک های مفید"
    let usefulLinks = [
        "خانه",
        "درباره ی ما",
        "خدمات",
        "شرایط استفاده از خدمات",
        "سیاست حفظ حریم خصوصی"
    ]

    let servicesClassName = "services-links"
    let servicesLinksTitle = "خدمات ما"
    let servicesLinks = [
        "طراحی وبسایت",
        "توسعه وب",
        "مدیریت تولید",
        "بازار یابی",
        "طراحی گرافیک"
    ]

    return (
        <footer id='footer-container'>
            <div className="footer-top">
                <div className="footer-right">
                    <div className='logo-footer'>
                        <h3>
                            <div className="footer-logo-img">
                                <img src="logo.png" alt="" />
                            </div>
                            <a href="#">
                            Kasuka
                            </a>
                        </h3>
                    </div>

                    <div className="footer-company_info">
                        <p>تهران خیابان آزادی <br />
                            تلفن: 01234567895 <br />
                            ایمیل: info@example.com
                        </p>
                    </div>

                    <div className="footer-social_medias">
                        <div className="footer-media">
                            <a href="#" >
                                <img src="./images/footer-logos/twitter.png" alt="" />
                            </a>
                        </div>
                        <div className="footer-media">
                            <a href="#" >
                                <img src="./images/footer-logos/facebook.png" alt="" />
                            </a>
                        </div>
                        <div className="footer-media">
                            <a href="#" >
                                <img src="./images/footer-logos/instagram.jpg" alt="" />
                            </a>
                        </div>
                        <div className="footer-media">
                            <a href="#" >
                                <img src="./images/footer-logos/skype.png" alt="" />
                            </a>
                        </div>
                        <div className="footer-media">
                            <a href="#" >
                                <img src="./images/footer-logos/linkedin.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                    <FooterList
                    class= {userClassName}
                    title={usefulLinksTitle}
                    links= {usefulLinks}
                    ></FooterList>

                    <FooterList 
                    class= {servicesClassName}
                    title={servicesLinksTitle}
                    links= {servicesLinks}
                    ></FooterList>

                <div className="footer-left">
                    <h4>خبرنامه ما</h4>
                    <p>با این حال ، هیچ یک از چیزهایی که من می خوانم تقصیر بزرگ ما نخواهد بود</p>
                    <form action="" className='footer-form'>
                        <input type="text" />
                        <input className='btn-folowing' type='submit' value="دنبال کردن"/>
                    </form>
                </div>
            </div>
        </footer>
    )
}
