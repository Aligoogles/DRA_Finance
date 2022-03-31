import { Link } from 'react-router-dom'
import React from 'react'
import img from './DRA_Logo_small.webp'

function Footer () {

    return (
        <div className="main-footer">
            <div className="footer-container">
                <div className="footer-row">

                    {/* column 1*/}
                    <div className="footer-col-1">
                        <Link to='/' >
                            <img alt="small-logo" src={img} />
                        </Link>
                    </div>

                    {/* column 2*/}
                    <div className="footer-col-2">
    
                        <ul className="footer-contact">
                            <li>
                                <Link to="/About" >About</Link>
                            </li>
                            <li>
                                <Link to="/Dataset" >Dataset</Link>
                            </li>
                            <li>
                                <Link to="/Contact" >Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* column 3*/}
                    <div className="footer-col-3">
                       
                        <ul className="footer-contact">
                            <li>+353-861234567</li>
                            <li>Eyre Square, Galway Ireland</li>
                            <li>info@dra_finance.ie</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="footer-row">
                    <p className="footer-col-small">
                        &copy;{new Date().getFullYear()} DRA_Finance | All rights reserved
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;