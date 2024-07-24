import { useNavigate } from "react-router-dom";
import { FormButton } from "../../components/Button";

export default function ActivityAfterTimer() {
    const navigate = useNavigate();
    let attending = 23, nbStudents = 40;

    return (
        <div style={{ textAlign: 'center', width: '50%', margin: 'auto' }}>
            <h1>Activité terminée !</h1>
            <p>Nombre de participants : {attending} / {nbStudents}</p>

            <FormButton
                text={"Donnez votre ressenti"}
                onClick={() => navigate("/activity-review")}
            />
        </div>
    )
}