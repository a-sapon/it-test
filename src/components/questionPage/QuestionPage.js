import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import * as testOperations from '../../redux/test/testOperations';
import * as testSelectors from '../../redux/test/testSelectors';
import PropTypes from 'prop-types';
import QuestionHdr from '../questionHdr/QuestionHdr';
import QuestionCard from '../questionCard/QuestionCard';
import QuestionModal from '..//questionModal/QuestionModal';
import css from './QuestionPage.module.css';

const QuestionPage = (props) => {
  const {
    location: { state },
    userId,
    fetchStartingQuestion,
    fetchNextQuestionAndGiveAnswer,
    fetchNextQuestionAndSkipAnswer,
  } = props;

  let history = useHistory();

  const [hdrData, setHdrData] = useState(null);
  const [cardData, setCardData] = useState(null);
  const [tmpData, setTmpData] = useState(null);
  const [resultData, setResultData] = useState({});
  const [answerNumber, setAnswerNumber] = useState(0);
  const [clickValue, setClickValue] = useState('');

  /**
   *  Final result redirect
   */
  const getFinalResultCallback = useCallback(
    (data) => {
      if (!data.finalResult) return;

      localStorage.setItem('sessionDataTest', JSON.stringify(null));
      history.push('/result');
    },
    [history]
  );

  useEffect(() => {
    async function fetchData() {
      if (state === undefined || !('id' in state)) return history.push('/');

      const data = await fetchStartingQuestion(state.id);
      dataRecorder(data);
    }

    const data = JSON.parse(localStorage.getItem('sessionDataTest'));
    if (data && data.result) delete data.result;

    if (!data) fetchData();

    data && dataRecorder(data);

    data && getFinalResultCallback(data);
  }, [state, history, fetchStartingQuestion, getFinalResultCallback]);

  /**
   * Data State Recording Assistant
   */
  const dataRecorder = function (data) {
    const { allQuestionsCount, languageTitle, questionNumber, result } = data;

    result && setResultData(result);

    setHdrData({ allQuestionsCount, languageTitle, questionNumber });
    setCardData({ ...data.question });
    setAnswerNumber(0);

    localStorage.setItem('sessionDataTest', JSON.stringify(data));
  };

  /**
   * Scroll function
   */
  const scrollTop = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollDown = function () {
    window.scrollTo({ top: 2000, behavior: 'smooth' });
  };

  /**
   * Answers data handlers
   */
  const handleChange = (e) => {
    setAnswerNumber(e.target.value);
  };

  const handleClick = (e) => {
    if (e.target.name !== 'next' && !tmpData)
      return setClickValue(e.target.name);

    dataRecorder(tmpData);
    setResultData({});
    setTmpData(null);

    getFinalResultCallback(tmpData);
    handleVisibleResult();
    scrollTop();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const params = {
      userAnswerNumber: answerNumber,
      questionNumber: hdrData.questionNumber,
      questionId: cardData.questionId,
    };

    if (clickValue === 'skip') {
      const data = await fetchNextQuestionAndSkipAnswer(userId, params);

      dataRecorder(data);
      getFinalResultCallback(data);
      scrollTop();
    }

    if (answerNumber && !tmpData && clickValue === 'answer') {
      const newTmpData = await fetchNextQuestionAndGiveAnswer(userId, params);

      setTmpData(newTmpData);
      setResultData(newTmpData.result);
      handleVisibleResult();
      scrollDown();
    }
  };

  /**
   * Result Visibility Handler
   */
  const [isResultVisible, setIsResultVisible] = useState(false);
  const handleVisibleResult = () => {
    setIsResultVisible(!isResultVisible);
  };

  /**
   * Opening modal window handler
   */
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalWindow = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {cardData !== null && (
        <div className={css.questionPageContainer}>
          <QuestionHdr data={hdrData} handleClick={handleModalWindow} />
          <QuestionCard
            data={{
              ...cardData,
              isResultVisible,
              handleChange,
              handleSubmit,
              handleClick,
            }}
            result={resultData}
          />
          {Object.keys(resultData).length !== 0 && (
            <button className={css.nextBtn} onClick={handleClick} name='next'>
              Ок, дальше
            </button>
          )}
          <div className={css.greyBG}></div>
        </div>
      )}

      {isModalOpen && <QuestionModal onClose={handleModalWindow} />}
    </>
  );
};

QuestionPage.propTypes = {
  languageId: PropTypes.string,
  userId: PropTypes.string,
  fetchStartingQuestion: PropTypes.func,
  fetchNextQuestionAndGiveAnswer: PropTypes.func,
  fetchNextQuestionAndSkipAnswer: PropTypes.func,
};

const mapStateToProps = (state) => ({
  userId: testSelectors.getUserId(state),
});

const mapDispatchToProps = {
  fetchStartingQuestion: testOperations.fetchStartingQuestion,
  fetchNextQuestionAndGiveAnswer: testOperations.fetchNextQuestionAndGiveAnswer,
  fetchNextQuestionAndSkipAnswer: testOperations.fetchNextQuestionAndSkipAnswer,
  fetchCancelTest: testOperations.fetchCancelTest,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);
