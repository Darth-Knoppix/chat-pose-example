import React from "react";

function Person({ name, image, active }) {
  return (
    <div className={`person ${active ? 'active' : ''}`}>
      <img src={image} alt={name} className="profile" />
    </div>
  );
}

export default Person;
