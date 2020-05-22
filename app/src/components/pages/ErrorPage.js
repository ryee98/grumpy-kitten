import React from "react";


export const ErrorPage = (props) => {
    const {message} = props;

    return (
        <div>{message}</div>
    );
}