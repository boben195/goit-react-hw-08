import { ImAccessibility } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";

import css from "../Contact/Contact.module.css";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { useState, useEffect } from "react";

const Contact = ({ contact }) => {
  const [presContact, setPresContact] = useState({ ...contact });
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  useEffect(() => {
    setPresContact({ ...contact });
  }, []);

  return (
    <div>
      <p>
        <ImAccessibility className={css.icons} />
        {presContact.name}
      </p>
      <p>
        <FaPhoneAlt className={css.icons} />
        {presContact.number}
      </p>
      <button className={css.del} onClick={handleDelete}>
        delete
      </button>
    </div>
  );
};

export default Contact;
