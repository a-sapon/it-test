import React, {useEffect, useRef} from 'react';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import * as testOperations from '../../redux/test/testOperations';
import PropTypes from 'prop-types';
import css from './QuestionModal.module.css'

const QuestionModal = ({onClose, fetchCancelTest}) => {
    let backdropRef = useRef(null);
    let history = useHistory();

    useEffect(() => {
        const keyDownHendler = (e) => {
            if (e.code !== 'Escape') return;
            onClose();
        }

        window.addEventListener('keydown', keyDownHendler);

        return () => {
            window.removeEventListener('keydown', keyDownHendler);
        }
    }, [onClose]);

    const handleBackdropClick = (e) => {
        if(e.target !== backdropRef.current) return
        onClose();
    }

    const onSubmit = async () => {
        localStorage.setItem('sessionDataTest', JSON.stringify(null));
        history.push("/result");
        await fetchCancelTest();
    }

    return(
        <div className={css.backdrop} ref={backdropRef} onClick={handleBackdropClick}>
            <div className={css.content}>
                <p>Вы действительно хотите завершить тест?</p>
                <div>
                    <button className={css.exitBtn} onClick={onSubmit}>Завершить</button>
                    <button className={css.continueBtn} onClick={onClose}>Продолжить</button>
                </div>
            </div>
        </div>
    )
};

QuestionModal.propTypes = {
    onClose: PropTypes.func
}

// export default QuestionModal;
  
  const mapDispatchToProps = {
    fetchCancelTest: testOperations.fetchCancelTest
  };
  
  export default connect( null, mapDispatchToProps )(QuestionModal);