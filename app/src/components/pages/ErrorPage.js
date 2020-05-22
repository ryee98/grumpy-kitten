import React from "react";

import './ErrorPage.css';

export const ErrorPage = (props) => {
    const {message} = props;

    return (
        <div class="error-msg">{message}</div>
    );
}