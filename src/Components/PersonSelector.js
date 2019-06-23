import React from "react";
import posed, { PoseGroup } from "react-pose";
import Person from "./Person";

const PersonItem = posed.li({
  enter: {
    opacity: 1,
    scale: 1,
    delay: ({i}) => i * 100
  },
  exit: {
    opacity: 0,
    scale: 0,
    delay: ({i}) => i * 20
  }
});

function PersonSelector({ people }) {
  return (
    <ul className="person-selector">
      <PoseGroup animateOnMount>
        {people.map((p, i) => (
          <PersonItem className="item" key={p.id} i={i}>
            <Person {...p} />
          </PersonItem>
        ))}
      </PoseGroup>
    </ul>
  );
}

export default PersonSelector;
