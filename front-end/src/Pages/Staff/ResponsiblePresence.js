import React, { useEffect, useState } from "react";
import { SelectInput } from "../../components/FormInput";
import { ToggleButton } from "../../components/Button";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { StudentTable, generateFakeStudentData } from "../../components/Tables";
import LineChart from '../../components/LineChart'; // Assurez-vous d'importer le composant correctement
import 'react-circular-progressbar/dist/styles.css';
import '../../style/SuiviPresence.css';

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

    const fakeStudentData = generateFakeStudentData(10);

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
                        <StudentTable data={fakeStudentData} />
                    </div>
                )}
            </div>
        </div>
    );
}
