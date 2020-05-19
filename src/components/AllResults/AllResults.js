import React from 'react';
import Circle from 'react-circle';
import styles from './AllResults.module.css';

const AllResults = () => (
  <section id="results">
    <div className={styles.grade}>
      <h1 className={styles.grade__title}>Результаты теста “Основы С++”</h1>
      <Circle
        progress={75}
        animate={true}
        animationDuration="1s"
        responsive={false}
        size="155"
        lineWidth="40"
        progressColor="rgb(255, 108, 0)"
        bgColor="#8b92ab"
        textColor="#fff"
        textStyle={{ font: 'bold 6em OpenSans-Bold, sans-serif' }}
      />
			<h2 className={styles.grade__subtitle}>Молодец! <br/>Но можно лучше{')))'}</h2>
			<ul className={styles.grade__list}>
				<li className={styles.grade__list__item}>Правильных ответов <span>15</span></li>
				<li className={styles.grade__list__item}>Всего вопросов <span>25</span></li>
				<li className={styles.grade__list__item}>Время <span>15 мин</span></li>
			</ul>
			<button className={styles.grade__button}><span>Пройти еще раз</span></button>
    </div>
		{/* <div className={styles.answer}>
			<h2 className={styles.answer__title}>1. Какие циклы применяются в C#?</h2>
		</div> */}
  </section>
);

export default AllResults;


