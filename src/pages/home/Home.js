import React from 'react'
import './Home.scss';
import '../Main-styles.scss'
import Header from '../../components/header/Header'
import SliderData from '../../components/header/SliderData'



function Home () {

    return (
    <div className="box">
        <div className="homepage">
            
            <div className="home-box-1">
                <Header slides={SliderData}/>
            </div>

            <div className="home-box-2">
                <h1>Welcome to DRA_Finance</h1>
                <p>We're happy to help you find what you are looking for in the Finance sector!</p>
            </div>

            <div className="home-box-3">
                <h1>Home 3</h1>
            </div>

            <div className="home-box-4">
                <h1>Home 4</h1>
            </div>

            <div className="home-box-5">
                <h1>Home 5</h1>
            </div>
            
        </div>

    </div>

    )
}

export default Home;