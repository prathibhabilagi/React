import React from "react";

function Heading() {
  const time = new Date().getHours();
  let greet;
  const customStyle = {
    color: ""
  };

  if (time < 12) {
    greet = "Good Morning";
    customStyle.color = "red";
  } else if (time < 18) {
    greet = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greet = "Good Night";
    customStyle.color = "blue";
  }
  return (
    <h1 className="heading" style={customStyle}>
      {greet}
    </h1>
  );
}

export default Heading;
