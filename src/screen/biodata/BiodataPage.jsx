import React from 'react'
import { NavLink } from "react-router-dom"

const BiodataPage = () => {
    return (
        <div className={`content-container`}>

            <div className='text-center'>
                <h1 className={`font-thin text-5xl select-none`}>APLIKASI</h1>
                <h1 className={`font-bold text-5xl select-none`}>BIODATA</h1>
            </div>

            <form action='/user' className={`column-form`}>

                <div className={`form-control`}>
                    <label htmlFor="fullname"> Nama Lengkap </label>
                    <input type="text" className={`form-input`} id='fullname' name='fullname' required />
                </div>

                <div className={`form-control`}>
                    <label htmlFor="bod"> Tanggal Lahir </label>
                    <input type="date" className={`form-input`} id='bod' name='bod' required />
                </div>

                <div className={`form-control`}>
                    <label htmlFor="pob"> Tempat Lahir </label>
                    <input type="text" className={`form-input`} id='pob' name='pob' required />
                </div>

                <div className={`form-control`}>
                    <label htmlFor="address"> Alamat </label>
                    <textarea id="address" name='address' className={`form-textarea`} required></textarea>
                </div>

                <div className={`form-control`}>
                    <label htmlFor="email"> Email </label>
                    <input type="email" className={`form-input`} id='email' name='email' required />
                </div>

                <div className={`form-control`}>
                    <label htmlFor="phone"> Phone </label>
                    <input type="tel" className={`form-input`} id='phone' name='phone' required />
                </div>
                
                <button type='submit' className='form-button'>
                    Submit
                </button>

                <NavLink to="/" className='text-center font-light text-sm text-blue-500'>
                    Back
                </NavLink>

            </form>

        </div>
    )
}

export default BiodataPage
