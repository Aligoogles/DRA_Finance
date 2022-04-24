/* created Aelita  21113131*/

import React from 'react'
import Details from '../../components/homepage/Details'
import data from '../../info.json';
import './HomeBoxStyles.scss';

function HomeBox2 () {

    const homeInfo = data[0]

    return (
        <div className="individualBlock">
            <Details info={homeInfo}/>
        </div>
    )
}

export default HomeBox2;