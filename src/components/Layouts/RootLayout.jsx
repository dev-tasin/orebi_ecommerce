import React from 'react'
import Navbar from '../Navbar'
import Header from '../Header'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
     <Navbar/>
     <Header/>
     <Outlet/>
    </>
  )
}

export default RootLayout