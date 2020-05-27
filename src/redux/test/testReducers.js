import Types from './testTypes';

const initialState = {
  userId: null,
  languageId: null,
  languageTitle: null,
  allQuestionsCount: 0,
  currentQuestion: null,
  userRightAnswered: 0,
  rightAnsweredInPercentage: 0,
  startTime: 0,
  finishTime: 0,
  questions: [],
  error: null,
};

const testReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.SAVE_USER_ID:
      return {
        ...state,
        userId: payload,
        startTime: new Date(),
      };
    case Types.SAVE_LANGUAGE_ID:
      return {
        ...state,
        languageId: payload
      };
    case Types.SAVE_LANGUAGE_TITLE:
      return {
        ...state,
        languageTitle: payload
      };
    case Types.SAVE_ALL_QUESTION_COUNT:
      return {
        ...state,
        allQuestionsCount: payload
      };
    case Types.SAVE_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: payload
      };
    case Types.SAVE_RESULT_ANSWER:
      return {
        ...state,
        userRightAnswered: payload ? state.userRightAnswered + 1 : state.userRightAnswered
      };
    case Types.SAVE_FINISH_TIME:
      return {
        ...state,
        finishTime: payload
      };
    case Types.SAVE_FINISH_ANSWERS_AND_QUESTIONS_RESULT:
      return {
        ...state,
        questions: [
          ...state.questions,
          { ...payload, ...state.currentQuestion },
        ],
        rightAnsweredInPercentage: Math.round(
          (state.userRightAnswered / state.allQuestionsCount) * 100
        ),
      };
    case Types.SAVE_ERROR:
      return {
        ...state,
        error: payload,
      };
    case Types.RESET_RESULT:
      return initialState;
    default:
      return state;
  }
};

export default testReducer;