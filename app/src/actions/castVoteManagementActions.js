
const BALLOTS_ENDPOINT = 'http://localhost:3060/ballots';

export const CAST_VOTE_SELECTED_ELECTION_ACTION = 'CAST_VOTE_SELECTED_ELECTION';
export const USER_SELECTED_ACTION = 'USER_SELECTED';
export const CAST_VOTE_STEP_ACTION = 'CAST_VOTE_STEP';
export const CAST_VOTE_BALLOT_ADD_ACTION = 'CAST_VOTE_BALLOT_UPDATE';


export const createCastVoteSelectedElectionAction = selectedElection =>
  ({ type: CAST_VOTE_SELECTED_ELECTION_ACTION, selectedElection });

  export const createUserSelectedAction = userActiveId =>
  ({ type: USER_SELECTED_ACTION, userActiveId });

  export const createCastVoteStepAction = step =>
  ({ type: CAST_VOTE_STEP_ACTION, step });

  export const createAddBallotRequestAction = (ballot) => ({ type: CAST_VOTE_BALLOT_ADD_ACTION, ballot });


export const addBallot = (ballot) => {
    console.log('addBallot');
    return dispatch => {
        dispatch(createAddBallotRequestAction(ballot));
        return fetch(BALLOTS_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ballot),
        })
        .then(() => console.log("SUCCESSFULLY UPDATED"));
    };
};
