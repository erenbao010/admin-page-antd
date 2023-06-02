import "./App.css";
import React from "react";
import About from "./containers/About";
import Login from "./containers/Login";
import Home from "./containers/Home/Home.jsx";
import Dashboard from "./containers/Dashboard";
import PrimaryLayout from "./components/Layout";
import AddUser from "./containers/User/AddUser";
import Chart from "./components/Chart/Grantchart";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <PrimaryLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user/add" element={<AddUser />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </PrimaryLayout>
      <Routes>
        <Route path="/chart" element={<Chart />} />
      </Routes>
    </>
  );
}
export default App;
