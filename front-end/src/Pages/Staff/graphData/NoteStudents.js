import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../../style/FeelingsStudents.css';

const criteriaData = [
    { criteria: "Compréhension", percentage: 80 },
    { criteria: "Sujet", percentage: 50 },
    { criteria: "Pédagogie", percentage: 20 },
    { criteria: "Éloquence", percentage: 20 },
    { criteria: "Pertinence", percentage: 10 }
];

const remarksData = Array(7).fill("Très intéressant. Lorem ipsum dolor sit amet...");

export function FeelingsStudents() {
    const [progressValues, setProgressValues] = useState(Array(criteriaData.length).fill(0));
    const [globalProgress, setGlobalProgress] = useState(0);

    useEffect(() => {
        criteriaData.forEach((item, index) => {
            setTimeout(() => {
                setProgressValues(prevValues => {
                    const newValues = [...prevValues];
                    newValues[index] = item.percentage;
                    return newValues;
                });
            }, index * 500); // delay each progress bar by 500ms
        });

        const totalPercentage = criteriaData.reduce((acc, item) => acc + item.percentage, 0);
        const averagePercentage = totalPercentage / criteriaData.length;

        setTimeout(() => {
            let currentProgress = 0;
            const interval = setInterval(() => {
                if (currentProgress < averagePercentage) {
                    currentProgress += 1;
                    setGlobalProgress(currentProgress);
                } else {
                    clearInterval(interval);
                }
            }, 20); // interval speed for global average progress bar
        }, criteriaData.length * 500); // start after all individual bars are filled
    }, []);

    return (
        <div className="activity-rating-container">
            <h2>Note de l’activité par les élèves</h2>
            <div className="criteria-container">
                <div className="criteria-list">
                    <div className="criteria-header">
                        <div>Critère</div>
                        <div>Moyenne</div>
                    </div>
                    {criteriaData.map((item, index) => (
                        <div className="criteria-item" key={index}>
                            <div>{item.criteria}</div>
                            <div className="min-circular-bar-container">
                                <CircularProgressbar
                                    value={progressValues[index]}
                                    text={`${progressValues[index]}%`}
                                    styles={buildStyles({
                                        pathColor: progressValues[index] < 50 ? `rgba(255, 0, 0, ${progressValues[index] / 100})` : `rgba(10, 54, 157, ${progressValues[index] / 100})`,
                                        textColor: '#3e98c7',
                                        trailColor: '#d6d6d6',
                                        textSize: '24px'
                                    })}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="global-average">
                    <h3>Moyenne globale</h3>
                    <div className="circular-bar-container">
                        <CircularProgressbar
                            value={globalProgress}
                            text={`${globalProgress}%`}
                            styles={buildStyles({
                                pathColor: globalProgress < 50 ? `rgba(255, 0, 0, ${globalProgress / 100})` : `rgba(10, 54, 157, ${globalProgress / 100})`,
                                textColor: '#3e98c7',
                                trailColor: '#d6d6d6',
                                textSize: '24px'
                            })}
                        />
                    </div>
                </div>
            </div>
            <div className="remarks-container">
                <div className="remarks-header">Remarques</div>
                {remarksData.map((remark, index) => (
                    <div className="remark-item" key={index}>
                        <div className="remark-text">{remark}</div>
                        <button className="view-more-btn">Voir plus</button>
                    </div>
                ))}
            </div>
        </div>
    );
};
