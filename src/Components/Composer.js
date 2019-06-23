import React from "react";

function Composer({ name, onShuffle }) {
  return (
    <div className="composer">
      <input className="text" type="text" placeholder="Type something..." />
    </div>
  );
}

export default Composer;
