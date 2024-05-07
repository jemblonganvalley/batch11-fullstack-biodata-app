import React from 'react'
import { NavLink } from "react-router-dom"

const PageNotFound = () => {
  return (
    <div>
      <h1>Page Tidak Ditemukan !</h1>
        <NavLink to={"/"}> Kembali </NavLink>
    </div>
  )
}

export default PageNotFound
