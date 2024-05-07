import React from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from './screen/home/HomePage'
import BiodataPage from './screen/biodata/BiodataPage'
import FinishPage from './screen/finish/FinishPage'
import PageNotFound from './screen/404/PageNotFound'
import DetailBiodata from './screen/biodata/DetailBiodata'
import DetailUser from './screen/biodata/DetailUser'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <HomePage /> } />
      <Route path='biodata' element={ <BiodataPage /> } />
      <Route path='finish' element={ <FinishPage /> } />
      <Route path='*' element={ <PageNotFound /> } />
      <Route path='biodata/detail/:username/:email/:phone' element={ <DetailBiodata /> } /> 
      <Route path='user' element={ <DetailUser /> } />
    </Routes>
  )
}

export default App
