import "./ajouter.css";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect } from "react";
import instance from "../instance";
import NavBar from "../Components/Nav/Nav";
import Notify from "../Util/notification";

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
      Notify.error("Veuillez remplir tous les champs");
      return;
    }
    instance
      .post("/ajout-planets", registerUser)
      .then(() => {
        Notify.success("La planete a étais ajoutée correctement !");
      })
      .catch((err) => {
        console.error(err, toast.error("Une erreur c'est produite !"));
      });
  };

  const [planete, setPlanete] = useState([]);

  useEffect(() => {
    instance
      .get(`/planete`)
      .then((result) => {
        setPlanete(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const [del, setDel] = useState();

  const clickChangevalue = (e) => {
    setDel(e.target.value);
  };

  const deleting = (e) => {
    e.preventDefault();

    instance
      .delete(`/suprm-planete/${del}`)
      .then(() => {
        Notify.success("La planete a étais supprimer correctement !");
      })
      .catch((err) => {
        console.error(err, toast.error("Mauvaises informations ! ❌"));
      });
  };

  return (
    <div className="add">
      <main>
        <NavBar />
        <ToastContainer />
        <h1 className="inscription">ADMINISTRATION</h1>
        <section className="register">
          <h1 className="title-add">Ajouter une planete :</h1>
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

        <div className="delete">
          <form onSubmit={deleting}>
            <h1 className="titl-delete">Supprimer une planete :</h1>
            <select
              onChange={clickChangevalue}
              className="selects"
              name="filtre"
              id="filtre"
            >
              <option>Choisir planete a supprimer </option>
              {planete.map((supr) => (
                <option value={supr.id}>{supr.nom}</option>
              ))}
            </select>

            <button className="supprimer" type="submit">
              supprimer
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
