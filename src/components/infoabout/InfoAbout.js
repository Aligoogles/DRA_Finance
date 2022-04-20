/* created Ross  21132305 */

import React from 'react'
import Details from '../../components/homepage/Details'
import data from '../../info.json';

function InfoAbout () {

    const aboutinfo = data[4]

    return (
        <div className="ross">
            <Details info={aboutinfo}/>
        </div>
    )
}

export default InfoAbout;