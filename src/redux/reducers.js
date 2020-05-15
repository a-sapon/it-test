import Types from './types'
const initialState={
    testsList: [],
    isLoading: false,
    error: null
}

const testReducer=(state=initialState, action)=>{
    switch (action.type) {
        case Types.FETCH_TESTS_REQUEST:
            return {
                ...state,
                loading: true
            }
           case Types.FETCH_TESTS_SUCCESS:
            return {
                ...state,
                testsList: action.payload,
                loading: false,
                error: null
            }
        case Types.FETCH_TESTS_ERROR:
            return {
                ...state,
                testsList: [],
                loading: false,
                error: action.payload
            }
    }
}

export default testReducer;