/* created Aelita  21113131*/

import React from 'react'

function Details (props) {

    return (
        <div>
           <h1 className="name">{props.info.name}</h1>
           <h3 className="sub-name">{props.info.subName}</h3>
           <p className="desc">{props.info.desc}</p>
           <p className="desc1">{props.info.desc1}</p>
           <p className="desc2">{props.info.desc2}</p>
           <p className="desc3">{props.info.desc3}</p>
        </div>
    )
}

export default Details;