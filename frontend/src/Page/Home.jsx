import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>VOYAGE SPATIAL</h1>

      <div className="texte">
        <p className="desc">
          L'espace étant ouvert au grand public depuis 2025 nous vous proposon
          des voyage dans lequelle vous pouvais découvrire toutee les richesse
          de nos planetes
        </p>
      </div>

      <Link to="/destination">
        <div className="button">
          <h4 className="titleD">Cliquer ici pour voir les destinations</h4>
        </div>
      </Link>

      <Link to="/ajout">
        <div className="ajou">
          <h5>Ajouter un Trajet</h5>
        </div>
      </Link>
    </div>
  );
}

export default Home;
