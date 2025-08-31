import React from "react";

function HomeButton({ onClick }) {
  return (
    <button className="home-btn" onClick={onClick}>
      🏠 Home
    </button>
  );
}

export default HomeButton;
