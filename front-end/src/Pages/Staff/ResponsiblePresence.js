import React, { useEffect, useState } from "react";
import { SelectInput } from "../../components/FormInput";
import { ToggleButton } from "../../components/Button";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import LineChart from '../../components/LineChart'; // Assurez-vous d'importer le composant correctement
import 'react-circular-progressbar/dist/styles.css';
import '../../style/SuiviPresence.css';

// Composant de tableau de liste d'élèves pour l'affichage en mode liste
function StudentList() {
    const students = [
        { id: 1, name: "John Doe", presence: "80%" },
        { id: 2, name: "Jane Smith", presence: "90%" },
        { id: 3, name: "Sam Johnson", presence: "85%" },
        // Ajoutez d'autres élèves ici
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Presence</th>
                </tr>
            </thead>
            <tbody>
                {students.map(student => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.presence}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

/**
 * Page d'où les responsables/accompagnateurs pourront suivre la présence des élèves
 * en fonction des différents filtres
 */
export function ResponsiblePresence() {
    const targetPercentage = 25;
    const [percentage, setPercentage] = useState(0);
    const [isGraphView, setIsGraphView] = useState(true);

    useEffect(() => {
        const duration = 500; // Durée de l'animation en millisecondes
        const increment = targetPercentage / (duration / 10); // Incrément du pourcentage
        let currentPercentage = 0;

        const interval = setInterval(() => {
            currentPercentage += increment;
            if (currentPercentage >= targetPercentage) {
                currentPercentage = targetPercentage;
                clearInterval(interval);
            }
            setPercentage(currentPercentage);
        }, 10);

        return () => clearInterval(interval);
    }, [targetPercentage]);

    // Exemple de données pour le graphique
    const labels = ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'];
    const data = [30, 20, 10, 40, 70, 90, 5, 8, 36, 60, 80];
    const chartLabel = 'Data 1';

    const handleToggle = (isToggled) => {
        setIsGraphView(!isToggled);
    };

    return (
        <div className="suivi-presence-container">
            <div className="filters">
                <SelectInput legend={"Filtrer par promo"} hasDefaultOption={true} />
                <SelectInput legend={"Filtrer par période"} hasDefaultOption={true} />
                <SelectInput legend={"Filtrer par type d’activité"} hasDefaultOption={true} />
            </div>
            <div className="toggle-section">
                <span className="toggle-label">Graphique</span>
                <ToggleButton onClick={handleToggle} />
                <span className="toggle-label">Liste</span>
            </div>
            <div className="content">
                <div className="circular-bar">
                    <h3>Taux de présence</h3>
                    <CircularProgressbar
                        value={percentage}
                        text={`${Math.round(percentage)}%`}
                        styles={buildStyles({
                            pathTransitionDuration: 0.15,
                        })}
                    />
                </div>
                {isGraphView ? (
                    <>
                        <div className="line-chart">
                            <LineChart labels={labels} data={data} label={chartLabel} />
                        </div>
                    </>
                ) : (
                    <div className="student-list">
                        <StudentList />
                    </div>
                )}
            </div>
        </div>
    );
}
