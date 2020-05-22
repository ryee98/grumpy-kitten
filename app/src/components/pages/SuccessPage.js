

import React from "react";

export const SuccessPage = (props) => {
    const {message} = props;

    return (<>
        <div>{message}</div>
        <button onClick="">Back to Home Page</button>
        </>)
}