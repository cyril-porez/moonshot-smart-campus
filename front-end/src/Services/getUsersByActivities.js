import axios from "axios";

const address_server = process.env.REACT_APP_ADRESS_SERVER;
const authToken = process.env.REACT_APP_TOKEN_AUTH;

export async function getUsersByActivity(id) {
  try {
    const response = await axios.get(
      `${address_server}/activities/${id}?populate[promos_activitie][populate][promos][populate]=users_permissions_users`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    return response.data.data;
  } catch (err) {
    console.log(err.stack);
    return err;
  }
}
