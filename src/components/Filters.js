import React, { useState } from "react";

function Filters({ onFilter }) {
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [language, setLanguage] = useState("");

  const applyFilters = () => {
    onFilter({ author, year, language });
  };

  return (
    <div className="filters">
      <h3>Filter Results</h3>
      <div className="filter-group">
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="text"
          placeholder="Language (e.g. eng)"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
        <button onClick={applyFilters}>Apply</button>
      </div>
    </div>
  );
}

export default Filters;
