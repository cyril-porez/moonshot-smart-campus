import axios from 'axios';


export const sendReviewStudent = async (reviewData) => {
    const requestBody = {
        data: {
            comment: reviewData.comment,
            comprehension: reviewData.comprehension,
            subject: reviewData.subject,
            pedagogy: reviewData.pedagogy,
            eloquence: reviewData.eloquence,
            relevance: reviewData.relevance,
            activity: 4,
            users_permissions_user: reviewData.users_permissions_user
        }
    }
    try {
        const response = await axios.post(`${process.env.REACT_APP_ADRESS_SERVER}/student-evaluations`, requestBody);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'avis:', error);
        throw error;
    }
};

export const sendReviewStaff = async (reviewData) => {
    const requestBody = {
        data: {
            comment: reviewData.comment,
            relevance_presentation: reviewData.comprehension,
            estimated_presentation_time: reviewData.estimated_presentation_time,
            quality_support: reviewData.quality_support,
            technical_agreement: reviewData.technical_agreement,
            student_interest: reviewData.student_interest,
            activity: 4,
            users_permissions_user: reviewData.users_permissions_user
        }
    }
    try {
        const response = await axios.post(`${process.env.REACT_APP_ADRESS_SERVER}/staff-evaluations`, requestBody);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'avis:', error);
        throw error;
    }
};
