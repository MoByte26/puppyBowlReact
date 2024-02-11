import { useState } from 'react'
import './App.css'
import './components/SinglePlayer.jsx'
import { Routes, Route, Link } from "react-router-dom";

function App () {
  return (
    <div id="container">
    <h1>Introducing the Puppy Bowl</h1>
    <div id="navbar">
      <Link to={"/SinglePlayer"}> See Details </Link>
      
    </div>

    <div id="main-section">
    <Routes>
     <Route path="/SinglePlayer" element={<h1>See Details</h1>} />
   </Routes>
      </div>
    </div>

  )
}

export default App