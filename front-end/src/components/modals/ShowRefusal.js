export default function ShowRefusal({ data, closeModal }) {

    return (
        <div className="absence-body">
                <h3 className='absence-name'>{"Sujet: " + data.subject ?? "Erreur - pas de sujet"}</h3>
                <h2 className='h2-absence'>Motif de refus d'activité</h2>
                <p className='absence-reason'>{data.reason ?? "Erreur - pas de raison" }</p>
                <button className="button-Absence" value="Fermer" onClick={closeModal}>Fermer</button>
        </div>
    );
}
