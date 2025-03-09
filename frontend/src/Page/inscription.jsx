import { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../instance";
import "./inscription.css";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [registerUser, setRegisterUser] = useState({
    name: "",
    password: "",
    hashedpassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterUser({ ...registerUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, password, confirmPassword } = registerUser;
    if (password !== confirmPassword) {
      console.log("les mdp correspondent pas !!!");
      return;
    }
    if (name === "" || password === "" || confirmPassword === "") {
      console.log("remplir tout les champs !!!");
      return;
    }
    instance
      .post("/newuser", registerUser)
      .then(() => alert("Inscription réussie ! 🎉"))
      .then(() => navigate("/login"))
      .catch(() => alert("erreur "));
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main>
      <section className="register">
        <h1>Inscription</h1>
        <form
          onSubmit={handleSubmit}
          name="register-form"
          className="register-form"
        >
          <label htmlFor="name">Nom</label>
          <input onChange={handleChange} type="name" name="name" id="name" />
          <label htmlFor="password">Mot de passe</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            onChange={handleChange}
          />
          <label htmlFor="confirmPassword">Confirmer votre mot de passe</label>
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            id="confirmPassword"
            onChange={handleChange}
          />
          <label className="showPassword" htmlFor="show-password">
            <input
              type="checkbox"
              name="show-password"
              id="show-password"
              onChange={togglePassword}
            />
            Show Password
          </label>
          <button className="btn-register" type="submit">
            Register
          </button>
        </form>
      </section>
    </main>
  );
}
