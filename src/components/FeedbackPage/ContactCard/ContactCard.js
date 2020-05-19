import React from "react";
import "./ContactCard.css";
import shortid from "shortid";
import arr from "../contact.json"

const ContactCard = () => {

  const id = shortid();
  return (
    <ul className="cards">
      {arr.map(({ name, email, speciality, linkedin, photo }) => (
        <li key={id} className="cards-user">
          <div className="cards-user__wrap">
            <div className="wrap-img">
              <img className="cards-user__img" src={photo} alt="as"></img>
            </div>
            <span className="cards-user__name">{name}</span>
            <span className="cards-user__special">{speciality}</span>
            <span className="cards-user__email">
              <b> email: </b>
              <span>{email}</span>
            </span>
            <a className="cards-user__linkedin" href={linkedin}>
              My linkedin
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactCard;
