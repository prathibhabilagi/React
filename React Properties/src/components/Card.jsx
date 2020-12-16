import React from "react";
import Avatar from "./Avatar.jsx"
import Details from "./Details.jsx";

function Card(props){
    return(
        <div className="card">
            <div className="top">
                {/* <p>{props.id}</p> */}
                <h2 className="name">{props.name}</h2>
                {/* <img className="circle-img " src={props.img} alt="BTS" /> */}
                <Avatar img= {props.img}/>
            </div>
            <div className="bottom">
                <Details
                    detailInfo = {props.tel}
                />
                <Details
                    detailInfo = {props.email}
                />
            </div>
        </div>
    );
}

export default Card;
