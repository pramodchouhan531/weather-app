import Login from "./components/login";
import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Dashboard from "./components/dashboard";
import History from "./components/history";
const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/history" element={<History/>}/>
      </Routes>
    </BrowserRouter>
  </div>
)

export default App