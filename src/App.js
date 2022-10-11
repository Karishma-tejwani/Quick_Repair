import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Company from "./Components/Company";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Notfound from "./Components/Notfound";
import HomeCleaning from "./Services/HomeCleaning";
import Carpentry from "./Services/Carpentry";
import ElectricalAppliance from "./Services/ElectricalAppliance";
import HomePainting from "./Services/HomePainting";
import Laundry from "./Services/Laundry";
import Plumbing from "./Services/Plumbing";
import Dashboard from "./Dashboard/Dashboard";
import Service from "./Dashboard/Service";
import Customers from "./Dashboard/Customers";
import Orders from "./Dashboard/Orders";
import Edit from "./Dashboard/Edit";
import Workers from "./Dashboard/Workers";
// import Footer from './Footer/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cleaning" element={<HomeCleaning />} />
        <Route path="/carpentry" element={<Carpentry />} />
        <Route path="/electrical" element={<ElectricalAppliance />} />
        <Route path="/plumbing" element={<Plumbing />} />
        <Route path="/painting" element={<HomePainting />} />
        <Route path="/laundry" element={<Laundry />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />

        {/* -------------Admin Dashboard---------- */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/service" element={<Service />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/workers" element={<Workers />} />
        {/* <Route path="/Workers/:id" element={<Workers />} /> */}
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
