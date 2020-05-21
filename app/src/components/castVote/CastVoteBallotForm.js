import React from 'react';

import { useForm } from '../../hooks/useForm';
import './CastVoteBalletForm.css';

export const CastVoteBallotForm = ({buttonText, onSubmitCar, electionSelectedForVote}) => {

    const [ castVoteBalletForm, change, resetCarForm] = useForm ({
        ...electionSelectedForVote.questions
    });

    const submitCar = () => {
       // onSubmitCar({...castVoteBalletForm});
        //resetCarForm();
    };

    return (
           <form id="cast-vote-form">
                {electionSelectedForVote.questions.map((question, i) => (
                <div key={i}>
                <label htmlFor="cast-vote-make-input">{question.q}:</label>
                <input type="checkbox"  name={i} value="" onChange={change}/>
                </div>
                ))}
            
                <div>
                    <button type="button" onClick={submitCar}>{buttonText}</button>
                </div>
            </form>);
}

CastVoteBallotForm.defaultProps = {
    buttonText: 'Submit',
}
//    <form id="cast-vote-form">
//             {electionSelectedForVote.questions.map((question, i) => (
//             <div> key={i}>
//             <label htmlFor="cast-vote-make-input">{question.q}:</label>
//             <input type="checkbox"  name={i} value="" onChange={change}/>
//             </div>
//             ))}
        
//             <div>
//                 <button type="button" onClick={submitCar}>{buttonText}</button>
//             </div>
//         </form>