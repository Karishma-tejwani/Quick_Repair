// import React from "react";
// import { Route, Routes, useLocation } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Company from "./Company";
// import Contact from "./Contact";
// import Login from "./Login";
// import Registration from "./Registration";
// import Notfound from "./Notfound";
// import HomeCleaning from "../Services/HomeCleaning";
// import Carpentry from "../Services/Carpentry";
// import ElectricalAppliance from "../Services/ElectricalAppliance";
// import HomePainting from "../Services/HomePainting";
// import Laundry from "../Services/Laundry";
// import Plumbing from "../Services/Plumbing";
// import { AnimatePresence } from "framer-motion/dist/framer-motion";

// function AnimatedRoutes() {
//   const location = useLocation();

//   return (
//     <>
//       <AnimatePresence>
//       <Routes location={location} key={location.pathname}>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/cleaning" element={<HomeCleaning />} />
//         <Route path="/carpentry" element={<Carpentry />} />
//         <Route path="/electrical" element={<ElectricalAppliance />} />
//         <Route path="/plumbing" element={<HomePainting />} />
//         <Route path="/painting" element={<Laundry />} />
//         <Route path="/laundry" element={<Plumbing />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Registration />} />
//         <Route path="/company" element={<Company />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<Notfound />} />
//       </Routes>
//       </AnimatePresence>
//     </>
//   );
// }

// export default AnimatedRoutes;
