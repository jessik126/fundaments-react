import React from "react";
import If, { Else } from './if'

export default props => {
    const user = props.user || {}
    return (
        <div>
            {/* <If test={user && user.name}>
                Welcome <strong> {user.name} </strong>
            </If>
            <If test={!user || !user.name}>
                <strong> No </strong> name or user set to welcome 
            </If> */}

            <If test={user && user.name}>
                Welcome <strong> {user.name} </strong>
                <Else>
                    <strong> No </strong> name or user set to welcome
                </Else>
            </If>

        </div>
    )
}