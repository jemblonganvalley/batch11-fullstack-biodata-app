import React from 'react'
import { NavLink } from "react-router-dom"

const FinishPage = () => {
    return (
        <div>
            <h1>Finish Page</h1>

            <nav>
                <NavLink to={"/"}> Home </NavLink>
                <NavLink to={"/biodata"}> Biodata </NavLink>
                <NavLink to={"/finish"}> Finish </NavLink>
            </nav>
        </div>
    )
}

export default FinishPage
