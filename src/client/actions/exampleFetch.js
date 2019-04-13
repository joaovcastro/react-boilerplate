export default function exampleFetch() {
  return function(dispatch) {
    dispatch({
      type: 'FETCH_REQUEST',
    });
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(async response => {
        const body = await response.json();
        return Object.assign({}, { status: response.status, body });
      })
      .then(({ status, body }) => {
        if (status !== 200) {
          dispatch({
            type: 'FETCH_FAILURE',
            error: body.error,
          });
        } else {
          dispatch({
            type: 'FETCH_SUCCESS',
            field: body,
          });
        }
      });
  };
}
