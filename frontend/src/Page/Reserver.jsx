import React, { useState, useEffect } from "react";
import "./reserver.css";
import { useParams } from "react-router-dom";
import instance from "../instance";

function Reserver() {
  const [planets, setPlanets] = useState([]);
  const [vehicule, setVehicule] = useState([]);
  const { id } = useParams();
  const [filtre, setFilter] = useState(vehicule);
  const [prix, setPrix] = useState("Choisir Moyen Transport !  /");
  const [temps, setTemps] = useState("Choisir Moyen Transport ! /");

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

  useEffect(() => {
    instance
      .get(`/vehicule`)
      .then((result) => {
        setVehicule(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleSelect = (e) => {
    setFilter(
      vehicule.filter((fus) => fus.id === parseInt(e.target.value, 10))
    );

    if (parseInt(e.target.value, 10) === 1) {
      setPrix(planets.prix * 2);
    } else if (parseInt(e.target.value, 10) === 2) {
      setPrix(planets.prix * 5);
    }

    if (parseInt(e.target.value, 10) === 1) {
      setTemps(planets.temp);
    } else if (parseInt(e.target.value, 10) === 2) {
      setTemps(planets.temp / 3);
    }
  };

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
            <strong>Temps :</strong> {temps} jours
          </ul>

          <ul className="i">
            <strong>Prix :</strong> {prix} $
          </ul>
        </div>
      </div>

      <h1 className="moyen">Moyen de transport </h1>

      <div className="sel">
        <select
          onChange={handleSelect}
          className="select"
          name="filtre"
          id="filtre"
        >
          <option value="x">Choisir son moyen de transport</option>
          {vehicule.map((veh) => (
            <option value={veh.id}>{veh.nom}</option>
          ))}
        </select>
      </div>

      <div className="imagevaisseaux">
        {filtre.map((fi) => (
          <img className="vaisseau" alt="vaisseaux" src={fi.image} />
        ))}
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