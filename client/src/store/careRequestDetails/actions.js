import axios from "axios";
const apiUrl = "http://localhost:8080";

export function careRequest(carerequest) {
  return {
    type: "careRequest",
    payload: carerequest,
  };
}

export function fetchOneRequest(id) {
  return async function thunk(dispatch, getState) {
    const response = await axios.get(`${apiUrl}/carerequests/${id}
    `);
    const carerequest = response.data;
    dispatch(careRequest(carerequest));
  };
}
