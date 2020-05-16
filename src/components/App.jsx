import React from "react";
import Emojicard from "./Emojicard";
import emojipedia from "../emojipedia";

function extract(details) {
  return (
    <Emojicard
      icon={details.emoji}
      name={details.name}
      descrip={details.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(extract)}</dl>
    </div>
  );
}

export default App;
