import React from 'react'
import { NavLink } from "react-router-dom"

const BiodataPage = () => {
    return (
        <div>
            <h1>Biodata Page</h1>

            <nav>
                <NavLink to={"/"}> Home </NavLink>
                <NavLink to={"/biodata"}> Biodata </NavLink>
                <NavLink to={"/finish"}> Finish </NavLink>
            </nav>
        </div>
    )
}

export default BiodataPage
