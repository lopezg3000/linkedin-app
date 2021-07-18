import React from 'react';

function NavLinks({ data }) {
    return (
        <div className='collapse navbar-collapse ms-10 me-auto' id='navbarNavDropdown' >
            <ul className='navbar-nav'>
                {data.map(link => {
                    return (
                        <li className='nav-item' key={link.label}>
                            <a className='nav-link' href={link.path}>
                                {/*Add Icon here when I get a chance */}
                                {link.label}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default NavLinks;