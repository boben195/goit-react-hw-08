import css from "../SearchBox/SearchBox.module.css";

import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  // const searchContact = useSelector((state) => state.filters.filterValue);
  const value = useSelector(selectNameFilter);
  const contacts = useSelector(selectFilteredContacts);
  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={css.container}>
      <p>Find Contacts by Name</p>
      <input type="text" value={value} onChange={handleChange} />
      {contacts.map((contact) => (
        <div key={contact.id}></div>
      ))}
    </div>
  );
};

export default SearchBox;
