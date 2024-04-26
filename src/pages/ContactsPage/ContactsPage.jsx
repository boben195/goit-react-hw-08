import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContacts } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default ContactsPage;
