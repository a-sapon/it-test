import Types from './types';

export const testsLoaded = (tests) => {
  return {
    type: Types.FETCH_TESTS_SUCCESS,
    payload: tests,
  };
};

export const testsRequested = () => {
  return {
    type: Types.FETCH_TESTS_REQUEST,
  };
};

export const testsError = (error) => {
  return {
    type: Types.FETCH_TESTS_ERROR,
    payload: error,
  };
};