import React from "react";
import "../style/Sidebar.css";

export default function Sidebar({
  onOpenModal_SuggestActivity,
  onOpenModal_Test,
  isOpen,
  logo,
  links = [],
}) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      {logo ? <img src={logo} alt="" width="90%" /> : null}
      <a href="/">
        <div className="navbar-link">
          <img
            src={"/icons/home.png"}
            className="navbar-icon"
            alt=""
            width={32}
            height={32}
          />
          <p>Accueil</p>
        </div>
      </a>

      <div className="navbar-link" onClick={onOpenModal_SuggestActivity}>
        <img
          src={"/icons/plus.png"}
          className="navbar-icon"
          alt=""
          width={32}
          height={32}
        />
        <b>Proposition d'activité</b>
      </div>

      {/* 
            <div className="navbar-link" onClick={onOpenModal_Test}>
                <img src={"/icons/plus.png"} className="navbar-icon" alt="" width={32} height={32} />
                <p>Test</p>
            </div>
            */}

      {links.map((link) => (
        <a href={link.href}>
          <div className="navbar-link">
            <img
              src={link?.icon}
              className="navbar-icon"
              alt=""
              width={32}
              height={32}
            />
            <p>{link?.text}</p>
          </div>
        </a>
      ))}
    </aside>
  );
}
