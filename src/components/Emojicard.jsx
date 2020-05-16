import React from "react";

function Emojicard(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.icon}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.descrip}</dd>
    </div>
  );
}

export default Emojicard;
