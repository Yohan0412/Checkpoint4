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

  const [registerTransport, setRegisterTransport] = useState({
    nom: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterUser({ ...registerUser, [name]: value });
  };

  const transporthandleChange = (e) => {
    const { name, value } = e.target;
    setRegisterTransport({ ...registerTransport, [name]: value });
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

  const handleSubmite = (e) => {
    e.preventDefault();
    const { nom, image } = registerTransport;

    if (nom === "" || image === "") {
      Notify.error("Veuillez remplir tous les champs");
      return;
    }
    instance
      .post("/ajoutvehicule", registerTransport)
      .then(() => {
        Notify.success("Le Véhicule ajouter !!! ");
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

  const [vehicule, setVehicule] = useState([]);

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

  const deletingTransport = (e) => {
    e.preventDefault();

    instance
      .delete(`/delete-vehicule/${del}`)
      .then(() => {
        Notify.success("Le véhicule a étais supprimer correctement !");
      })
      .catch((err) => {
        console.error(err, toast.error("Mauvaises informations ! ❌"));
      });
  };

  const [user, setUser] = useState([]);

  useEffect(() => {
    instance
      .get(`/user`)
      .then((result) => {
        setUser(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const deletingUser = (e) => {
    e.preventDefault();

    instance
      .delete(`/delete-user/${del}`)
      .then(() => {
        Notify.success("L'utilisateur a étais supprimer correctement !");
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
        <h1 className="title-admin">ADMINISTRATION</h1>

        <section className="add-planete">
          <h1 className="title-add-planete">Ajouter une planete :</h1>
          <form
            onSubmit={handleSubmit}
            name="register-form"
            className="register-form-planete"
          >
            <label className="donnee-planete" htmlFor="text">
              Nom planete :
            </label>
            <input
              onChange={handleChange}
              className="addd"
              type="text"
              name="nom"
              id="nom"
            />
            <label className="donnee-planete" htmlFor="distanc">
              Distance en km :{" "}
            </label>
            <input
              className="addd"
              type="number"
              name="distance"
              id="distance"
              onChange={handleChange}
            />
            <label className="donnee-planete" htmlFor="temp">
              Temps voyage :{" "}
            </label>
            <input
              className="addd"
              type="number"
              name="temp"
              id="temp"
              onChange={handleChange}
            />
            <label className="donnee-planete" htmlFor="prix">
              Prix :{" "}
            </label>
            <input
              className="addd"
              type="number"
              name="prix"
              id="prix"
              onChange={handleChange}
            />
            <label className="donnee-planete" htmlFor="image">
              Image URL :{" "}
            </label>
            <input
              className="addd"
              type="text"
              name="image"
              id="image"
              onChange={handleChange}
            />
            <button className="btn-add-planete" type="submit">
              Register
            </button>
          </form>
        </section>
        <section className="add-planete">
          <h1 className="title-add-planete">Ajouter un moyen de transport :</h1>
          <form
            onSubmit={handleSubmite}
            name="register-form"
            className="register-form-planete"
          >
            <label className="donnee-planete" htmlFor="text">
              Nom Véhicule :
            </label>
            <input
              onChange={transporthandleChange}
              className="addd"
              type="text"
              name="nom"
              id="nom"
            />
            <label className="donnee-planete" htmlFor="image">
              Image URL :
            </label>
            <input
              className="addd"
              type="text"
              name="image"
              id="image"
              onChange={transporthandleChange}
            />
            <button className="btn-add-planete" type="submit">
              Register
            </button>
          </form>
        </section>
        <div className="delete">
          <form className="form-suppr-planete" onSubmit={deleting}>
            <h1 className="title-delete">Supprimer une planete :</h1>
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
        <div className="delete-vehicule">
          <form className="form-suppr-planete" onSubmit={deletingTransport}>
            <h1 className="title-delete">Supprimer un véhicule :</h1>
            <select
              onChange={clickChangevalue}
              className="selects"
              name="filtre"
              id="filtre"
            >
              <option>Choisir un véhicule à supprimer </option>
              {vehicule.map((supr) => (
                <option value={supr.id}>{supr.nom}</option>
              ))}
            </select>

            <button className="supprimer" type="submit">
              supprimer
            </button>
          </form>
        </div>
        <div className="delete">
          <form className="form-suppr-planete" onSubmit={deletingUser}>
            <h1 className="title-delete">Supprimer un utilisateur :</h1>
            <select
              onChange={clickChangevalue}
              className="selects"
              name="filtre"
              id="filtre"
            >
              <option>Choisir un utilisateur à supprimer </option>
              {user.map((supr) => (
                <option value={supr.id}>{supr.name}</option>
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
