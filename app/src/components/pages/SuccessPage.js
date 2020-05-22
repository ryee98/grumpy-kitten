

import React from "react";

export const SuccessPage = (props) => {
    const {message} = props;

    return (<>
        <div>{message}</div>
        <a href="http://localhost:3000/">Back to Home Page</a>
        </>)
}