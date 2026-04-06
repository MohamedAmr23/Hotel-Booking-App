import React from 'react'
import Navbar from '../component/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../component/Footer'

const MainLayout = () => {
    const isOwnerPath = useLocation().pathname.includes("owner")
  return (
    <>
    {!isOwnerPath && <Navbar/>}
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayout