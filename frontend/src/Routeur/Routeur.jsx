import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "../Page/Home";
import Destination from "../Page/destination";
import Reserver from "../Page/Reserver";
import Ajouter from "../Page/ajouter";
import Footeur from "../Components/Footeur";

function Routeur() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/reserver/:id" element={<Reserver />} />
        <Route path="ajout" element={<Ajouter />} />
      </Routes>
      <Footeur />
    </BrowserRouter>
  );
}

export default Routeur;
