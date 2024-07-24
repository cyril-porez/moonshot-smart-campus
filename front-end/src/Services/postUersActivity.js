import axios from "axios";

const address_server = process.env.REACT_APP_ADRESS_SERVER;
const authToken = process.env.REACT_APP_TOKEN_AUTH;

export async function postUsersActivity(idUser, idActivity) {
  try {
    const response = await axios.post(
      `${address_server}/users-activities`,
      {
        data: {
          activity: idActivity,
          users_permissions_users: idUser,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
}
