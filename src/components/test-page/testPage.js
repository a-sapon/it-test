import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import testPagestyle from './testPage.module.css';

const testPage = (props) => {
  // console.log(props.location.state.item);
  const { item } = props.location.state;
  const dataGet = (d) => {
    let array = d.toString().split('-');
    let day = array[2].split('').splice(0, 2);
    let month = array[1];
    let year = array[0];
    let output = day[0] + day[1] + '.' + month + '.' + year;
    return output;
  };
  const description = item.description.split('</br></br>');
  return (
    <div className={testPagestyle.sectionDescription}>
      <div className={testPagestyle.sectionTestPage}>
        <img
          src={item.image}
          alt={item.title}
          className={testPagestyle.imageTitle}
        />
        <div className={testPagestyle.testAbout}>
          <div>
            <p>Количество вопросов</p>
            <span>{item.countQuestions}</span>
          </div>
          <div>
            <p>Пул вопросов</p>
            <span>{item.pullQuestions}</span>
          </div>
          <div>
            {' '}
            <p>Создан</p>
            <span>{dataGet(item.createdAt)}</span>
          </div>
          <div>
            {' '}
            <p>Обновлен</p>
            <span>{dataGet(item.updatedAt)}</span>
          </div>
        </div>
        <Link to='/'>
          <p className={testPagestyle.btnBack}>Вернуться к списку тестов</p>
        </Link>
      </div>
      <div className={testPagestyle.textAboutTest}>
        <h2 className={testPagestyle.titleLeng}>{item.title}</h2>
        {description.map((el) => (
          <p className={testPagestyle.textDesciption} key={el}>
            {el}
            <br />
            <br />
          </p>
        ))}
        <Link
          to={{
            pathname: 'question',
            state: {
              id: item.languageId,
            },
          }}
          className={testPagestyle.btnGotoStart}
        >
          Начать тест
        </Link>
      </div>
    </div>
  );
};

export default withRouter(testPage);