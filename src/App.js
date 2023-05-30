
import './App.css';
import React from 'react';
import About from "./containers/About";
import Login from "./containers/Login";
import Home from './containers/Home/Home.jsx';
import Dashboard from './containers/Dashboard';
import PrimaryLayout from './components/Layout';
import AddUser from './containers/AddUser/AddUser';
import {BrowserRouter, Route, Routes} from "react-router-dom";
function App(){
  return(
    <BrowserRouter>
    <PrimaryLayout>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/user/add" element={<AddUser/>} />
       <Route path="/about" element={<About/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </PrimaryLayout>
    </BrowserRouter>
  )
}
export default App;