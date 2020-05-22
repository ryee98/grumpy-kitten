import React from 'react';

import { useForm } from '../../hooks/useForm';
import './CastVoteBalletForm.css';

export const CastVoteBallotForm = (props) => {

    const {buttonText, castVoteSubmit, electionSelectedForVote, voters} = props;

    let balletObject = {};
    electionSelectedForVote.ballotItems.map((ballot, i) => {
         balletObject["ballotItems"+i] = false;
    });

    const submitCar = () => {
        console.log(balletObject)
        castVoteSubmit(balletObject);
    };

    const captureChkBoxVal = (e) => {
        balletObject[e.target.name]=e.target.checked;
    }

    return (<>
        <form id="cast-vote-form">
            {electionSelectedForVote.ballotItems.map((ballot, i) => (
            
                <div key={i}>
                    <label htmlFor="cast-vote-make-input">{ballot}:</label>
                    <input type="checkbox"  name={"ballotItems"+i} onClick={captureChkBoxVal} />
                </div>))}
            <div>
                <button type="button" onClick={submitCar}>{buttonText}</button>
            </div>
        </form>
    </>
    );
};