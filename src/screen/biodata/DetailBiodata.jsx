import React from 'react'
import { useParams } from 'react-router-dom'

const DetailBiodata = () => {

    // wajib sama dengan PARAMS KEY Nya !!!
    const { username, email, phone } = useParams()

    return (
        <div>
            <h1>Detail Biodata Page</h1>

            <h2>
                Username :  { username }
            </h2>
            <h2>
                Email : {email}
            </h2>
            <h2>
                Phone : {phone}
            </h2>
        </div>
    )
}

export default DetailBiodata
