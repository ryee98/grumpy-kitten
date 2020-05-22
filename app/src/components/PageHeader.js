import React from 'react';

import './PageHeader.css';

export const PageHeader = () => {
    return (
        <header id="page-header">
            <div className="header">
            <img id="companylogo" src="../smirkycat.jpeg" alt="Grumpy Cat" />
                <h1>
                        Grumpy Cat Electronic Voting System
                 </h1>
            </div>
        </header>
        );
};