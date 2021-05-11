import axios from "axios";

const apiUrl = "http://localhost:8080";

//all requests
export function allCareRequests(carerequests) {
  return {
    type: "allCareRequests",
    payload: carerequests,
  };
}

export function fetchCareRequests() {
  return async function thunk(dispatch, getState) {
    const response = await axios.get(`${apiUrl}/carerequests
    `);
    const carerequests = response.data;
    dispatch(allCareRequests(carerequests));
  };
}
