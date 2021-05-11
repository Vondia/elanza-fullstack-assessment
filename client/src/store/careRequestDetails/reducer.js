const initialState = {
  careRequest: [],
};

export default function careRequestDetails(state = initialState, action) {
  switch (action.type) {
    case "careRequest":
      return { careRequest: [action.payload] };

    default:
      return state;
  }
}
