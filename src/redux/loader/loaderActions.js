import Types from './loaderTypes';

export const startLoading = _ => ({
    type: Types.LOADING
});

export const finishLoading = _ => ({
    type: Types.IS_LOADED
});