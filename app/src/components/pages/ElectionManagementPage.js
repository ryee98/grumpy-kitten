import React, { useEffect } from 'react';

import './ElectionManagementPage.css';
import { ElectionTable } from '../election-mgmt/ElectionTable';
import { refreshElections } from '../../actions/electionManagementActions';

export const ElectionManagementPage = (props) => {
    const {elections} = props;

    useEffect(() => {
        console.log('useEffect refreshElections');
        refreshElections();
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