import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './page/Home'
import Navbar from './components/Navbar'
import Login from './page/Login'
import Signup from './page/Signup'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App