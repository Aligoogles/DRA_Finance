/* created Aelita  21113131*/

import React from 'react'
import Details from '../../components/homepage/Details'
import data from '../../info.json';

function HomeBox2 () {

    const homeBox2Info = data[0]

    return (
        <div className="individualBlock">
            <Details info={homeBox2Info}/>
        </div>
    )
}

export default HomeBox2;