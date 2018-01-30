import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

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
                            <h2>{item.topic}</h2>
                            <p className="title">{item.title}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        );
    }
};

const featuredImages = (props) => {
    return (
        <div className="">
            {generateSlides(props.slides)}
        </div>
    );
};
export default featuredImages;