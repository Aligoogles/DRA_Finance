/* created Aelita  21113131*/

import React from 'react'
import Details from '../../components/homepage/Details'
import data from '../../info.json';
import '../../pages/Main-styles.scss';
import '../../pages/Variables.scss';
import '../../pages/home/Home.scss';

function HomeBox4 () {

    
    const homeBox4Info = data[3]


    return (
        <div className="individualBlock">
            <Details info={homeBox4Info}/>
            <button className="home-btn" >
                <a href="https://www.moneyguideireland.com/loans"> 
                MORE INFO
                </a>
            </button>
           
       </div>
    )
}

export default HomeBox4;