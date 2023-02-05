import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import fusee from "../assets/images/fusee.json";
import NavBar from "../Components/Nav/Nav";

function Home() {
  return (
    <div className="home">
      <NavBar />
      <div className="head">
        <h1>👾</h1>
        <h1 className="marque">VOYAGE SPATIAL</h1>
        <h1>👾</h1>
      </div>
      <div className="texte">
        <p className="desc">
          L'espace étant ouvert au grand public depuis 2025 nous vous proposons
          des voyages dans lesquels vous pourriez découvrir toutes les richesses
          de notre systeme solaire !!!
        </p>
      </div>

      <div className="fuse">
        <Lottie
          className="fusee"
          animationData={fusee}
          style={{ width: "300px" }}
        />
      </div>
      <div className="texte">
        <Link to="/destination">
          <div className="button">
            <h4 className="titleD">Cliquer ici pour voir les destinations</h4>
          </div>
        </Link>

        {/* <Link to="/ajout">
        <div className="ajou">
          <h5>Ajouter un Trajet</h5>
        </div>
      </Link> */}
      </div>
    </div>
  );
}

export default Home;
