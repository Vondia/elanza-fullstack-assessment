import axios from "axios";
const apiUrl = "http://localhost:8080";

export const REQUEST_UPDATED = "REQUEST_UPDATED";

export function careRequest(carerequest) {
  return {
    type: "careRequest",
    payload: carerequest,
  };
}

export const requestUpdated = (request) => ({
  type: REQUEST_UPDATED,
  payload: request,
});

export function fetchOneRequest(id) {
  return async function thunk(dispatch) {
    const response = await axios.get(`${apiUrl}/carerequests/${id}
    `);
    const carerequest = response.data;
    dispatch(careRequest(carerequest));
    console.log("data here?", response.data);
  };
}

// changing care status
export const changeCareStatus = (id, statusOpen) => {
  console.log("action id statusopen log:", id, statusOpen);
  return async (dispatch, getState) => {
    const response = await axios.put(
      `${apiUrl}/carerequests/${id}`,
      {
        statusOpen,
      },
      console.log("statusOpen log", statusOpen)
    );
    dispatch(requestUpdated(response.data));
    dispatch(fetchOneRequest(id));
    console.log("do we get it?", response.data);
    //  catch (e) {
    //   console.error(e);
    // }
  };
};
