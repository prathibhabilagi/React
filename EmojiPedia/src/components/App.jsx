import React from "react";
import emojipedia from "../emojipedia.js";
import Entries from "./Entry.jsx";

function createEntry(emojiTerm){
 return(<Entries
   key= {emojiTerm.id}
   emoji= {emojiTerm.emoji}
   name= {emojiTerm.name}
   meaning= {emojiTerm.meaning}
 />);
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
     <dl className="dictionary">
     {emojipedia.map(createEntry)} 
     </dl>
    </div>
  );
}

export default App;
