/* created Aelita  21113131*/

import React from 'react'
import Details from '../../components/homepage/Details'
import data from '../../info.json';

function HomeBox3 () {

    const homeBox3Info = data[2]

    return (
        <div className="individualBlock">
            <Details info={homeBox3Info}/>
        </div>
    )
}

export default HomeBox3;