import React from "react";
import DirectChild from "./DirectChild";

export default props => {
    return (
        <div>
            <DirectChild name="Junior" age={20} nerd={true} />
            <DirectChild name="Gabriel" age={20} nerd={false} />
        </div>
    )
}