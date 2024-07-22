import axios from "axios";
import bcrypt from "bcryptjs";
import { getUserInfo } from "./UserInfo";

const address_server = process.env.REACT_APP_ADRESS_SERVER;

export async function authRegister(data) {
  try {
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(data.password, salt);

    const requestBody = {
      username: data.username,
      email: data.email,
      password: data.password,
      status_role: 1,
    };

    console.log("Request body:", requestBody);
    const response = await axios.post(
      `${address_server}/auth/local/register`,
      requestBody
    );
    return response;
  } catch (error) {
    console.log("ERR RES REGISTER === ", error.response);
    return error.response;
  }
}

export async function authLogin(data) {
  try {
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(data.password, salt);
    // console.log(hashedPassword);

    const requestBody = {
      identifier: data.email,
      password: data.password,
    };
    console.log(data);
    const response = await axios.post(
      `${address_server}/auth/local/`,
      requestBody
    );
    
    return response;
  } catch (error) {
    console.log("ERR LOGIN ==", error);
    return error.response;
  }
}
