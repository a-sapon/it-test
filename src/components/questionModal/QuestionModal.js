// import React, {useEffect, useRef} from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import css from './QuestionModal.module.css'

const QuestionModal = ({onClose}) => {
    // const backdropRef = useRef(null);

    const handleClick = (e) => {
        // if(e.currentTarget !== backdropRef) return
    }

    // const keyDownHendler = (e) => {
    //     if (e.code !== 'Escape') return;

    //     onClose();
    // }

    const onSubmit = () => {}

    // useEffect(() => {
    //     window.addEventListener('keydown', keyDownHendler);
    //     return () => {
    //         window.removeEventListener('keydown', keyDownHendler);
    //     }
    // }, []);

    return(
        // <div className="Backdrop" ref={backdropRef} onClick={handleClick}>
        <div className={css.backdrop} onClick={handleClick}>
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

export default QuestionModal;