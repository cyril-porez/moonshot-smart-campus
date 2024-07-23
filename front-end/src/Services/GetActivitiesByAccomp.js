import axios from "axios";

const address_server = process.env.REACT_APP_ADRESS_SERVER;
const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzQsImlhdCI6MTcyMTY2NzAwNCwiZXhwIjoxNzI0MjU5MDA0fQ.G5v2tekSkQHeRSTM4dfTSZP4bL7lutLKLfsvAx11_Zk";
export async function getActivitiesListAcc(id) {
  try {
    const response = await axios.get(
      `${address_server}/users/36?populate[activities][populate][promos_activitie][populate]=promos`,
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
