/* eslint-disable jsx-a11y/label-has-associated-control */
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
      .then(() => navigate("/admin"))
      .catch((err) => console.error(err));
  };

  return (
    <main className="connexion">
      <NavBar />
      <section>
        <h1 className="titleConnexion">Connexion</h1>
        <div className="boxConnexion">
          <form className="form-log" onSubmit={handleLogin}>
            <label className="mail-log" htmlFor="email">
              Pseudo :
            </label>
            {/* Pseudo :{" "} */}
            <input
              className="input-name"
              type="name"
              name="name"
              onChange={handleChangeLogin}
              required
            />
            <label className="pw-log" htmlFor="mdp">
              Password :
            </label>
            <input
              className="input-mdp"
              type="password"
              name="password"
              onChange={handleChangeLogin}
              required
            />
            <button className="btn-login" type="submit">
              Se connecter
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
