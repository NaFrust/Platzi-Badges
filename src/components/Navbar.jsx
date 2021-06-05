import React from 'react';
import Logo from '../images/logo.svg';
import './pages/Styles/Navbar.css';

class Navbar extends React.Component{
    render() {
        return (
            <div className="Navbar">
                 <div className="container-fluid">
                    <a className="Navbar__brand" href="/">
                        <img className="Navbar__logo" src={Logo} alt='Logo'/>
                    <span className="fw-light"> Platzi</span>
                    <span className="fw-bold">Conf</span>
                    </a>
                </div>
        </div>
        )
    }
}
export default Navbar; 