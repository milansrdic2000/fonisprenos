import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home/Home'
import Prijava from './pages/Prijava/Prijava'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/prijava' element={<Prijava />}></Route>
    </Routes>
  </BrowserRouter>
)
