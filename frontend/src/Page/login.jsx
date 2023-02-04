import { useNavigate } from "react-router-dom";
import { useState } from "react";
import instance from "../instance";
import "./login.css";
import NavBar from "../Components/Nav/Nav";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from "react-toastify";

export default function Login() {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    instance
      .post("/login", loginUser)
      .then((res) => sessionStorage.setItem("token", res.data.token))
      .then(() => navigate("/ajout"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="connexion">
      <NavBar />
      <div className="box">
        <p className="texte-tit">Connexion : </p>
        <form className="form-log" onSubmit={handleLogin}>
          <label className="mail-log" htmlFor="email">
            Pseudo :{" "}
          </label>
          <input
            className="input-name"
            type="name"
            name="name"
            onChange={handleChangeLogin}
            required
          />
          <br />
          <br />
          <label className="pw-log" htmlFor="mdp">
            Password :{" "}
          </label>
          <input
            className="input-mdp"
            type="password"
            name="password"
            onChange={handleChangeLogin}
            required
          />
          <div className="log">
            <button type="submit">Se connecter</button>
          </div>
        </form>
      </div>
    </div>
  );
}
