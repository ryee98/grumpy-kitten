import React from 'react';

import './Content.css';

export const Content = (props) => {
    return (
    <main id="content">
        {props.children}
    </main>
    );
};
