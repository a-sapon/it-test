import React from 'react';
import "./FeedbackBoard.css";

const FeedbackBoard = () => {
    return (
      <div className="feedback-board">
        <h1 className="feedback-board__title">Обратная связь</h1>
        <p className="feedback-board__description">
          Предложения, вопросы и свои тесты направляйте на любой из указанных
          контактов:{" "}
        </p>
        <ul className="feedback-board__conatact">
          <li className="contact email">
            [ E-mail <span>goittests@gmail.com</span> ]
          </li>
          <li className="contact telegram">
            [
            <span>@GoiTTests</span> ]
          </li>
        </ul>
      </div>
    );
}

export default FeedbackBoard;
