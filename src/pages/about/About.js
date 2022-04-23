/* Created by Ross x21132305 */

import React from 'react';
import "./About.scss";
import "../../pages/Variables.scss";
import "../Main-styles.scss";
import img1 from "../about/images/about1.jpg"
import img2 from "../about/images/about2.jpg"
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
            <div>
                <img src={img1} className="aboutImg" alt="Staff" />
                <img src={img2} className="aboutImg" alt="Financial news on a newspaper" />
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
