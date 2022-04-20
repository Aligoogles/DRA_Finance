import React from 'react'
import "./About.scss";
import "../../pages/Variables.scss"
import '../Main-styles.scss'
import InfoAbout from '../../components/infoabout/InfoAbout';

function About () {

    return (
    <div className="box">
        <div className="about">
            <div className="about-box-1">
                <InfoAbout />
            </div>
            <div className="about-box-2">
            <InfoAbout />
            </div>
           
        </div>
    </div>
    )
}

export default About;