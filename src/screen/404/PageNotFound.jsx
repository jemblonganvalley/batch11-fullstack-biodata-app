import React from 'react'
import { NavLink } from "react-router-dom"

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
        <h1>Page Tidak Ditemukan !</h1>
        <NavLink to={"/"} className="text-blue-500 hover:text-blue-700">Kembali</NavLink>
    </div>
  )
}

export default PageNotFound
