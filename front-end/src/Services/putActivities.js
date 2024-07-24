import axios from "axios";

const address_server = process.env.REACT_APP_ADRESS_SERVER;
const authToken = localStorage.getItem("jwt");

export async function putActivitiesStatus(id, stateActivity) {
  try {
    const response = await axios.put(`${address_server}/activities/${id}`, {
      data: {
        activitistate: stateActivity,
      },
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err.stack);
    return err;
  }
}
