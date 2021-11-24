import Login from "./components/login";
import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Logout from "./components/logout";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  </div>
)

export default App