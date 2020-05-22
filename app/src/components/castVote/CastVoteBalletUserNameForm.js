import React from 'react';

import { useForm } from '../../hooks/useForm';
import './CastVoteBalletUserNameForm.css';

export const CastVoteBalletUserNameForm = (props) => {

    const {buttonText, onUserNameSubmit} = props;

    const [ castVoteUserNameForm, change, resetCastVoteForm] = useForm ({
        email : ""
    });

 

    const onSubmitUserName  = () => {
        onUserNameSubmit(castVoteUserNameForm.email);
        resetCastVoteForm();
    }

    return (<>
        <div>
            <form id="cast-vote-user-name">
                <div>
                <label htmlFor="cast-vote-make-input">Email:</label>
                <input type="text"  name="email" value={castVoteUserNameForm.email} onChange={change}/>
                </div>
                <div>
                    <button type="button" onClick={onSubmitUserName}>{buttonText}</button>
                </div>
            </form>
        </div>
        </>);
}

CastVoteBalletUserNameForm.defaultProps = {
    buttonText: 'Submit Username',
}
