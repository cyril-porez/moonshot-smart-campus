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
            `${address_server}/activities?[filters][activitistate][$eq]=toend&populate[room]=*&populate[promos_activitie][populate]=promos`,
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

export async function getOnHoldActivity() {
    try {
        const response = axios.get(
            `${address_server}/activities?[filters][activitistate][$eq]=onhold&populate[room]=*&populate[promos_activitie][populate]=promos`,
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

export async function getActivity(id) {
    try {
        const response = axios.get(
            `${address_server}/activitites/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwt')}`
                }
            }
        )
        return response;
    } catch(error) {
        return error;
    }
}

