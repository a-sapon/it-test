import axios from 'axios';
import { startLoading, finishLoading } from '../loader/loaderActions'
import {
  saveUserId,
  saveLanguageId,
  saveLanguageTitle,
  saveAllQuestionsCount,
  saveCurrentQuestion,
  saveAnswerResult,
  saveFinishResult,
  saveFinishTime,
  resetAllResults,
  fetchResultError
} from './testActions';

axios.defaults.baseURL = 'https://test.goit.co.ua/api';


export const fetchStartingQuestion = (languageId) => dispatch => {
  dispatch(startLoading());
  dispatch(resetAllResults());
  dispatch(saveLanguageId(languageId));

  const serverData = axios
    .get(`/tests/${languageId}`)
    .then((response) => {
      const { data } = response;

      dispatch(saveUserId(data.userId));
      dispatch(saveLanguageTitle(data.languageTitle));
      dispatch(saveAllQuestionsCount(data.allQuestionsCount));
      dispatch(saveCurrentQuestion({...data.question}));
      dispatch(finishLoading());

      return data;
    })
    .catch((err) => dispatch(fetchResultError(err)));

  return serverData;
};

export const fetchNextQuestionAndGiveAnswer = (userId, params) => dispatch => {
  dispatch(startLoading());
  
  const { userAnswerNumber, questionNumber, questionId } = params

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

      Object.assign(data, {result: {...data.result, userAnswer:  Number(data.result.userAnswer)}});

      const { questionExplanation, answerCorrectly, userAnswer, rightAnswer } = data.result;

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

      delete Object.assign(data, {question: data.nextQuestion}).nextQuestion;
      delete Object.assign(data, 
        {result: 
          {
            ...data.result,
            explanation: data.result.questionExplanation
          }
        }
      ).result.questionExplanation;

      dispatch(finishLoading());

      return data;
    })
    .catch((err) => dispatch(fetchResultError(err)));

  return serverData;
};

export const fetchNextQuestionAndSkipAnswer = (userId, params) => dispatch => {
  dispatch(startLoading());

  const { userAnswerNumber = -1, questionNumber, questionId } = params;

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

      dispatch(saveFinishResult({ userAnswer: -1 }));
      dispatch(saveCurrentQuestion(data.nextQuestion));

      data.finalResult && dispatch(saveFinishTime());

      delete Object.assign(data, { question: data.nextQuestion }).nextQuestion;

      dispatch(finishLoading());

      return data;
    })
    .catch((err) => dispatch(fetchResultError(err)));

  return serverData;
}


export const fetchCancelTest = (userId) => dispatch => {
  dispatch(saveCurrentQuestion(null));
  dispatch(saveFinishTime());
  dispatch(saveFinishResult({ userAnswer: -1 }));

  const serverData = axios
  .post(`/tests/cancel/${userId}`)
  .then(response => {
      const { data } = response;

      return data;
    })
    .catch(err => dispatch(fetchResultError(err)));

  return serverData;
}