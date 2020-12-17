import React from "react";
import Heading from "./Header.jsx";
import Footer from "./Footer.jsx";
import Notes from "./Note.jsx";
import notesKeeper from "../notesKeeper";

function App(){
    return(
        <div>
            <Heading />
            {notesKeeper.map((noteItem) => <Notes
                key = {noteItem.id}
                title = {noteItem.title}
                content = {noteItem.content}
            />
            )}
            <Footer />
        </div>
    );
}

export default App;
