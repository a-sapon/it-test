// SERVER REQUESTS
import axios from 'axios';

export const services = {
  fetchAllLanguages: async () => {
    try {
      const data = await axios.get(`https://test.goit.co.ua/api/tests`);
      return data.data;
    } catch (err) {
      throw new Error(err);
    }
  },

  fetchQuestion: async (languageId) => {
    try {
      const data = await axios.get(
        `https://test.goit.co.ua/api/tests/${languageId}`
      );
      return data.data;
    } catch (err) {
      throw new Error(err);
    }
  },

  cancelQuestion: async (userId) => {
    try {
      const data = await axios.post(
        `https://test.goit.co.ua/api/tests/cancel/${userId}`
      );
      return data.data;
    } catch (err) {
      throw new Error(err);
    }
  },

  giveAnswer: async (userId, params) => {
    const { userAnswerNumber, questionNumber, questionId } = params;

    try {
      const data = await axios.post(
        `https://test.goit.co.ua/api/answer/${userId}`,
        {
          questionId,
          userAnswerNumber,
          questionNumber,
        }
      );
      return data.data;
    } catch (err) {
      throw new Error(err);
    }
  },

  skipAnswer: async (userId, params) => {
    const { questionNumber, questionId } = params;

    try {
      const data = await axios.post(
        `https://test.goit.co.ua/api/answer/skip/${userId}`,
        {
          questionId,
          userAnswerNumber: 0,
          questionNumber,
        }
      );
      return data.data;
    } catch (err) {
      throw new Error(err);
    }
  },
};