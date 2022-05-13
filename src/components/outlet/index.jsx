import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/index'

import React from 'react'

const NavbarLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default NavbarLayout