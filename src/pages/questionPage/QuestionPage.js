import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import QuestionHdr from "../../components/questionHdr/QuestionHdr";
import QuestionCard from "../../components/questionCard/QuestionCard";
import { services } from "../../services/api";
import QuestionModal from "../../components/questionModal/QuestionModal";
import css from './QuestionPage.module.css'

const QuestionPage = ({ languageId }) => {
  /**
   *  State
   */
  const [questionHdr, setQuestionHdr] = useState(null);
  const [questionData, setQuestionData] = useState(null);

  const [userId, setUserId] = useState(null);

  /**
   *  ComponentDidMount analog
   */
  useEffect(() => {
    async function fetchData() {
      const data = await services.fetchQuestion(languageId);

      const { allQuestionsCount, languageTitle, questionNumber, userId } = data;

      setQuestionHdr({ allQuestionsCount, languageTitle, questionNumber });
      setQuestionData(data.question);

      setUserId(userId);
    }

    fetchData();
  }, [languageId]);

  /**
   * Opening modal window handler
   */
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = async () => {
    // const params = { 
    //   userAnswerNumber, 
    //   questionNumber, 
    //   questionId 
    // };

    // const data = await services.giveAnswer(userId, params);
    
    console.log("questionData", questionData);
    console.log("userId", userId);
  };

  const handleOpeningModal = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  // useEffect(() => {
    // async function fetchData() {
    //   const params = { userAnswerNumber, questionNumber, questionId };

    //   const data = await services.giveAnswer(questionData.userId, params);

    //   setQuestionData(data);
    // };

    // fetchData();
  // }, [])

  // const {question} = questionData;

  return (
    <>
      {questionData !== null && 
        <div className={css.questionPageContainer}>
          <QuestionHdr data={questionHdr} handleClick={handleOpeningModal}/>
          <QuestionCard data={questionData} />
          {/* <button onClick={handleClick}>Ок, дальше</button> */}
          <div className={css.greyBG}></div>
        </div>
      }

      {isModalOpen && <QuestionModal onClose={handleCloseModal}/>}
    </>
  );
};

QuestionPage.propTypes = {
  languageId: PropTypes.string

}

QuestionPage.defaultProps = {
  languageId: "5d246ffc75a8c204991c26e1"
}

export default QuestionPage;
