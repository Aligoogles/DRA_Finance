/* created Aelita  21113131*/
import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss';
import '../Main-styles.scss'
import Header from '../../components/header/Header'
import SliderData from '../../components/header/SliderData'
import HomeBox2 from '../../components/homepage/HomeBox2'
import HomeBox3 from '../../components/homepage/HomeBox3'
import HomeBox4 from '../../components/homepage/HomeBox4'
import HomeBox5 from '../../components/homepage/HomeBox5'
import HomeBox6 from '../../components/homepage/HomeBox6'



function Home () {

    return (
    <div className="box">
        <div className="homepage">
            
            <div className="home-box-1">
                <Header slides={SliderData}/>

                <div className="home-box-2">
                    <HomeBox2 />
                    <Link className="link-btn" to="/About">Read More</Link>
                </div>
            </div>

            <div className="home-box-3">
                <HomeBox3 />
                <button className="home-btn" >
                    <a href="https://www.marketwatch.com/markets">Read more</a>
                </button>
                
            </div>

            <div className="home-box-4">
                <HomeBox4 /> 
                <button className="home-btn" >
                    <a href="https://www.moneyguideireland.com/loans">More info</a>
                </button>  
            </div>

            <div className="home-box-5">
                <HomeBox5 />
                <Link className="link-btn" to="/Dataset">Check it out</Link> 
            </div>

            <div className="home-box-6">
                <HomeBox6 />
            </div>
            
        </div>

    </div>

    )
}

export default Home;