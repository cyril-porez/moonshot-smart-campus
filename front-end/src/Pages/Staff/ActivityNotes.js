import { useState } from 'react';
import { ActivityTable } from "../../components/Tables";

export function ActivityNotes(userType) {

    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    // get those from the database
    const accompagnateurs = ["Zebi", "Habib", "Ridha", "Zidanne"]
    const promo = ["B1", "B2", "B3", "C1", "C2", "C3"]

    //and use them as filter to get those
    const dataSet1 = [{ id: 1, subject: "I want to kill myself", promo: "B2", activityTypes: "HowTo", helper: "Habib", date: "2024-07-18", time: "09h00", expectedTime: 30, room: "A2", remark: "C'était claqué au sol" }]
    const dataSet2 = [{ id: 1, subject: "I want to kill myself faster", promo: "B2", activityTypes: "HowTo", helper: "Habib", date: "2024-07-18", time: "09h00", expectedTime: 30, room: "A2", remark: "HABIIIIIIIIIIIB" }]
    

    return (
        <div>
            {userType.userType === "responsable" ? (
                <>
                    {isToggled ? (
                        <>
                            <h1>Notes des élèves</h1>
                            <select>
                                <option hidden value="">Promo</option>
                                {promo.map((option, index) => (
                                    <option key={index} value={option}>
                                        
                                        {option}
                                    </option>
                                ))}
                            </select>
                            <button onClick={handleToggle}>
                                {isToggled ? 'Notes élèves' : 'Notes accompagnateurs'}
                            </button>
                          
                            <ActivityTable type={"notes"} data={dataSet1} />
                        </>
                    ) : (
                        <>
                            <h1>Notes des accompagnateurs</h1>
                            <select>
                                <option hidden value="">Accompagnateurs</option>
                                {accompagnateurs.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                            <select>
                                <option hidden value="">Promo</option>
                                {promo.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                            <button onClick={handleToggle}>
                                {isToggled ? 'Notes élèves' : 'Notes accompagnateurs'}
                            </button>
                            <ActivityTable type={"notes"} data={dataSet2} />
                        </>

                    )}

                </>
            )

                : userType.userType === "accompagnateur" ? (
                    <>
                        <h1>Notes des élèves</h1>
                        <select>
                                <option hidden value="">Promo</option>
                                {promo.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        <ActivityTable type={"note"} data={dataSet1} />
                    </>
                ) : null}
        </div>

    )
}