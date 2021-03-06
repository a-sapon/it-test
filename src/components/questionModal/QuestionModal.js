import React, { useEffect, useRef } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './QuestionModal.module.css';
import * as testActions from '../../redux/test/testActions';
import { connect } from 'react-redux';
import { compose } from 'redux';

const QuestionModal = ({ onClose, saveFinishTime, location }) => {
  let backdropRef = useRef(null);
  let history = useHistory();

  useEffect(() => {
    const keyDownHendler = (e) => {
      if (e.code !== 'Escape') return;
      onClose();
    };

    window.addEventListener('keydown', keyDownHendler);

    return () => {
      window.removeEventListener('keydown', keyDownHendler);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target !== backdropRef.current) return;
    onClose();
  };

  const onSubmit = async () => {
    saveFinishTime();
    history.push({
      pathname: '/result',
      state: { item: location.state.item },
    });
    localStorage.setItem('sessionDataTest', JSON.stringify(null));
  };

  return (
    <div
      className={css.backdrop}
      ref={backdropRef}
      onClick={handleBackdropClick}
    >
      <div className={css.content}>
        <p>Вы действительно хотите завершить тест?</p>
        <div>
          <button className={css.exitBtn} onClick={onSubmit}>
            Завершить
          </button>
          <button className={css.continueBtn} onClick={onClose}>
            Продолжить
          </button>
        </div>
      </div>
    </div>
  );
};

QuestionModal.propTypes = {
  onClose: PropTypes.func,
};

const mapDispatchToProps = {
  saveFinishTime: testActions.saveFinishTime,
};

export default compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(QuestionModal);
