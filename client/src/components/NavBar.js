import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/">Posts</Link>
            <Link to="/">Profile</Link>
            <Link to="/">Messages</Link>
        </div>
    )
}

export default NavBar
