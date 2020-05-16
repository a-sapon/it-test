import React from "react";
import PropTypes from "prop-types";
import css from "./AnswersList.module.css";

const AnswersList = ({ data, handleAnswer, handleContinuation }) => {
  const { answers, image } = data;
  const styles = {};

  if(!image) styles.answersListContainer = { marginTop: "44px" }

  return (
    <div className={css.baseContainer}>

      {image && (
        <div className={css.imgContainer}>
          <img src={process.env.REACT_APP_STATIC_PAGE + image} alt="question" />
        </div>
      )}

      <div className={css.answersListContainer}  style={styles.answersListContainer}>
        <ul>
          {answers.map((el) => (
            <li key={el._id}>
              <label>
                <input
                  name="answer"
                  value="el.answerNumber"
                  type="radio"
                ></input>
              </label>
              <p>{el.answerText}</p>
            </li>
          ))}
        </ul>
        <div className={css.btnContainer}>
          <button className={css.giveAnswerBtn} onClick={handleAnswer}>
            Ответить
          </button>
          <button className={css.skipAnswerBtn} onClick={handleContinuation}>
            Пропустить
          </button>
        </div>
      </div>

      {!image && (<div className={css.orangeBG}> </div>)}
      
    </div>
  );
};

AnswersList.propTypes = {
  data: PropTypes.object,
  handleAnswer: PropTypes.func,
  handleContinuation: PropTypes.func,
};

export default AnswersList;
