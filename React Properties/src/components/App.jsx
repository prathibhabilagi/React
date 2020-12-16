import React from "react";
import Card from "./Card.jsx";
import contacts from "../contact.js";
import Avatar from "./Avatar.jsx";

function createContacts(contact){
    return(<Card 
        key= {contact.id}
        name= {contact.name}
        img= {contact.imgUrl}
        tel= {contact.phone}
        email= {contact.email}
    />);
}
function App(props){
    return(
      <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://specials-images.forbesimg.com/imageserve/5f1da3d32bbbada5e6338d83/960x0.jpg?cropX1=3&cropX2=2996&cropY1=0&cropY2=1996"/>
        {contacts.map(createContacts)};

        {/* Indexing each element from contact.js */}
        {/* <Card 
            name= {contacts[0].name}
            img= {contacts[0].imgUrl} 
            tel= {contacts[0].phone}
            email= {contacts[0].email}
        />
        <Card 
            name= {contacts[1].name}
            img= {contacts[1].imgUrl} 
            tel= {contacts[1].phone}
            email= {contacts[1].email}
        />
        <Card 
            name= {contacts[2].name}
            img= {contacts[2].imgUrl} 
            tel= {contacts[2].phone}
            email= {contacts[2].email}
        />
        <Card 
            name= {contacts[3].name}
            img= {contacts[3].imgUrl} 
            tel= {contacts[3].phone}
            email= {contacts[3].email}
        /> */}
      </div>
    );
  }

export default App;
