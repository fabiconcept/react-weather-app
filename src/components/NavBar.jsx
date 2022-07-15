import React from 'react'

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="logo text-light h5">9ja<span> Weather</span></div>
            <div className="list">
                <input type="text" className="search-box" placeholder='Search Location' />
            </div>
        </div>
    )
}

export default NavBar