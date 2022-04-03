/* created Aelita  21113131*/

import React from 'react'
import Details from '../../components/homepage/Details'
import data from '../../info.json';

function HomeBox4 () {

    const homeBox4Info = data[3]

    return (
        <div className="individualBlock">
            <Details info={homeBox4Info}/>
        </div>
    )
}

export default HomeBox4;