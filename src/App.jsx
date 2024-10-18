import React from 'react'
import Homepage from './Homepage'
import {Routes,Route } from 'react-router-dom'
import Productsdetail from './Productsdetail'

function App() {

  return (
    <>
   
    <Routes>
    <Route index element={<Homepage />} />
      <Route path="/productsdetail/:id" element={<Productsdetail/>}>

      </Route>
    </Routes>

    </>
  )
}

export default App