import "./destination.css";
import Lottie from "lottie-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import galaxie from "../assets/galaxie.jpg";
import moon from "../assets/images/Moon.json";
import instance from "../instance";

function Destination() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    instance
      .get(`/planete`)
      .then((result) => {
        setPlanets(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="page">
      <h1>Nos destinations </h1>
      <img alt="Fond" className="fond" src={galaxie} />

      <div className="planete">
        {planets.map((plan) => (
          <Link to={`/reserver/${plan.id}`}>
            <div className="lune">
              <h2>{plan.nom}</h2>
              <Lottie
                value={plan.id}
                alt="planetes"
                animationData={moon}
                style={{ width: "300px" }}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Destination;
