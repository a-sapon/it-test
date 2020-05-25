import React from "react";
import PropTypes from "prop-types";
import css from "./AnswersList.module.css";


const AnswersList = ({ data, result }) => {

  const { answers, image, imageMobile, isResultVisible, handleChange, handleClick, handleSubmit } = data;
  const styles = {};

  if(!image) styles.answersListContainer = { marginTop: "44px" }

  return (
    <div className={css.baseContainer}>

      {image && (
        <picture className={css.questionImgContainer}>
          <source media="(min-width: 768px)" srcSet={process.env.REACT_APP_STATIC_PAGE + image} />
          <img src={process.env.REACT_APP_STATIC_PAGE + imageMobile} alt="imageMobile" />
        </picture>
      )}

      <div className={css.answersListContainer}  style={styles.answersListContainer}>

        <form onSubmit={handleSubmit}>

          <ul>
            {answers.map((el) => (
              <li key={el._id}>
                <label>
                  <input
                    name="answer"
                    value={el.answerNumber}
                    type="radio"
                    onChange={handleChange}
                  />
                  <span>{el.answerText}</span>
                </label>
              </li>
            ))}
          </ul>

          {isResultVisible && (
            <div className={css.catImgContainer}>
              <img src={"./imageWithCat"} alt="cat_helper"/>
            </div>
          )}

          {!isResultVisible && (
            <div className={css.btnContainer}>
              <button className={css.giveAnswerBtn} onClick={handleClick} name="answer" type="submit">
                Ответить
              </button>
              <button className={css.skipAnswerBtn} onClick={handleClick} name="skip" type="submit">
                Пропустить
              </button>          
            </div>
          )}

        </form>

      </div>

      {!image && (<div className={css.orangeBG}> </div>)}
      
    </div>
  );
};

AnswersList.propTypes = {

  data: PropTypes.shape({
    isResultVisible: PropTypes.bool.isRequired,
    answers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    image: PropTypes.string,
    imageMobile: PropTypes.string,
    handleChange: PropTypes.func,
    handleClick: PropTypes.func,
    handleSubmit: PropTypes.func
  }),

  result: PropTypes.shape({
    answerCorrectly: PropTypes.bool,
    rightAnswer: PropTypes.number,
    userAnswer: PropTypes.string
  })

}

AnswersList.defaultProps = {
  handleChange: () => null,
  handleClick: () => null,
  handleSubmit: () => null,
};

export default AnswersList;
