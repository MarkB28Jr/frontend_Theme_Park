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
        <NavLink to='/ride'>Rides</NavLink>
        <NavLink to='/food'>Food</NavLink>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='park' element={<Park />} />
          <Route path='ride' element={<Park />} />
          <Route path='food' element={<Park />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
