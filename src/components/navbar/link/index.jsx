import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

function NavLink() {
  return (
    <nav>
        <div className="Nav">
            <Link  style={{ textDecoration: 'none', color: '#101E29' }} to='/' className='navLink'>Home</Link>
            <Link  style={{ textDecoration: 'none', color: '#101E29' }} to='/Products' className='navLink'>Product</Link>
        </div>
    </nav>
  )
}

export default NavLink