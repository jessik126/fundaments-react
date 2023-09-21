import React from "react";
import If from './if'

export default props => {
    const user = props.user || {}
    return (
        <div>
            <If test={user && user.name}>
                Welcome <strong> {user.name} </strong>
            </If>
            <If test={!user || !user.name}>
                <strong> No </strong> name or user set to welcome 
            </If>
        </div>
    )
}