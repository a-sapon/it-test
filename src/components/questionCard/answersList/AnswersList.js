import React from 'react';
import PropTypes from 'prop-types';
import css from './AnswersList.module.css';
import QuestionImage from './answersListImage/AnswerListImage';
import AnswersListItem from './answersListItem/AnswersListItem';
import happyCat1 from '../../../assets/images/cat/hooray.png';
import happyCat2 from '../../../assets/images/cat/precious.png';
import happyCat3 from '../../../assets/images/cat/hugs.png';
import pensiveСat1 from '../../../assets/images/cat/hmm.png';
import pensiveСat2 from '../../../assets/images/cat/ladno.png';

const happyCatArray = [happyCat1, happyCat2, happyCat3];
const pensiveCatArray = [pensiveСat1, pensiveСat2];

const getRandomInt = max => Math.floor(Math.random() * max);


const IMG_STATIC_PAGE = process.env.REACT_APP_STATIC_PAGE;

const AnswersList = ({ data, result }) => {

  const { answers, image, imageMobile, isResultVisible, handleChange, handleClick, handleSubmit } = data;
  
  const styles = {
    catImgContainer: css.catImgInsertionContainer
  };

  if(!image) styles.formContainer = { marginTop: "44px" };
  if(result.answerCorrectly) styles.catImgContainer = css.catImgInsertionContainer + ' ' + css.catImgInsertionContainerCorrect;

  return (
    <div className={css.baseContainer}>

      {image && (
        <QuestionImage mobileImg={IMG_STATIC_PAGE + imageMobile} desktopImg={IMG_STATIC_PAGE + image}/>
      )}

      <form  className={css.formContainer}  style={styles.formContainer} onSubmit={handleSubmit}>

        <div className={css.listContainer}>

          <ul className={css.list}>
            {answers.map((el) => {

              const elProps={ 
                answerNumber: el.answerNumber, 
                answerText: el.answerText,
                isResultVisible,
                handleChange
              }

              return (
                <AnswersListItem 
                  key={el._id} 
                  data={elProps} 
                  result={result}
                />
              )
              
            })}

          </ul>

          <div className={styles.catImgContainer}>
            
            {isResultVisible && result &&
          
              (result.answerCorrectly ? (
                <img
                  className={css.catImgInsertion}
                  alt="cat_helper"
                  src={happyCatArray[getRandomInt(3)]}
                />
              ) : (
                <img
                  className={css.catImgInsertion}
                  alt="cat_helper"
                  src={pensiveCatArray[getRandomInt(2)]}
                />
              ))
          
            }

          </div>

        </div>
          
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
    userAnswer: PropTypes.number
  })

}

AnswersList.defaultProps = {
  handleChange: () => null,
  handleClick: () => null,
  handleSubmit: () => null,
};

export default AnswersList;
