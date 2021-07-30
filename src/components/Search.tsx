import "./Search.css";

const Search = () => {
  return (
    <div className="Search">
      <form>
        <label htmlFor="categories">Categories</label>
        <select name="categories" id="categories">
          <option value="Push Your Luck">Push Your Luck </option>
        </select>
      </form>
    </div>
  );
};

export default Search;
