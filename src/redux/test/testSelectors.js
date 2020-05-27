export const getLanguageId = state => state.test.languageId;

export const getUserId = state => state.test.userId;

export const getAllQuestionsWithAnswers = state => state.test.questions;

export const getPenultimateQuestion = state => state.test.questions[state.test.questions.length - 1];

export const getCurrentQuestion = state => state.test.currentQuestion;

export const finalTestResult = state => state.test;