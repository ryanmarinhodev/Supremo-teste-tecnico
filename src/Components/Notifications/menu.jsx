import React from "react";
import { FiBell } from "react-icons/fi";
import Logo from "../../assets/logo-supremo-branco.png";

const Sidebar = () => (
  <aside className="sidebar p-4">
    <img src={Logo} alt="Logotipo Supremo" className="logo" />
    <ul className="nav flex-column mt-4">
      <li className="nav-item mb-2">
        <a href="/notifications" className="nav-link active">
          <FiBell className="me-2" /> Notificações
        </a>
      </li>
    </ul>
  </aside>
);

export default Sidebar;
