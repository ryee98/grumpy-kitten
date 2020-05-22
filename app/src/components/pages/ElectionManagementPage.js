import React, { useEffect } from 'react';

import './ElectionManagementPage.css';
import { SectionHeader } from '../blocks/SectionHeader';
import { ContentSection } from '../blocks/ContentSection';

import { ElectionTable } from '../election-mgmt/ElectionTable';
import { ElectionForm } from '../election-mgmt/ElectionForm';

export const ElectionManagementPage = (props) => {
    const { elections, ballots, onRefreshElections, onSubmitBallotItem, onRefreshBallots, electionQuestions, onSubmitElection, onUpdate, onCancel, headerText } = props;
    console.log('onSubmitBallotItem', onSubmitBallotItem);
    useEffect(() => {
        console.log('useEffect refreshElections');
        onRefreshElections();
        onRefreshBallots();
    }, []);

    return (<>
        <SectionHeader headerText={headerText} />
        <ContentSection headerText="Available Elections">
            <ElectionTable elections={elections} ballots={ballots} />
            <p>Create New Election</p>
            <ElectionForm electionQuestions={electionQuestions} onSubmitElection={onSubmitElection} onCancel={onCancel} onSubmitBallotItem={onSubmitBallotItem} onUpdateElection={onUpdate} buttonText="Save Election" />
        </ContentSection>
    </>
    );
}