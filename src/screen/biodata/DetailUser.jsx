import React from 'react'
import { NavLink, useSearchParams } from "react-router-dom"

const DetailUser = () => {

  const [query] = useSearchParams()
  const fullname = query.get("fullname")
  const bod = query.get("bod")
  const pob = query.get("pob")
  const address = query.get("address")
  const email = query.get("email")
  const phone = query.get("phone")

  // ambil data sesuai dari request query

  return (
    <div className='content-container'>

      <div className='flex gap-1 justify-center'>
        <h1 className={`font-thin text-5xl select-none`}>Detail</h1>
        <h1 className={`font-bold text-5xl select-none`}>User</h1>
      </div>

      <div className='flex w-full flex-col gap-4'>

        <div className='form-control'>
          <h1>Nama Lengkap</h1>
          <p> {fullname} </p>
        </div>

        <div className='form-control'>
          <h1>Tanggal Lahir</h1>
          <p> {bod} </p>
        </div>

        <div className='form-control'>
          <h1>Tempat Lahir</h1>
          <p> {pob} </p>
        </div>

        <div className='form-control'>
          <h1>Alamat</h1>
          <p> {address} </p>
        </div>

        <div className='form-control'>
          <h1>Email</h1>
          <p> {email} </p>
        </div>

        <div className='form-control'>
          <h1>Phone</h1>
          <p> {phone} </p>
        </div>

        <NavLink to={'/finish'} role='button' className={`form-button bg-green-600 flex justify-center items-center`}>
          Finish
        </NavLink>

        <NavLink to="/biodata" className='text-center font-light text-sm text-blue-500'>
          Back
        </NavLink>

      </div>


    </div>
  )
}

export default DetailUser
