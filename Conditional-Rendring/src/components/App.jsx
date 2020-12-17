import React from "react";
//import Login from "./Login.jsx";
//import Register from "./Register.jsx"
import Form from "./Form.jsx"

//var isLoggedIn = false;

var userRegister = true;

function App() {
  return (
    <div className="container">
      {/*{isLoggedIn === true ? <h1>Hello</h1> : <Login/>} */}
      {/* {userRegister === false ? <Register/> : <Login/>}  */}
      <Form isRegisterd = {userRegister}/>
    </div>
  );
}

export default App;
