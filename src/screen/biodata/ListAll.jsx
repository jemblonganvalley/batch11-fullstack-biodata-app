import React, { useEffect, useState } from 'react'
import db from '../../firebase'
import { collection, getDocs } from "firebase/firestore"
import { NavLink } from 'react-router-dom'

const ListAll = () => {

    const [ allBiodata, setAllBiodata ] = useState([])

    async function getAllBiodata() {
        let result = []
        const collRef = collection(db, "biodata")
        const allData = await getDocs(collRef)
        allData.forEach((e) => {
            result.push(e.data())
        })
        return result
    }

    useEffect(() => {
        getAllBiodata()
            .then(res => {
                setAllBiodata(prev => prev = res)
            })
    }, [])


    return (
        <div className='content-container'>

            <NavLink to={"/"} className={`w-10 h-10 flex justify-center items-center fixed top-3 left-3`}>
                ⬅️
            </NavLink>

            <div className='text-center'>
                <h1 className={`font-thin text-5xl select-none`}>
                    List
                </h1>
                <h1 className={`font-bold text-5xl select-none`}>BIODATA</h1>
            </div>

            <div className={`flex w-full flex-col gap-4`}>

                {allBiodata.map((e) => (
                    <div key={e.email} className={`w-full flex flex-col gap-2 border border-gray-300 p-4 rounded-md shadow-md`}>
                        <p>
                            Fullname : {e.fullname}
                        </p>
                        <p>
                            Email : {e.email}
                        </p>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default ListAll
