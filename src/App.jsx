import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import About from './Page/About'
import Resume from './Page/Resume'
import Portfolio from './Page/Portfolio'
import Blog from './Page/Blog'
import Contact from './Page/Contact'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/about" />}/>
        <Route path='/about' element={<About/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router>
  )
}

export default App
