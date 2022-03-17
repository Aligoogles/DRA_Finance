import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import {Close, MenuOutlined} from '@material-ui/icons'
import './NavBar.css';


function NavBar () {

    const [active, setActive] = useState(false);

    function showMenu (e) {
        e.preventDefault()
        setActive(!active)
    }

    return (
        <div className="navContainer" >

            <div className="menu-icon">
                <MenuOutlined className="menu" onClick={showMenu} />
            </div>

            <nav className={active ? 'navBar active' : 'navBar' }>
                <ul >

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
            </nav>

        </div>
    )
}

export default NavBar

