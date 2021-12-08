import {memo} from 'react';
import Santa1 from '../../assets/1.png';
import Santa2 from '../../assets/2.png';
import Santa3 from '../../assets/3.png';
import Santa4 from '../../assets/4.png';
import Santa5 from '../../assets/5.png';
import {isMobile} from 'react-device-detect';
import Slider from "react-slick";

const Collection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 2 : 3,
        slidesToScroll: 1
    };
    return (
        <div className={`collection ${isMobile ? 'mobile' : ''}`}>
            <p className="collection-title">Santa Clause Collection</p>
            <Slider {...settings}>
                <img src={Santa1} alt="santa"/>
                <img src={Santa2} alt="santa"/>
                <img src={Santa3} alt="santa"/>
                <img src={Santa4} alt="santa"/>
                <img src={Santa5} alt="santa"/>
            </Slider>
        </div>
    )
}

export default memo(Collection);