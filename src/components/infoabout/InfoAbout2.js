/* created Ross  21132305 */

import React from 'react'
import Details from '../../components/homepage/Details'
import data from '../../info.json';

function InfoAbout2 () {

    const aboutinfo = data[7]

    return (
        <div className="ross">
            <Details info={aboutinfo}/>
        </div>
    )
}

export default InfoAbout2;