import React from "react";

function Notes(Entry){
    return(
        <div className="note">
            <h1>{Entry.title}</h1>
            <p>{Entry.content}</p>
        </div>
    );
}

export default Notes;
