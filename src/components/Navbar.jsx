import React from 'react';
import Logo from '../images/logo.svg';
import './pages/Styles/Navbar.css';
import {Link} from 'react-router-dom';

class Navbar extends React.Component{
    render() {
        return (
            <div className="Navbar">
                 <div className="container-fluid">
                    <Link className="Navbar__brand" to="/">
                        <img className="Navbar__logo" src={Logo} alt='Logo'/>
                    <span className="fw-light"> Platzi</span>
                    <span className="fw-bold">Conf</span>
                    </Link>
                </div>
        </div>
        )
    }
}
export default Navbar; 