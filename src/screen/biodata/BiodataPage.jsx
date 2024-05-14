import React from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import db from '../../firebase'
import { doc, setDoc } from 'firebase/firestore'

const BiodataPage = () => {

    const navigate = useNavigate()

    function handleSubmit( event ){
        // stop form untuk refresh page
        event.preventDefault()

        // tangkap value dari input element
        const fullname = event.target.fullname.value
        const bod = event.target.bod.value
        const pob = event.target.pob.value
        const address = event.target.address.value
        const email = event.target.email.value
        const phone = event.target.phone.value

        // tampilkan ke console browser
        console.info({
            fullname, bod, pob, address, email, phone
        })

        // confirmasi ke user
        const conf = window.confirm(`
fullname    : ${fullname}
bod         : ${bod}
pob         : ${pob}
address     : ${address}
email       : ${email}
phone       : ${phone}
        `)

        if( !conf ) return

        // store data ke firebase
        storeBiodata({
            fullname, bod, pob, address, email, phone
        })
        .then(res => console.info("data berhasil di masukan"))

        // kembalikan ke page utama
        navigate("/")
    }

    async function storeBiodata( data ) {
        const docRef = doc(db, "/biodata/" + data.email)
        const store = await setDoc(docRef, data)
        return store
    }


    return (
        <div className={`content-container`}>

            <div className='text-center'>
                <h1 className={`font-thin text-5xl select-none`}>APLIKASI</h1>
                <h1 className={`font-bold text-5xl select-none`}>BIODATA</h1>
            </div>

            <form onSubmit={handleSubmit} className={`column-form`}>

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
