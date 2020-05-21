import React, { useEffect } from 'react';

import './ElectionManagementPage.css';
import { ElectionTable } from '../election-mgmt/ElectionTable';

export const ElectionManagementPage = (props) => {
    const { onRefreshElections, elections} = props;

    useEffect(() => {
        console.log('useEffect refreshElections');
        onRefreshElections();
      }, []);
    
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