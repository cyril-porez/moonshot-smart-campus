import axios from 'axios';
import bcrypt from 'bcryptjs';


async function authRegister(data){
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(data.password, salt);

        const modifiedData = {
            ...data,
            password: hashedPassword
        };

        const response = await axios.post("", modifiedData, { headers: { "Content-Type": "application/json" } });
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