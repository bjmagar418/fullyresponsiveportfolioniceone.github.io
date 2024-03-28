import React from "react";
import Home from './Pages/Home';
import Skill from "./Pages/Skill";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import { Route, Routes,BrowserRouter, } from "react-router-dom";
import Layout from "./Pages/Layout";
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Skill" element={<Skill />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
