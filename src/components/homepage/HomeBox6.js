/* created Aelita  21113131*/

import React from 'react'
import Details from '../../components/homepage/Details'
import data from '../../info.json';
import '../../pages/Main-styles.scss';
import '../../pages/Variables.scss';
import '../../pages/home/Home.scss';

function HomeBox6 () {

    
    const homeInfo = data[4]
    const homeInfo1 = data[5] 


    return (
        <div className="individualBlock">
            <Details info={homeInfo}/>  
            <Details info={homeInfo1}/>  
       </div>
    )
}

export default HomeBox6;