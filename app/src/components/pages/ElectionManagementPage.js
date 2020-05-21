import React, { useEffect } from 'react';

import './ElectionManagementPage.css';
import { ElectionTable } from '../election-mgmt/ElectionTable';
import { ElectionForm} from '../election-mgmt/ElectionForm';

export const ElectionManagementPage = (props) => {
    const { onRefreshElections, onSubmitBallotItem, elections, electionQuestions, onSave, onUpdate} = props;
    console.log('onSubmitBallotItem', onSubmitBallotItem);
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
            
            <section>
                <p>Create New Election</p>
                <ElectionForm onSubmitElection={onSave} electionQuestions={electionQuestions} onSubmitBallotItem={onSubmitBallotItem} onUpdateElection={onUpdate}  buttonText="Save Election"/>
            </section>
        </>
    );
}