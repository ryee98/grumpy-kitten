import React from 'react';

import { useForm } from '../../hooks/useForm';
import './CastVoteBalletForm.css';

export const CastVoteBallotForm = (props) => {

    const {buttonText, onSubmitCar, electionSelectedForVote, voters} = props;

    const [ castVoteBalletForm, change, resetCastVoteBalletForm,] = useForm ({
        ballotItems:""
    });

    const submitCar = () => {
       // onSubmitCar({...castVoteBalletForm});
        //resetCastVoteBalletForm();
    };

    return (
        <form id="cast-vote-form">
            {electionSelectedForVote.ballotItems.map((ballot, i) => (
                <div key={i}>
                    <label htmlFor="cast-vote-make-input">{ballot}:</label>
                    <input type="checkbox"  name="ballotItems" value={castVoteBalletForm.ballotItems} onChange={change}/>
                </div>
            ))}
            <div>
            <button type="button" onClick={submitCar}>{buttonText}</button>
            </div>
        </form>);
};