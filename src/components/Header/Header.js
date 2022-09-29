import React from 'react';
import Logo from '../../logo.png';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={Logo} alt="" />
            <h5>FITNESS-MAKES-GREAT</h5>
        </nav>
    );
};

export default Header;