import axios from "axios";

const address_server = process.env.REACT_APP_ADRESS_SERVER;

export async function getActivityInfo(id) {
    try {
        const response = axios.get(
            `${address_server}/activities/${id}?[populate]=promos_activitie&[populate]=activity_type`
        )

        const data = response.data.data;
        const _id = data.id;
        const subject = data.attributes.subject;
        const promoId = data.attributes.promos_activitie.data.id;
        const activityTypeName = data.attributes.activity_type.data.attributes.name;

        const result = {
            id: _id,
            subject: subject,
            promoId: promoId,
            activityTypeName: activityTypeName
        };
        console.log(result)
        return result;
    } catch(error) {
        console.log("ERR GET ACTIVITY INFO === ", error);
        return error.response;
    }
}

export async function getActivities() {
    try {
        const response = axios.get(
            `${address_server}/activities?sort=Hourly:desc`
        )
        return (await response).data.data.data;
    } catch(error) {
        console.log("ERR GET ACTIVITIES INFO === ", error.response);
        return error.response;
    }
}