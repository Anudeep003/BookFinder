import React from "react";

function Suggestions({ history, onSearch }) {
  if (!history || history.length === 0) {
    return null;
  }

  return (
    <div className="suggestions">
      <h3>Recent Searches</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index} onClick={() => onSearch(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Suggestions;
