import React from 'react'
import "./Slider.css"
import SliderItem from './SliderItem';

export default function Slider() {
    return (
        <section className="slider-container">
            <div className="slider-row">
            <SliderItem image="./images/slider-client-items/client-1.png"></SliderItem>
            <SliderItem image="./images/slider-client-items/client-2.png"></SliderItem>
            <SliderItem image="./images/slider-client-items/client-3.png"></SliderItem>
            <SliderItem image="./images/slider-client-items/client-4.png"></SliderItem>
            <SliderItem image="./images/slider-client-items/client-5.png"></SliderItem>
            <SliderItem image="./images/slider-client-items/client-6.png"></SliderItem>
            </div>
        </section>
    );
}
