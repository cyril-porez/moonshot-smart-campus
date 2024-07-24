import axios from "axios";

const address_server = process.env.REACT_APP_ADRESS_SERVER;
const authToken = process.env.REACT_APP_TOKEN_AUTH;

export async function getActivitiesListAcc(id) {
  try {
    const response = await axios.get(
      `${address_server}/users/${id}?populate[activities][populate][promos_activitie][populate]=promos`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err.stack);
    return err;
  }
}
