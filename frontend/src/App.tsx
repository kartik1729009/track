// import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import { Signup } from './components/signup/Signup'
import { Signin } from './components/login/Signin'
import { JanAhaarMenu } from './components/menu/JanAhaarMenu'

import { CheckoutPage } from './components/menu/Check-out'
import { JanAhaarAvailability } from './components/availability/JanAhaarAvailability'
import './App.css'
import { Homepage } from './components/homepage/Homepage'

function App() {

  return (
    <>
    <Routes>
    <Route path="/signup" element={<div><Signup /></div>} />
    <Route path="/login" element={<div><Signin /></div>} />
    <Route path = "/homepage" element={<div><Homepage/></div>}/>
    <Route path = "/availability" element={<div><JanAhaarAvailability/></div>}/>
    <Route path = "/menu" element={<div><JanAhaarMenu/></div>}/>
    <Route path = "/checkout" element={<div><CheckoutPage/></div>}/>
    
    </Routes>
    </>
  )
}

export default App
