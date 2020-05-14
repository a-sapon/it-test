import React, {useState, useEffect} from 'react';
import styles from './HomePage.module.css';
import quotes from '../quotesDb';

const HomePage= ()=>{
    const [quote, setQuote]=useState(quotes[0].quote)
    const [author, setAuthor]=useState(quotes[0].author)


    const getRandomQuote=()=>{
        const randomQuote=Math.floor(Math.random()*quotes.length);
        setQuote(quotes[randomQuote].quote);
        setAuthor(quotes[randomQuote].author);
    }

    const shuffleRandomQuote=(arr)=>{
        return arr.sort(()=>Math.random()-0.5)
    }

    useEffect(()=>{
        const id=setInterval(()=>{
               getRandomQuote()
            shuffleRandomQuote(quotes)
        }, 7000)
        return ()=>clearInterval(id);

        }
    , )



    return (
        <>
        <div className='header-wrapper'>
            <div className={styles.headerBack}>
                 <span className={styles.headerQuoteIcon}>
                <span style={{display: 'none'}}>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></span>
                </span>
                <div className={styles.quoteWrapper}>
                <span className={styles.headerQuote}>{quote}</span>
                <span className={styles.headerAuthor}>{author}</span>
                </div>
                <span className={styles.headerOnlineTests}>[ Онлайн тесты </span> <span className={styles.headerOnlineTest}>для студентов <a className={styles.headerLink} href='https://www.facebook.com/GoITeens' rel='noreferrer noopener' target="_blank">GoITeens</a>]</span>
            </div>
        </div>
            </>
    )
}

export default HomePage;