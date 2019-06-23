import React from "react";

function Header({ name, onShuffle }) {
  return (
    <div className="header">
      <button className="back button" onClick={onShuffle}>
        Shuffle
      </button>
      <h1 className="name">{name}</h1>
      <button className="more button">...</button>
    </div>
  );
}

export default Header;
