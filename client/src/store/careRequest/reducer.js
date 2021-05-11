const initialState = { allCareRequests: [] };

export default function careRequest(state = initialState, action) {
  switch (action.type) {
    case "allCareRequests":
      return {
        allCareRequests: action.payload,
      };
    case "careRequest/add":
      return { allCareRequests: [...state.allCareRequests, action.payload] };
    default:
      return state;
  }
}
