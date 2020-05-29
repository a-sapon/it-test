import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

export const Nav = () => (
  <nav className={styles.navbar}>
    <Link to='/' className={styles.logo}>
      <span>it</span>
      <span>test</span>
    </Link>
    <NavLink to='/feedback' className={styles.contactsLink}>Контакты</NavLink>
  </nav>
);