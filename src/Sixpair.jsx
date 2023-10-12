import React from "react";
// import Image from "../public/Image/Bhugati.jpg"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Sixpair(props) {
    return (<>
        <div className="card m-2" style={{ width: "18rem", height: "400px" }}>
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-text">{props.dis}</p>
                <a target="blank" href="www.google.com" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>


    </>)
}

export default Sixpair;