const initialState = {
  field: undefined,
  isFetching: false,
  error: undefined,
};

export default function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return Object.assign({}, state, {
        isFetching: true,
      });
    case 'FETCH_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        field: action.field,
      });
    case 'FETCH_FAILURE':
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });
    default:
      return state;
  }
}
