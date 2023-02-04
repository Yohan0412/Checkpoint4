import "./ajouter.css";
import { useState } from "react";
import instance from "../instance";
import NavBar from "../Components/Nav/Nav";

export default function Ajouter() {
  const [registerUser, setRegisterUser] = useState({
    nom: "",
    distance: parseInt("", 10),
    temp: parseInt("", 10),
    prix: parseInt("", 10),
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterUser({ ...registerUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nom, distance, temp, prix, image } = registerUser;

    if (
      nom === "" ||
      distance === "" ||
      temp === "" ||
      prix === "" ||
      image === ""
    ) {
      console.warn("Veuillez remplir tous les champs");
      return;
    }
    instance
      .post("/ajout-planets", registerUser)
      .then(() => console.warn("Planete ajoutez avec succes ! 🎉"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="add">
      <main>
        <NavBar />
        <section className="register">
          <h1 className="inscription">Inscription</h1>
          <form
            onSubmit={handleSubmit}
            name="register-form"
            className="register-form"
          >
            <label htmlFor="text">Nom planete :</label>
            <input
              onChange={handleChange}
              className="addd"
              type="text"
              name="nom"
              id="nom"
            />
            <label htmlFor="distanc">Distance en km : </label>
            <input
              className="addd"
              type="number"
              name="distance"
              id="distance"
              onChange={handleChange}
            />
            <label htmlFor="temp">Temps voyage : </label>
            <input
              className="addd"
              type="number"
              name="temp"
              id="temp"
              onChange={handleChange}
            />
            <label className="showPassword" htmlFor="prix">
              Prix :
            </label>
            <input
              className="addd"
              type="number"
              name="prix"
              id="prix"
              onChange={handleChange}
            />
            <label className="showPassword" htmlFor="image">
              Image URL :
            </label>
            <input
              className="addd"
              type="text"
              name="image"
              id="image"
              onChange={handleChange}
            />
            <button className="addd" type="submit">
              Register
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
