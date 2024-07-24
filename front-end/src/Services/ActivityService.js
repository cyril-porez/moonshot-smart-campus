import axios from "axios";

export async function getActivityTypes() {
    try {
        let serverUrl = process.env.REACT_APP_ADRESS_SERVER;
        let url = `${serverUrl}/activity-types`;
        const response = await axios.get(url);
        return response
    }
    catch (error) {
        console.log("ERR GET ACTIVITY TYPES === ", error.response);
        return error.response;
    }
}

export async function getPromos() {
    try {
        let serverUrl = process.env.REACT_APP_ADRESS_SERVER;
        let url = `${serverUrl}/promos`;
        const response = await axios.get(url);
        console.log(response.data);
        return response
    }
    catch (error) {
        console.log("ERR GET PROMOS === ", error.response);
        return error.response;
    }
}