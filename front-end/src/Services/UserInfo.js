import axios from "axios";
import { jwtDecode } from "jwt-decode"

const address_server = process.env.REACT_APP_ADRESS_SERVER;

export async function getUserInfo() {
    try {
        const token = localStorage.getItem('jwt');
        const userId = jwtDecode(token).id;

        const response = await axios.get(
            `${address_server}/users/${userId}?[populate]=status_role`
        );
        return response.data;
    } catch (error) {
        console.log("ERR GET USER INFO === ", error.response);
        return error.response;
    }
}

export function isLoggedIn() {
    return (typeof localStorage.getItem('jwt') !== 'undefined') && (localStorage.getItem('jwt') !== null);
}