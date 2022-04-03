/* created Aelita  21113131*/

import React from 'react'
import Details from '../../components/homepage/Details'
import data from '../../info.json';

function HomeBox5 () {

    const homeBox5Info = data[1]

    return (
        <div className="individualBlock">
            <Details info={homeBox5Info}/>
        </div>
    )
}

export default HomeBox5;