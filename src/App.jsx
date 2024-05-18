import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
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
