import Types from './loaderTypes';

const loaderReducer = (state = false, { type }) => {
  switch (type) {
    case Types.LOADING:
      return true;
    case Types.IS_LOADED:
      return false;
    default:
      return state;
  }
};

export default loaderReducer;