import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../Page/Home";
import Destination from "../Page/destination";
import Reserver from "../Page/Reserver";
import Ajouter from "../Page/ajouter";
import Login from "../Page/login";
import Insciption from "../Page/inscription";

function Routeur() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/reserver/:id" element={<Reserver />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Ajouter />} />
        <Route path="/inscription" element={<Insciption />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routeur;
