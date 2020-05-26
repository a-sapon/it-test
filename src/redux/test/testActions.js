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