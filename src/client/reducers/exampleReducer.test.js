import reducer from './exampleReducer';

describe('example reducer', () => {
  const initialState = {
    field: undefined,
    isFetching: false,
    error: undefined,
  };
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_REQUEST', () => {
    const startAction = {
      type: 'FETCH_REQUEST',
    };
    expect(reducer({}, startAction)).toEqual({ isFetching: true });
  });

  it('should handle FETCH_SUCCESS', () => {
    const successAction = {
      type: 'FETCH_SUCCESS',
      field: { text: 'lorem' },
    };
    expect(reducer({}, successAction)).toEqual({
      isFetching: false,
      field: {
        text: 'lorem',
      },
    });
  });

  it('should handle FETCH_FAILURE', () => {
    const failAction = {
      type: 'FETCH_FAILURE',
      error: '404',
    };
    expect(reducer({}, failAction)).toEqual({
      error: '404',
      isFetching: false,
    });
  });
});
