import "../style/Sidebar.css";

export default function Sidebar({ onOpenModal_SuggestActivity, isOpen, logo, links = [], userType }) {
    return (
        <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            {logo ? <img src={logo} alt="" width="90%" /> : null}

            <h3 className="sidebar-title">SYLLAVERSE</h3>

            <a href="/">
                <div className="navbar-link">
                    <img src={"/icons/home.png"} className="navbar-icon" alt="" width={32} height={32} />
                    <p>Accueil</p>
                </div>
            </a>

            {/* Si c'est un étudiant ou un responsable pédagogique, ils ont la possibilité de proposer/créer une activité */}
            {userType?.name === "étudiant" ? (
                <div className="navbar-link" onClick={onOpenModal_SuggestActivity}>
                    <img src={"/icons/plus.png"} className="navbar-icon" alt="" width={32} height={32} />
                    <b>Proposition d'activité</b>
                </div>
            ) : userType?.name === "responsable" ? (
                <div className="navbar-link" onClick={onOpenModal_SuggestActivity}>
                    <img src={"/icons/plus.png"} className="navbar-icon" alt="" width={32} height={32} />
                    <b>Créer une nouvelle activité</b>
                </div>
            ) : null}

            {links.map(link => {
                return (
                    <a href={link.href}>
                        <div className="navbar-link">
                            <img src={link?.icon} className="navbar-icon" alt="" width={32} height={32} />
                            <p>{link?.text}</p>
                        </div>
                    </a>)
            })}
        </aside>
    );
}
