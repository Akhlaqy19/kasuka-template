import React from 'react'
import AdvertisingItem from './AdvertisingItem';
import "./Advertising.css"

export default function Advertising() {
    return (
        <section>
            <div className="advertising-container">
                <div className="advertising-img">
                    <img src="./images/features.jpg" alt="" />
                </div>

                <div className="advertising-info">
                    <AdvertisingItem 
                        image="./images/items-adv/item-adv1.svg" title="تبلیغ سختی است" 
                        description="نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند ">

                    </AdvertisingItem>
                    <AdvertisingItem 
                        image="./images/items-adv/item-adv2.svg" title="کدام یک از اینهاست" 
                        description="کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند" >

                    </AdvertisingItem>
                    <AdvertisingItem 
                        image="./images/items-adv/item-adv3.svg" title="کدام یک از اینهاست" 
                        description="کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند" >

                    </AdvertisingItem>
                    <AdvertisingItem 
                        image="./images/items-adv/item-adv4.svg" title="حقیقت مبارک" 
                        description="آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند" >

                    </AdvertisingItem>
                </div>
            </div>
        </section>
    );
}
