import { useDispatch } from "react-redux";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContactsThunk } from "./redux/contactsOps";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  return (
    <>
      <h1 className="title">Phonebook</h1>
      <div className="wrap">
        <div>
          <ContactForm />
          <SearchBox />
        </div>
        <ContactList />
      </div>
    </>
  );
}

export default App;
