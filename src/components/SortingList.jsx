const SortingList = ({ onClearTodo, sortBy, setSortBy }) => {
  return (
    <>
      <div className="container">
        <select
          className="select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by Input</option>
          <option value="description">Sort by Description</option>
          <option value="completed">Sort by Completed</option>
        </select>
        <button className="clear" onClick={onClearTodo}>
          Clear All
        </button>
      </div>
    </>
  );
};

export default SortingList;
