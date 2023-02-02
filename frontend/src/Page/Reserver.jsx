import React, { useState, useEffect } from "react";
import "./reserver.css";
import { useParams } from "react-router-dom";
import instance from "../instance";

function Reserver() {
  const [planets, setPlanets] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    instance
      .get(`/planete/${id}`)
      .then((result) => {
        setPlanets(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <div className="reserver">
      <h1>Reservez votre billet </h1>
      <div className="rectangle">
        <div className="photo">
          <img className="planetes" src={planets.image} alt="planetes" />
        </div>

        <div className="infos">
          <h1 className="i">
            <bold>Infos</bold>
          </h1>
          <ul className="i">
            <strong>Destination : </strong> {planets.nom}
          </ul>
          <ul className="i">
            <strong>Distance :</strong> {planets.distance} km
          </ul>
          <ul className="i">
            <strong>Temps :</strong> {planets.temp}jours
          </ul>
          <ul className="i">
            <strong>Prix :</strong> {planets.prix}
          </ul>
        </div>
      </div>

      <h1 className="moyen">Moyen de transport </h1>

      <div className="sel">
        <select className="select" name="filtre" id="filtre">
          <option value="">Choisir son moyen de transport</option>
          <option value="favori">Fusée</option>
          <option value="favori">Vaisseau AX-130</option>
        </select>
      </div>

      <div className="imagevaisseaux">
        <img
          className="vaisseau"
          alt="vaisseaux"
          src="https://trustmyscience.com/wp-content/uploads/2022/02/vaisseau-spatial-starship-inquiete-competiteurs-couv-949x534.png.webp"
        />
      </div>

      <div className="br">
        <button type="submit" className="reservez">
          Reservez votre voyage
        </button>
      </div>
    </div>
  );
}

export default Reserver;
