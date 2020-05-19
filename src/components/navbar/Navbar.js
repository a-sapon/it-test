import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = () => (
  <nav className={styles.navbar}>
    <Link to='/' className={styles.logo}>
      <span>it</span>
      <span>test</span>
    </Link>
    <NavLink to='/feedback' className={styles.contactsLink}>Контакты</NavLink>
  </nav>
);