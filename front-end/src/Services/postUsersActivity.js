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
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
}

export async function getFinishedActivity() {
    try {
        const response = axios.get(
            `${address_server}/activities?[activitistate]="to end"`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwt')}`
                }
            }
        );
        return (await response).data.data
    } catch(error) {
        return error;
    }
}