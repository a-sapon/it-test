import React from "react";
import "./ContactCard.css";
import shortid from "shortid";
const prop = [
  {
    photo: "https://i.ibb.co/HdFXj9W/anna.png",
    name: "Анна Сапон",
    email: " sapon.anya@gmail.com",
    speciality: "Front-end Developer",
    linkedin: "https://www.linkedin.com/in/anna-sapon/",
    descripiton: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    id: shortid(),
  },
  {
    photo: "https://i.ibb.co/MBvX1Hb/tania.png",
    name: " Татьяна Шевцова",
    email: "tshevtsova.main@gmail.com",
    speciality: "Front-end Developer",
    linkedin: "https://www.linkedin.com/in/taniashevtsova/",
    descripiton: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    id: shortid(),
  },
  {
    photo: "https://i.ibb.co/dpNVv2c/photo.jpg",
    name: " Роман Свительский",
    email: "roman.svitelskyi@gmail.com",
    speciality: "Front-end Developer",
    linkedin: "https://www.linkedin.com/in/taniashevtsova/",
    descripiton: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    id: shortid(),
  },
];

const ContactCard = () => {
  const arr = prop;
  return (
    <ul className="cards">
      {arr.map(({ name, email, speciality, linkedin, id, photo }) => (
        <li key={id} className="cards-user">
          <div className="cards-user__wrap">
            <img className="cards-user__img" src={photo} alt="as"></img>
            <span className="cards-user__name">{name}</span>
            <span className="cards-user__special">{speciality}</span>
            <span className="cards-user__email">
              <b> email: </b>
              <span>{email}</span>
            </span>
            <span className="cards-user__linkedin">My linkedin</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactCard;
