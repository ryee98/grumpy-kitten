

import React from "react";

import './SuccessPage.css';

export const SuccessPage = (props) => {
    const {message} = props;

    return (<>
        <div class="success">{message}</div>
        <a class="success-link" href="http://localhost:3000/">Back to Home Page</a>
    </>)
}