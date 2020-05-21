import React from 'react';

import './ElectionManagementPage.css';
import { ElectionTable } from '../election-mgmt/ElectionTable';

export const ElectionManagementPage = (props) => {
    const {elections} = props;
    return ( <>
            <header>
                <h2>Election Management</h2>
            </header>

            <section>
                <ElectionTable elections={elections}/>
            </section>
        </>
    );
}