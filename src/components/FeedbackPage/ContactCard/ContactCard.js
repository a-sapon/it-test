import React from "react";
import "./ContactCard.css";
import shortid from "shortid";
const prop = [
  {
    photo:
      "https://kartinki-dlya-srisovki.ru/wp-content/uploads/2018/06/kavaynye-kartinki-zhivotnykh-dlya-srisovki-3.jpg",
    name: "Pioner",
    email: "aaaa@gmail.ddddd",
    speciality: "Front-end Developer",
    linkedin: "My Linkedin",
    descripiton: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    id: shortid.generate(),
  },
  {
    photo:
      "https://kartinki-dlya-srisovki.ru/wp-content/uploads/2018/06/kavaynye-kartinki-zhivotnykh-dlya-srisovki-3.jpg",
    name: "Pioner",
    email: "aaaa@gmail.ddddd",
    speciality: "Front-end Developer",
    linkedin: "My Linkedin",
    descripiton: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    id: shortid.generate(),
  },
  {
    photo:
      "https://kartinki-dlya-srisovki.ru/wp-content/uploads/2018/06/kavaynye-kartinki-zhivotnykh-dlya-srisovki-3.jpg",
    name: "Pioner",
    email: "aaaa@gmail.ddddd",
    speciality: "Front-end Developer",
    linkedin: "My Linkedin",
    descripiton: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    id: shortid.generate(),
  },
  {
    photo:
      "https://kartinki-dlya-srisovki.ru/wp-content/uploads/2018/06/kavaynye-kartinki-zhivotnykh-dlya-srisovki-3.jpg",
    name: "Pioner",
    email: "aaaa@gmail.ddddd",
    speciality: "Front-end Developer",
    linkedin: "My Linkedin",
    descripiton: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    id: shortid.generate(),
  },
  {
    photo:
      "https://kartinki-dlya-srisovki.ru/wp-content/uploads/2018/06/kavaynye-kartinki-zhivotnykh-dlya-srisovki-3.jpg",
    name: "Pioner",
    email: "aaaa@gmail.ddddd",
    speciality: "Front-end Developer",
    linkedin: "My Linkedin",
    descripiton: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    id: shortid.generate(),
  },
  {
    photo:
      "https://kartinki-dlya-srisovki.ru/wp-content/uploads/2018/06/kavaynye-kartinki-zhivotnykh-dlya-srisovki-3.jpg",
    name: "Pioner",
    email: "aaaa@gmail.ddddd",
    speciality: "Front-end Developer",
    linkedin: "My Linkedin",
    descripiton: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    id: shortid.generate(),
  },
];
const ContactCard = () => {
  const arr = prop;
  return (
    <ul className="cards">
      {arr.map(
        ({ name, email, speciality, linkedin, description, id, photo }) => (
          <li key={id} className="cards-user">
            <img className="cards-user__img" src={photo} alt="as"></img>
            <span className="cards-user__name">{name}</span>
            <span className="cards-user__special">{speciality}</span>
            <span className="cards-user__email">
              email: <span>{email}</span>
            </span>
            <span className="cards-user__linkedin">{linkedin}</span>
            <p className="cards-user__desc"></p>
          </li>
        )
      )}
    </ul>
  );
};

export default ContactCard;
