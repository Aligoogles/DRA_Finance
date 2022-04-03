/* created Aelita  21113131*/

import React from 'react'

function Details (props) {

    return (
        <div>
           <h1 className="name">{props.info.name}</h1>
           <h3 className="name">{props.info.subName}</h3>
           <p className="desc">{props.info.desc}</p>
        </div>
    )
}

export default Details;