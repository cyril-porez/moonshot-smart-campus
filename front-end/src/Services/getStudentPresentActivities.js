import axios from "axios";

const address_server = process.env.REACT_APP_ADRESS_SERVER;
const authToken = process.env.REACT_APP_TOKEN_AUTH;

export async function getStudentPresentActivity(id) {
  try {
    const response = await axios.get(
      `${address_server}/activities/${id}?populate=users_activities`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    return response.data.data.attributes;
  } catch (err) {
    console.log(err.stack);
    return err;
  }
}
