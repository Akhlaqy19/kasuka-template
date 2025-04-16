import React from 'react'
import "./Header.css"
import HeaderBox from '../HeaderBox/HeaderBox';

export default function Header() {
    return (
        <section className="container">
            <div className='header-detail'>
                <h1 className='header-title'>
                    راه حل های قدرتمند دیجیتال با
                    <br />
                    <span className='company-title'>Kasuka</span>
                </h1>
                <span className='comany-caption'>ما تیمی از بازاریابان با استعداد دیجیتال هستیم</span>
            </div>
            
            <div className='header-boxes'>
                <HeaderBox icon="" title="متن نمایشی" ></HeaderBox>
                <HeaderBox icon="" title="نمودار کیفی" ></HeaderBox>
                <HeaderBox icon="" title="نمونه کارها" ></HeaderBox>
                <HeaderBox icon="" title="عملکردهای پایانی" ></HeaderBox>
                <HeaderBox icon="" title="اطلاعات ذخیره شده" ></HeaderBox>
            </div>
        </section>
    );
}
