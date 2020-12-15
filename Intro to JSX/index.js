var React = require("react");
var ReactDOM = require("react-dom");

const fname = "BTS";
const lname = "Army";
const num = 7;

ReactDOM.render(
<div>
  <h1>Hello {fname+ " " +lname}</h1>
  <p>Lucky number : {num}</p>
</div>, 
document.getElementById("root")
);

// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello";
// document.getElementById("root").appendChild(h1);
