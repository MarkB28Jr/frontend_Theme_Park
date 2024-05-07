import './App.css'
import { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'
import Park from './components/Park'

function App() {

  return (
    <div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/park'>Park</NavLink>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='park' element={<Park />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
