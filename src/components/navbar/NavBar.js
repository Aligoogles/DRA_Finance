import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'



function NavBar () {

    return (
        <div className="containerNav" >
            <nav>
                <ul >

                    <li>
                        <Link to="/" className="navText">Home</Link> 
                    </li>

                    <li>
                        <Link to="/About" className="navText">About</Link>
                    </li>

                    <li>     
                        <Link to="/Dataset" className="navText">Dataset</Link>
                    </li>

                    <li>
                        <Link to="/Contact" className="navText">Contact</Link> 
                    </li>

                </ul>
            </nav>

        </div>
    )
}

export default NavBar

