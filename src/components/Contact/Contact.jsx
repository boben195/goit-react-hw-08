import { ImAccessibility } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";

import css from "../Contact/Contact.module.css";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
//import { useState, useEffect } from "react";

const Contact = ({ contact }) => {
  //const [presContact, setPresContact] = useState({ ...contact });
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    toast.success("delete");
  };
  // useEffect(() => {
  //   setPresContact({ ...contact });
  // }, [contact]);

  return (
    <div className={css.container}>
      <p>
        <ImAccessibility className={css.icons} />
        {contact.name}
      </p>
      <p>
        <FaPhoneAlt className={css.icons} />
        {contact.number}
      </p>
      <button className={css.del} onClick={handleDelete}>
        DELETE
      </button>
    </div>
  );
};

export default Contact;
