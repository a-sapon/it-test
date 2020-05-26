import axios from 'axios';
import {
  saveUserId,
  saveLanguageTitle,
  saveAllQuestionsCount,
  saveCurrentQuestion,
  saveAnswerResult,
  saveFinishResult,
  saveFinishTime,
  fetchResultError,
} from './testActions';

axios.defaults.baseURL = 'https://test.goit.co.ua/api';

export const fetchStartingQuestion = (languageId) => (dispatch) => {
  const serverData = axios
    .get(`/tests/${languageId}`)
    .then((response) => {
      const { data } = response;

      dispatch(saveUserId(data.userId));
      dispatch(saveLanguageTitle(data.languageTitle));
      dispatch(saveAllQuestionsCount(data.allQuestionsCount));
      dispatch(saveCurrentQuestion({ ...data.question }));

      return data;
    })
    .catch((err) => dispatch(fetchResultError(err)));

  return serverData;
};

export const fetchNextQuestionAndGiveAnswer = (userId, params) => (
  dispatch
) => {
  const { userAnswerNumber, questionNumber, questionId } = params;

  const serverData = axios
    .post(
      `/answer/${userId}`,

      {
        userAnswerNumber,
        questionNumber,
        questionId,
      }
    )

    .then((response) => {
      const { data } = response;
      const {
        questionExplanation,
        answerCorrectly,
        userAnswer,
        rightAnswer,
      } = data.result;

      dispatch(saveAnswerResult(answerCorrectly));
      dispatch(
        saveFinishResult({
          explanation: questionExplanation,
          userAnswerCorrectly: answerCorrectly,
          userAnswer,
          rightAnswer,
        })
      );
      dispatch(saveCurrentQuestion(data.nextQuestion));

      data.finalResult && dispatch(saveFinishTime());

      delete Object.assign(data, { question: data.nextQuestion }).nextQuestion;
      delete Object.assign(data, {
        result: {
          ...data.result,
          explanation: data.result.questionExplanation,
        },
      }).result.questionExplanation;

      return data;
    })
    .catch((err) => dispatch(fetchResultError(err)));

  return serverData;
};

export const fetchNextQuestionAndSkipAnswer = (userId, params) => (
  dispatch
) => {
  const { userAnswerNumber = 0, questionNumber, questionId } = params;

  const serverData = axios
    .post(
      `/answer/skip/${userId}`,

      {
        userAnswerNumber,
        questionNumber,
        questionId,
      }
    )

    .then((response) => {
      const { data } = response;

      dispatch(saveFinishResult({ userAnswer: 0 }));
      dispatch(saveCurrentQuestion(data.nextQuestion));

      data.finalResult && dispatch(saveFinishTime());

      delete Object.assign(data, { question: data.nextQuestion }).nextQuestion;

      return data;
    })
    .catch((err) => dispatch(fetchResultError(err)));

  return serverData;
};

export const fetchCancelTest = (userId) => (dispatch) => {
  const serverData = axios
    .post(`/tests/cancel/${userId}`)
    .then((response) => {
      const { data } = response;

      dispatch(saveFinishResult({ userAnswer: 0 }));
      dispatch(saveCurrentQuestion(null));

      data.finalResult && dispatch(saveFinishTime());

      return data;
    })
    .catch((err) => dispatch(fetchResultError(err)));

  return serverData;
};