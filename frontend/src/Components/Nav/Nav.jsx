import React from "react";
import { stack as Menu } from "react-burger-menu";
import "./Nav.css";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="menuBurger">
        <Menu>
          <a className="menu-item" href="/">
            🖱️ - Accueil
          </a>
          <a className="menu-item" href="/destination">
            🛸 - Voir les Destinations
          </a>
          <a className="menu-item" href="/login">
            ⚙️ - Admin
          </a>
        </Menu>
      </div>
    </div>
  );
}

export default NavBar;
