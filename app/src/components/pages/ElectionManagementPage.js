import React, { useEffect } from 'react';

import './ElectionManagementPage.css';
import { ElectionTable } from '../election-mgmt/ElectionTable';
import { ElectionForm} from '../election-mgmt/ElectionForm';

export const ElectionManagementPage = (props) => {
    const { elections, ballots, onRefreshElections, onSubmitBallotItem, onRefreshBallots, electionQuestions, onSubmitElection, onUpdate, onCancel} = props;
    console.log('onSubmitBallotItem', onSubmitBallotItem);
    useEffect(() => {
        console.log('useEffect refreshElections');
        onRefreshElections();
        onRefreshBallots();
      }, []);
    
    return ( <>
            <header>
                <h2>Election Management</h2>
            </header>

            <section>
                <ElectionTable elections={elections} ballots={ballots}/>
            </section>
            
            <section>
                <p>Create New Election</p>
                <ElectionForm electionQuestions={electionQuestions} onSubmitElection={onSubmitElection} onCancel={onCancel} onSubmitBallotItem={onSubmitBallotItem} onUpdateElection={onUpdate}  buttonText="Save Election"/>
            </section>
        </>
    );
}