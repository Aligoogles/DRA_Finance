/* Created by Ross x21132305 */

import React from 'react';
import "./About.scss";
import "../../pages/Variables.scss";
import "../Main-styles.scss";
import img1 from "../about/images/about1.jpg"
import img2 from "../about/images/about2.jpg"
import img3 from "../about/images/about3.jpg"
import InfoAbout from '../../components/infoabout/InfoAbout';
import InfoAbout2 from '../../components/infoabout/InfoAbout2';

function About () {

    return (
    <div className="box">
        <div className="about">
            <div className="about-box-1">
                <InfoAbout />
            </div> 
            <br />
            <div className="container">
                <img src={img1} className="img-about" alt="Staff"/>
                <img src={img2} className="img-about" alt="Newspaper"/>
                <img src={img3} className="img-about" alt="Laptop with image of a chart"/>

            </div>
            <br />
            <div className="about-box-2">
            <InfoAbout2 />
            <br />
            </div>
        </div>
    </div>
    )
}

export default About;
