/* created Aelita  21113131*/

import React from 'react'
import Details from '../../components/homepage/Details'
import data from '../../info.json';
import '../../pages/Main-styles.scss';
import '../../pages/Variables.scss';
import '../../pages/home/Home.scss';
import forex from './forex_img.PNG';
import daily from './daily_img.PNG';
import money from './money_img.PNG';
import msn from './msn_img.PNG';
import yahoo from './yahoo_img.PNG';
import './HomeBoxStyles.scss';

function HomeBox6 () {

    
    const homeInfo = data[4]
    const homeInfo1 = data[5]
     


    return (
        <div className="individualBlock6">

            <Details info={homeInfo}/> 
            <div className="forex-home">
                <img src={forex} alt="forex" />
                <button className="home-btn" >
                <a href="https://www.forex.com/ie/">www.forex.com</a>
                </button>
            </div>

            <div className="forex-home">
                <img src={daily} alt="forex" />
                <button className="home-btn" >
                <a href="https://www.dailyfx.com/">dailyfx.com</a>
                </button>
            </div>

            <div className="forex-home">
                <img src={money} alt="forex" />
                <button className="home-btn" >
                <a href="https://money.cnn.com/data/markets/">money.cnn.com</a>
                </button>
            </div>

            <div className="forex-home">
                <img src={yahoo} alt="forex" />
                <button className="home-btn" >
                <a href="https://finance.yahoo.com/">finance.yahoo.com</a>
                </button>
            </div>

            <div className="forex-home">
                <img src={msn} alt="forex" />
                <button className="home-btn" >
                <a href="https://www.msn.com/en-us/money/markets?duration=1D">www.msn.com</a>
                </button>
            </div>

            <Details info={homeInfo1}/>
            <div className="other-links">
                <button className="home-btn" >
                <a href="https://www.forexlive.com/">forexlive.com</a>
                </button>

                <button className="home-btn" >
                <a href="https://www.marketwatch.com/markets">www.marketwatch.com</a>
                </button>

                <button className="home-btn" >
                <a href="https://www.cnbc.com/stocks/">www.cbn.com</a>
                </button>

                <button className="home-btn" >
                <a href="https://www.bloomberg.com/markets/stocks">www.bloomberg.com</a>
                </button>

                <button className="home-btn" >
                <a href="https://www.moneycontrol.com/stocksmarketsindia/">www.moneycontrol.com</a>
                </button>

                <button className="home-btn" >
                <a href="https://www.forexchurch.com/stock-market-hours">www.forexchurch.com</a>
                </button>
            </div>
            
       </div>
    )
}

export default HomeBox6;