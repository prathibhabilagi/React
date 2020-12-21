import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  const [isMouseOver, setMouseOver] = useState(false);

  function handleChange(event) {
    const { value, name } = event.target;

    setContact((prevValue) => ({
    
      // if (name === "fName") {
      //   return {
      //     fName: value,
      //     lName: prevValue.lName,
      //     email: prevValue.email
      //   };
      // } else if (name === "lName") {
      //   return {
      //     fName: prevValue.fName,
      //     lName: value,
      //     email: prevValue.email
      //   };
      // } else if (name === "email") {
      //   return {
      //     fName: prevValue.fName,
      //     lName: prevValue.lName,
      //     email: value
      //   };
      // }
      
      ...prevValue,
      [name]: value
    }));
  }

  function handleMouseOver() {
    setMouseOver(true);
  }
  function mouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onClick={handleChange} name="fName" placeholder="First Name" />
        <input onClick={handleChange} name="lName" placeholder="Last Name" />
        <input onClick={handleChange} name="email" placeholder="Email" />
        <button
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onMouseOver={handleMouseOver}
          onMouseOut={mouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
