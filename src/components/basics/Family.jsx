import React, { cloneElement } from "react";

export default (props) => {
    console.log(typeof props.children)
    return (
        <div>
            {
                React.Children.map(props.children, child => {
                    return cloneElement(child, props);
                })
            }
            {/* {
                props.children.map((child,i) => {
                    return cloneElement(child, {...props, key: i});
                })
            } */}
        </div>
    )
}