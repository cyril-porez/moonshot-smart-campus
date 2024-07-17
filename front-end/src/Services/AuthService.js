import axios from 'axios';

async function authRegister(data){
    try {
        const response = await axios.post("", data, { headers: { "Content-Type": "application/json" } });
        console.log(response);
        return {
            status: response.status,
            data: response.data
        };
    } catch (error) {
        console.log("ERR RES REGISTER ====", error.response);
        return {
            status: error.response ? error.response.status : 500,
            data: error.response ? error.response.data : "Unknown error"
        };
    }
};

export default authRegister;