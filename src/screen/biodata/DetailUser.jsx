import React from 'react'
import { useSearchParams } from "react-router-dom"

const DetailUser = () => {

    const [ query ] = useSearchParams()
    const email = query.get("email")
    const username = query.get("username")

    // ambil data sesuai dari request query

  return (
    <div>
      <h1>Detail User</h1>

      <h2> Username : { username } </h2>
      <h2>Email :  { email }</h2>
    </div>
  )
}

export default DetailUser
