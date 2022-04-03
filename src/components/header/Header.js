import React from 'react';
import { useState, } from 'react';
import SliderData from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const Header = ({slides}) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length;

   /* 
   useEffect (() => {
        const interval = setInterval(() => {
            setCurrent(current === 1 ? 0 : current +1);
        }, 5000);
        return () => clearInterval(interval);
    }, [current]);
    */

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <=0) {
        return null;
    }


    return (
        <div className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
           {SliderData.map((slide, index) => {
                return (
                    <div 
                     key={index} 
                     className={index === current ? 'slide active' : 'slide'}>
                       {index === current && (
                        <img src={slide.urls} alt='finance slides' className="slides_img" />
                        )}
                        {index === current && (
                        <h2 className="slides_title" alt='finance slides title' >{slide.title}</h2>
                        )}
                    </div>
                ) 
            })}
        </div>
    );
};

export default Header;