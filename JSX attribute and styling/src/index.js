import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/100/100";

const customStyle = {
  color: "purple",
  fontSize: "30px",
  border: "1px solid black"
};

ReactDOM.render(
  <div>
    <h1 className="heading">BTS Members</h1>
    
    <ul>
      <li>RM</li>
      <li>Jin</li>
      <li>Suga</li>
      <li>JHope</li>
      <li>Jimin</li>
      <li>V</li>
      <li>JK</li>
    </ul>
    
    <h3 style={customStyle}>I Purple You</h3>
    
    <div>
      <img alt="random" src={img} />
      <img
        className="bts-image"
        alt="award"
        src="https://assets.teenvogue.com/photos/5df7f1eccea4e400082b8942/16:9/w_2560%2Cc_limit/lede.jpg"
      />
      <img
        className="bts-image"
        alt="bts"
        src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ede55828aa94f000665e1f7%2F0x0.jpg"
      />
      <img
        className="bts-image"
        alt="newyear eve"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1097661412.jpg?crop=0.665xw:1.00xh;0.173xw,0&resize=480:*"
      />
    </div>
    
  </div>,
  document.getElementById("root")
);

