import Types from './testTypes';

export const saveUserId = (string) => ({
    type: Types.SAVE_USER_ID,
    payload: string,
});

export const saveLanguageTitle = (string) => ({
    type: Types.SAVE_LANGUAGE_TITLE,
    payload: string,
});

export const saveAllQuestionsCount = (number) => ({
    type: Types.SAVE_ALL_QUESTION_COUNT,
    payload: number,
});

export const saveCurrentQuestion = (object) => ({
    type: Types.SAVE_CURRENT_QUESTION,
    payload: object,
});

export const saveAnswerResult = (boolean) => ({
    type: Types.SAVE_RESULT_ANSWER,
    payload: boolean,
});

export const saveFinishTime = () => ({
    type: Types.SAVE_FINISH_TIME,
    payload: new Date(),
});

export const saveFinishResult = (object) => ({
    type: Types.SAVE_FINISH_ANSWERS_AND_QUESTIONS_RESULT,
    payload: object,
});

export const fetchResultError = (string) => ({
    type: Types.SAVE_ERROR,
    payload: string,
});



//   /*
//    * finishTest
//    */
//   export const finishTestStart = () => ({
//     type: Type.FINISH_TEST_START,
//   });
//   export const finishTestSuccess = () => ({
//     type: Type.FINISH_TEST_SUCCESS,
//   });
//   export const finishTestError = () => ({
//     type: Type.FINISH_TEST_ERROR,
//   });

//   /* rewriteCurrentQuestion */

//   export const rewriteCurrentQuestion = test => ({
//     type: Type.REWRITE_CURRENTQUESTION,
//     payload: {
//       test,
//     },
//   });

//   /* userAnswer */

//   export const changeUserAnswer = userAnswer => ({
//     type: Type.CHANGE_USER_ANSWER,
//     payload: {
//       userAnswer,
//     },
//   });

//   export const resetUserAnswer = () => ({
//     type: Type.RESET_USER_ANSWER,
//     payload: {
//       reset: null,
//     },
//   });

//   export const changeUserAnswerQuestionNumber = questionNumber => ({
//     type: Type.CHANGE_USER_ANSWER_QUESTION_NUMBER,
//     payload: {
//       questionNumber,
//     },
//   });

//   /* resultAnswer */

//   export const fetchResultAnswerStart = () => ({
//     type: Type.FETCH_RESULT_ANSWER_START,
//   });

//   export const fetchResultAnswerSuccess = resultAnswer => ({
//     type: Type.FETCH_RESULT_ANSWER_SUCCESS,
//     payload: {
//       resultAnswer,
//     },
//   });

//   export const fetchResultAnswerError = error => ({
//     type: Type.FETCH_RESULT_ANSWER_ERROR,
//     payload: {
//       error,
//     },
//   });

//   export const resetResultAnswer = () => ({
//     type: Type.RESET_RESULT_ANSWER,
//     payload: {
//       reset: false,
//     },
//   });

//   /* nextQuestion */

//   export const fetchNextQuestionSuccess = nextQuestion => ({
//     type: Type.FETCH_NEXT_QUESTION_SUCCESS,
//     payload: {
//       nextQuestion,
//     },
//   });

//   export const resetNextQuestion = () => ({
//     type: Type.RESET_NEXT_QUESTION,
//     payload: {
//       reset: null,
//     },
//   });

//   /* Action skip the question */

//   export const fetchSkipTheQuestionStart = () => ({
//     type: Type.FETCH_SKIP_QUESTION_START,
//   });

//   export const fetchSkipTheQuestionSuccess = test => ({
//     type: Type.FETCH_SKIP_QUESTION_SUCCESS,
//     payload: {
//       test,
//     },
//   });

//   export const fetchSkipTheQuestionError = error => ({
//     type: Type.FETCH_SKIP_QUESTION_ERROR,
//     payload: {
//       error,
//     },
//   });

//   export const fetchFinalResult = finalResult => ({
//     type: Type.FETCH_FINAL_RESULT,
//     payload: {
//       finalResult,
//     },
//   });