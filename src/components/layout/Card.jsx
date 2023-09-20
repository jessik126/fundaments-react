import React from "react";
import "./Card.css";

export default props => {
    const cardstyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00',
    }

    return (
        <div className="Card" style={cardstyle}>
            <div className="Title">{props.title}</div>
            <dic className="Content">{props.children}</dic>
        </div>
    )
}