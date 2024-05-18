import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={s.addContact}>
      <label htmlFor="findId">Find contacts by name</label>
      <input
        className={s.find}
        type="search"
        name="find"
        id="findId"
        placeholder="Enter name..."
        value={filter}
        onChange={(event) => {
          dispatch(changeFilter(event.target.value));
        }}
      />
    </div>
  );
};

export default SearchBox;
