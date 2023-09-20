import React from "react";
import "./Card.css";

export default props => {
    return (
        <div className="Card">
            <div className="Title">{props.title}</div>
            <dic className="Content">{props.children}</dic>
        </div>
    )
}