import s from "./ContactList.module.css";
import Contact from "./Contact";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { fetchContactsThunk } from "../../redux/contactsOps";
import { useEffect } from "react";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  if (!contacts.length) {
    return <h1 className={s.title}> No contacts</h1>;
  }

  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
