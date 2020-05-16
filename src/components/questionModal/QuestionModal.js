// import React, {useEffect, useRef} from 'react';
import React from 'react';
import PropTypes from 'prop-types'

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
        <div className="Backdrop" onClick={handleClick}>
            <div className="Content">
                <p>Вы действительно хотите завершить тест?</p>
                <button onClick={onSubmit}>Завершить</button>
                <button onClick={onClose}>Продолжить</button>
            </div>
        </div>
    )
};

QuestionModal.propTypes = {
    onClose: PropTypes.func
}

export default QuestionModal;