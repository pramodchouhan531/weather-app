import Login from "./components/login";
import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Dashboard from "./components/dashboard";

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
  
      </Routes>
    </BrowserRouter>
  </div>
)

export default App