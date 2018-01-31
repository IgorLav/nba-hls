import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import './slider.scss';

const sliderConfig = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 600,
    slidesToScroll: 1,
    slidesToShow: 1
};

const generateSlides = (slides) => {
    if (slides) {
        return (
            <Slider {...sliderConfig}>
                {slides.map(item => (
                    <div key={item.id}
                         className="item-slider"
                         style={{backgroundImage: `url(/images/covers/${item.cover})`}}>
                        <div className="caption">
                            <p className="topic">{item.topic}</p>
                            <h2 className="title">{item.title}</h2>
                        </div>
                    </div>
                ))}
            </Slider>
        );
    }
};

const featuredNews = (props) => {
    return (
        <div className="">
            {generateSlides(props.slides)}
        </div>
    );
};
export default featuredNews;