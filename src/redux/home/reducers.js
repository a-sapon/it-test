import Types from './types';

const initialState = {
  testsList: [],
  isLoading: false,
  error: null,
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_TESTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case Types.FETCH_TESTS_SUCCESS:
      return {
        ...state,
        testsList: action.payload,
        isLoading: false,
        error: null,
      };
    case Types.FETCH_TESTS_ERROR:
      return {
        ...state,
        testsList: [],
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default testReducer;
