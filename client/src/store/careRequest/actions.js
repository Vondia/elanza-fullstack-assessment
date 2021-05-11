import axios from "axios";

const apiUrl = "http://localhost:8080";

//all requests
export function allCareRequests(carerequests) {
  return {
    type: "allCareRequests",
    payload: carerequests,
  };
}

//new request
export const newCareRequest = (request) => ({
  type: "careRequest/add",
  payload: request,
});

//fetch all requests
export function fetchCareRequests() {
  return async function thunk(dispatch, getState) {
    const response = await axios.get(`${apiUrl}/carerequests
    `);
    const carerequests = response.data;
    dispatch(allCareRequests(carerequests));
  };
}

//add new care request
export const postCareRequest = (
  clientName,
  careNeeded,
  startDate,
  endDate,
  extraInformation,
  history
) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${apiUrl}/carerequests`, {
        clientName,
        careNeeded,
        startDate,
        endDate,
        extraInformation,
      });
      dispatch(newCareRequest(response.data));
      history.push("/");
    } catch (e) {
      console.error(e);
    }
  };
};
