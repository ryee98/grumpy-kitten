/*

Actions are payloads of information that send data from your application to your store.
They are the only source of information for the store. You send them to the store using
store.dispatch().

create a constant to identify each supported action
create a action function to create the payload to send to the store with the type set
with the value of each action constant. 
The function should parameter containing any data that is needed to update the store.
see: https://redux.js.org/basics/actions

Actions are plain JavaScript objects. Actions must have a type property that indicates 
the type of action being performed. Types should typically be defined as string constants.
Once your app is large enough, you may want to move them into a separate module.
*/

export const REFRESH_ELECTIONS_REQUEST_ACTION = "REFRESH_ELECTIONS_REQUEST";
export const REFRESH_ELECTIONS_DONE = "REFRESH_ELECTIONS_DONE";
export const ADD_ELECTION_REQUEST_ACTION = "ADD_ELECTION_REQUEST";
export const ADD_ELECTION_QUESTION_REQUEST_ACTION = "ADD_ELECTION_QUESTION_REQUEST";
export const UPDATE_ELECTION_REQUEST_ACTION = "UPDATE_ELECTION_REQUEST";
export const UPDATE_ELECTION_QUESTION_REQUEST_ACTION = "UPDATE_ELECTION_QUESTION_REQUEST";

const ELECTIONS_ENDPOINT = 'http://localhost:3060/elections';

export const CANCEL_ELECTION_ACTION = 'CANCEL_ELECTION';
export const CANCEL_ELECTION_QUESTION_ACTION = 'CANCEL_ELECTION_QUESTION';

export const createCancelAction = () => ({ type: CANCEL_ELECTION_ACTION });
export const createCancelQuestionAction = () => ({ type: CANCEL_ELECTION_QUESTION_ACTION });

export const createRefreshElectionsRequestAction = () => ({ type: REFRESH_ELECTIONS_REQUEST_ACTION });
export const createRefreshElectionsDoneAction = (elections) => ({ type: REFRESH_ELECTIONS_DONE, elections });
export const createAddElectionRequestAction = (election) => ({ type: ADD_ELECTION_REQUEST_ACTION, election });
export const createUpdateElectionRequestAction = (election) => ({ type: UPDATE_ELECTION_REQUEST_ACTION, election });

export const refreshElections = () => {
    console.log('refresh elections');
    return dispatch => {
        console.log('before dispatching');
        dispatch(createRefreshElectionsRequestAction());
        return fetch(ELECTIONS_ENDPOINT)
            .then(resp => resp.json())
            .then(elections => dispatch(createRefreshElectionsDoneAction(elections)));
    };
};

export const addElection = (election) => {
    return dispatch => {
        dispatch(createAddElectionRequestAction(election));
        return fetch(ELECTIONS_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(election),
        })
            .then(() => dispatch(refreshElections()));
    };
};

export const updateElection = (election) => {
    return dispatch => {
        dispatch(createUpdateElectionRequestAction(election));
        return fetch(ELECTIONS_ENDPOINT + '/' + encodeURIComponent(election.id), {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(election),
        })
        .then(resp => {
            console.log('update response', resp);
            return resp.json();
        })
        .then(() => dispatch(refreshElections()));
    };
};

