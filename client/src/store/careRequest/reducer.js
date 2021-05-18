const initialState = { allCareRequests: [] };

export default function careRequest(state = initialState, action) {
  switch (action.type) {
    case "openStatusCareRequests":
      // console.log(action.payload);
      return {
        allCareRequests: action.payload,
      };
    case "careRequest/add":
      return { allCareRequests: [...state.allCareRequests, action.payload] };
    default:
      return state;
  }
}
