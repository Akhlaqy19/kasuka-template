import React from 'react'
import "./Contact.css"

export default function Contact() {
    return (
        <section className='contact-container'>
            <div className="section-title">
                <h2>تماس با ما</h2>
                <h3>با ما تماس بگیرید</h3>
            </div>
            <div className="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowFullScreen></iframe>
            </div>

            <div className="contact-detail">
                <div className="contact-info">
                    <div className="adress">
                        <div className="contact-info_icon">
                            <img src="./images/info-icons/map-ico.svg" alt="" />
                        </div>
                        <div className="contact-info_title">
                            <h4>مکان:</h4>
                            <p>تهران خیابان آزادی</p>
                        </div>
                    </div>

                    <div className="email">
                        <div className="contact-info_icon">
                            <img src="./images/info-icons/email-ico.svg" alt="" />
                        </div>
                        <div className="contact-info_title">
                            <h4>ایمیل:</h4>
                            <p>info@example.com</p>
                        </div>
                    </div>

                    <div className="phone">
                        <div className="contact-info_icon">
                            <img src="./images/info-icons/phone-ico.svg" alt="" />
                        </div>
                        <div className="contact-info_title">
                            <h4>شماره تماس:</h4>
                            <p>0123467889</p>
                        </div>
                    </div>
                </div>

                <div className="user-form_info">
                    <form action="" className='user-form'>
                        <input type="text" className='input-name' placeholder='نام' required/>
                        <input type="email" className='input-email' placeholder='ایمیل' required/>
                        <input type="text" className='input-title' placeholder='عنوان' required/>
                        <textarea name="user-message" className="message-text" placeholder='پیام' required>
                        </textarea>

                    </form>
                    <div className="btn-center">
                        <button className='submit-message'>ارسال پیام</button>
                    </div>

                </div>
            </div>
            

        </section>
    )
}
