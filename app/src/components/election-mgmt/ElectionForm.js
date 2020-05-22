import React from 'react';

import { useForm } from '../../hooks/useForm';
import './ElectionForm.css'

export const ElectionForm = (props) => {
    const {electionQuestions, onSubmitElection, onSubmitBallotItem, onCancel } = props;
    const [ electionForm, change, resetElectionForm] = useForm ({
        id:'', name:'', ballotItem: ''
    });

    const submitElection = () => {
        onSubmitElection({...electionForm, ballotItems: electionQuestions});
        resetElectionForm();
    };

    const clearBallotItem = () => {
        change({target: {name: "ballotItem", value:""}});
    }

    const submitBallotItem = () => {
        console.log('saveBallotItem', electionForm);
        onSubmitBallotItem(electionForm.ballotItem);
        clearBallotItem();
    }

    const cancelElection = () => {
        resetElectionForm();
        onCancel();
    }

    return (
        <form id="election-form">
        <div>
            <label htmlFor="election-name-input">Election Name:</label>
            <input type="text" id="election-name-input" name="name" value={electionForm.name} onChange={change}/>
        </div>
        <div>
            <ol>
            {electionQuestions.map((question,i) => {
                return <li key={i}>{question}</li>
            })}
            </ol>
        </div>
        <div>
            <label htmlFor="ballot-question-input">Ballot Question:</label>
            <input type="text" id="ballot-question-input" name="ballotItem" value={electionForm.ballotItem} onChange={change}/>
        </div>
        <div>
            <button type="button" onClick={submitBallotItem}>Save Ballot Item</button> <button type="button" onClick={() =>clearBallotItem()}>Clear Ballot Item</button>
        </div>
        <div>
            <button type="button" onClick={submitElection}>Save Election</button>
            <button type="button" onClick={()=> cancelElection()}>Cancel</button>
        </div>
    </form>
    )
}

ElectionForm.defaultProps = {
    buttonText: 'Default Text',
}