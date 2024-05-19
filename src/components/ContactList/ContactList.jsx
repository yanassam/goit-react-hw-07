import s from "./ContactList.module.css";
import Contact from "./Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

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
