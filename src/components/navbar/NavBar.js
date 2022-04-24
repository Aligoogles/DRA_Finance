/* created Aelita  21113131*/

import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import {Close, MenuOutlined} from '@material-ui/icons'
import './NavBar.scss';
import img from './DRA_Logo_transparent.webp';
import Search from './Search';


function NavBar (props) {

    const [active, setActive] = useState(false);
    
    function showMenu (e) {
        e.preventDefault()
        setActive(!active)
    };

    
    return (
        <div className="navContainer" >
            <div className="logo">
                <Link to='/'>
                    <img src={img} alt="logo" />
                </Link>
            </div>


            <div className="menu-icon">
                <MenuOutlined className="menu" onClick={showMenu} />
            </div>

            <nav className={active ? 'navBar active' : 'navBar' }>

                <ul onClick={showMenu}>

                    <div className="closed">
                        <Close className="close" onClick={showMenu} />
                    </div>

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

                <div >
                    <Search info={props.info}/>
                </div>

            </nav>

        </div>
    )
}

export default NavBar

