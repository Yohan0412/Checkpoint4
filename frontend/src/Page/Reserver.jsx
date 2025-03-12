import React, { useState, useEffect, useRef } from "react";
import "./reserver.css";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import instance from "../instance";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../Components/Nav/Nav";

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

  const [name, setName] = useState("");

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_dr6o0bd",
      "template_ztzlzdm",
      form.current,
      "StsUHFSJwPz3tawo2"
    );
  };

  const notify = () =>
    toast(
      `Merci ${name} ! Votre Voyage sur ${planets.nom} pour un total de ${prix} $ viens d'être accepté , un mail de confirmation vous sera envoyé !!! `
    );

  return (
    <div className="reserver">
      <NavBar />
      <h1 className="gros"> 🚀 Direction {planets.nom} 🚀 </h1>
      <div className="rectangle">
        <div className="haut">
          <div className="gene-planete">
            <img className="img-planetes" src={planets.image} alt="planetes" />
          </div>
          <div className="gen-transport">
            <div className="imagevaisseaux">
              {filtre.map((fi) => (
                <img className="img-vaisseau" alt="vaisseaux" src={fi.image} />
              ))}
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
          </div>
        </div>
        <div className="infos">
          <h1 className="inf">
            <bold>Infos : </bold>
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

      <h1 className="rez"> 👨‍💻 RESERVEZ LE VOYAGE 👨‍💻 </h1>
      <div className="formu">
        <form ref={form} onSubmit={sendEmail}>
          <label>
            <h3 className="ff">Prenom :</h3>
            <input onChange={nameChange} type="text" value={name} />
          </label>
          <label>
            <h3 className="ff">Mail :</h3>
            <input type="text" />
          </label>
          <div className="br">
            <button
              type="submit"
              onClick={() => {
                notify();
              }}
            >
              Reservez votre voyage
            </button>
          </div>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Reserver;
