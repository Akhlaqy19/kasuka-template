import React from 'react'
import "./Experance.css"
import ExperanceItem from './ExperanceItem'

export default function Experance() {
    return (
        <section className='experance-container'>
            <div className="experance-img">
                <img src="./images/counts-img.jpg" alt="" />
            </div>
            <div className="experance-info">
                <div className="experance-title">
                    <h3>شایسته ترین لذت را به هر حال ارائه می دهد</h3>
                </div>
                <div className="experance-caption">
                    <p>خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد مقصر است</p>
                    <div className="experance-boxes">
                        
                        <ExperanceItem 
                        image= "./images/items-exper/item1.svg"
                        number="65"
                        description="مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم."
                        ></ExperanceItem>

                        <ExperanceItem 
                        image= "./images/items-exper/item2.svg"
                        number="85"
                        description="پروژه ها برای بدست آوردن و زمانی که او کل کسانی را که از او تعریف می کنند رد می کند و آنها را حقیر می شمارد"
                        ></ExperanceItem>

                        <ExperanceItem 
                        image= "./images/items-exper/item3.svg"
                        number="35"
                        description="سال ها تجربه یا اجازه دهید به دنبال نوعی مزیت باشد"
                        ></ExperanceItem>

                        <ExperanceItem 
                        image= "./images/items-exper/item4.svg"
                        number="20"
                        description="جوایز درد دردناک تر است در زمانی دیگر که هیچکس او را متهم نمی کند و هیچ وقت او را متهم نمی کند"
                        ></ExperanceItem>
                    
                        
            
                    </div>
                </div>
            </div>
        </section>
    )
}
