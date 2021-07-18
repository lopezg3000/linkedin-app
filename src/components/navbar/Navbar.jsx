import React from 'react';
import Logo from './Logo';
import SearchBar from '../common/SearchBar';
import NavLinks from '../common/NavLinks';
import NavBarToggler from '../common/NavBarToggler';
import data from '../../data/navLinksData.json';
import './navbar.css';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light px-4">
            <div className='container mx-auto'>
                <Logo />
                <SearchBar />
                <NavBarToggler />
                <NavLinks data={data} />
            </div>
        </nav >
    );
}

export default Navbar;