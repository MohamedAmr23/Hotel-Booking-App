import React from 'react'
import Navbar from '../component/Navbar'
import { Outlet, useLocation } from 'react-router-dom'

const MainLayout = () => {
    const isOwnerPath = useLocation().pathname.includes("owner")
  return (
    <>
    {!isOwnerPath && <Navbar/>}
    <Outlet/>
    </>
  )
}

export default MainLayout