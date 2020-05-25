import React from 'react';
import './ContactCard.css';
import shortid from 'shortid';
import contacts from '../../../db/contact.json';

const ContactCard = () => {
  return (
    <ul className='cards'>
      {contacts.map(({ name, email, speciality, linkedin, photo }) => (
        <li key={shortid()} className='cards-user'>
          <div className='cards-user__wrap'>
            <div className='wrap-img'>
              <img className='cards-user__img' src={photo} alt='as'></img>
            </div>
            <span className='cards-user__name'>{name}</span>
            <span className='cards-user__special'>{speciality}</span>
            <p className='cards-user__email'>
              <b> email: </b>
              <span>{email}</span>
            </p>
            <a className='cards-user__linkedin' href={linkedin} target='_blank' rel="noopener noreferrer">
              My LinkedIn
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactCard;
