

export const CAST_VOTE_SELECTED_ELECTION_ACTION = 'CAST_VOTE_SELECTED_ELECTION';
export const CAST_VOTE_STEP_ACTION = 'CAST_VOTE_STEP';


export const createCastVoteSelectedElectionAction = selectedElection =>
  ({ type: CAST_VOTE_SELECTED_ELECTION_ACTION, selectedElection });

  export const createCastVoteStepAction = step =>
  ({ type: CAST_VOTE_STEP_ACTION, step });


