/* created Aelita  21113131*/

import React from 'react'
import Details from '../../components/homepage/Details'
import data from '../../info.json';

function HomeBox5 () {

    const homeInfo = data[1]

    return (
        <div className="individualBlock">
            <Details info={homeInfo}/>
        </div>
    )
}

export default HomeBox5;