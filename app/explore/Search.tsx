import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className="flex items-center bg-white p-4 rounded-lg drop-shadow gap-4 mx-2">
      <FaSearch />
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        className="flex-1"
      />
      <button className="flex self-start lg:self-center items-center gap-2 text-xs bg-blue-500 px-2 py-1 text-white rounded">
        Search
      </button>
    </div>
  );
}

export default Search;
