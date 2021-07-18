import React from 'react';
import { ReactComponent as LinkedinLogo } from '../../assets/linkedinLogo.svg';


const Logo = () => {
    return (
        <a className='navbar-brand ms-5 ps-5 logo-container' href=''>
            <LinkedinLogo className='logo' alt="" />
        </a>
    );
}

export default Logo;


