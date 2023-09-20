import React from "react";
import FamilyMember from './FamilyMember';

export default (props) => {
    return (
        <div>
            <FamilyMember name="Pedro" lastname={props.lastname} />
            <FamilyMember name="Ana" {...props} />
            <FamilyMember name="Gustavo" lastname="Silva" />
        </div>
    )
}