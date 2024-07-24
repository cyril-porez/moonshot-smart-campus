import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Range from "../../components/Range";
import "../../style/ActivityReview.css";
import { getUserInfo } from "../../Services/UserInfo";
import { sendReviewStaff } from "../../Services/ActivityReview";
import { useNavigate } from "react-router-dom";

/**
 * Là où les élèves pourront donner leur avis sur une activité
 */
export function ActivityReview() {
    const { register, handleSubmit } = useForm();
    const [users_permissions_user, setUserId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchUserInfo() {
            try {
                const user = await getUserInfo();
                setUserId(user.id);
            } catch (error) {
                console.error("Erreur lors de la récupération des informations utilisateur:", error);
            }
        }

        fetchUserInfo();
    }, []);

    const onSubmit = async (data) => {
        if (users_permissions_user) {
            const reviewData = { ...data, users_permissions_user };
            console.log("Review Data:", reviewData);
            try {
                await sendReviewStaff(reviewData);
                navigate("/");
            } catch (error) {
                console.error("Erreur lors de l'envoi de l'avis:", error);
            }
        } else {
            console.error("L'identifiant utilisateur n'a pas été récupéré.");
        }
    };

    return (
        <div className="range-align">
            <h3>Donnez votre avis sur « Nom du sujet »</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="form-range">
                <Range label="relevance_presentation" register={register} />
                <Range label="estimated_presentation_time" register={register} />
                <Range label="quality_support" register={register} />
                <Range label="technical_agreement" register={register} />
                <Range label="student_interest" register={register} />
                <div className="remarque-container">
                    <label>Remarque</label>
                    <textarea
                        placeholder="Écrivez ici vos remarques, opinions, etc..."
                        className="remarque"
                        {...register("comment")}
                    ></textarea>
                    <input className="form-btn" type="submit" />
                </div>
            </form>
        </div>
    );
}
