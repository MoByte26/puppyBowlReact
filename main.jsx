import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
<Routes>
    <Route path='/' element={<AllPlayers/>} />
    <Route path='/players/:id element={<SinglePlayer />} />
</Routes>
</BrowserRouter>
