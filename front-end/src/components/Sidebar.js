import React from "react";
import "../style/Sidebar.css";

export default function Sidebar({ onOpenModal_SuggestActivity, isOpen, logo, links = [], userType }) {
    return (
        <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            {logo ? <img src={logo} alt="" width="90%"/>  : null}
            <a href="/">
                <div className="navbar-link">
                    <img src={"/icons/home.png"} className="navbar-icon" alt="" width={32} height={32}/>
                    <p>Accueil</p>
                </div>
            </a>

            {/* Si c'est un étudiant ou un responsable pédagogique, ils ont la possibilité de proposer/créer une activité */}
            {userType === "student" ? (
                <div className="navbar-link" onClick={onOpenModal_SuggestActivity}>
                    <img src={"/icons/plus.png"} className="navbar-icon" alt="" width={32} height={32} />
                    <b>Proposition d'activité</b>
                </div>
            ) : userType === "responsable" ? (
                <div className="navbar-link" onClick={onOpenModal_SuggestActivity}>
                    <img src={"/icons/plus.png"} className="navbar-icon" alt="" width={32} height={32} />
                    <b>Créer une nouvelle activité</b>
                </div>
            ) : null}
            
            {/* 
            <div className="navbar-link" onClick={onOpenModal_Test}>
                <img src={"/icons/plus.png"} className="navbar-icon" alt="" width={32} height={32} />
                <p>Test</p>
            </div>
            */}

            {links.map(link => (
                <a href={link.href}>
                    <div className="navbar-link">
                        <img src={link?.icon} className="navbar-icon" alt="" width={32} height={32}/>
                        <p>{link?.text}</p>
                    </div>
                </a>
            ))}

      {/* 
            <div className="navbar-link" onClick={onOpenModal_Test}>
                <img src={"/icons/plus.png"} className="navbar-icon" alt="" width={32} height={32} />
                <p>Test</p>
            </div>
            */}
    </aside>
  );
}
