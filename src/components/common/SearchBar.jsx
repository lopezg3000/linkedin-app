import React from 'react';

const SearchBar = () => {
    return (
        <form className="d-flex form-container 	d-md-none d-lg-block d-sm-none">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        </form>
    );
}

export default SearchBar;