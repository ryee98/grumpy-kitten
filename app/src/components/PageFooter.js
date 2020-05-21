import React from 'react';

import './PageFooter.css';

export const PageFooter = () => {

    return (
        <footer id="page-footer">
            <small>&copy;{new Date().getFullYear()} Grump Cat, Inc. All Rights Reserved.</small>
        </footer>
    );
};
