import React from 'react'
import { NavLink } from "react-router-dom"

const HomePage = () => {
  return (
    <div className={`container-bg`}>

      <div className='text-center z-10'>
        <h1 className={`font-thin text-5xl select-none`}>APLIKASI</h1>
        <h1 className={`font-bold text-5xl select-none`}>BIODATA</h1>
      </div>

      <NavLink to={"/biodata"} className={`home-btn`} role='button'>
          Isi Biodata
      </NavLink>

      <NavLink to={"/biodata/all"} className={`home-btn mb-14`} role='button'>
          List Biodata
      </NavLink>

      <div className={`home-base-bg`}></div>

    </div>
  )
}

export default HomePage
