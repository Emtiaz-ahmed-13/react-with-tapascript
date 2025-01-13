

function Search() {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Search cars..."
        className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default Search;
