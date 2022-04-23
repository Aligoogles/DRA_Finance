/* created Aelita  21113131*/

import React from 'react'
import Details from '../../components/homepage/Details'
import data from '../../info.json';
import '../../pages/Main-styles.scss';
import '../../pages/Variables.scss';
import '../../pages/home/Home.scss';

function HomeBox4 () {

    
    const homeInfo = data[3]


    return (
        <div className="individualBlock">
            <Details info={homeInfo}/>
           
       </div>
    )
}

export default HomeBox4;