

export const CAST_VOTE_SELECTED_ELECTION_ACTION = 'CAST_VOTE_SELECTED_ELECTION';

export const createCastVoteSelectedElectionAction = selectedElection =>
  ({ type: CAST_VOTE_SELECTED_ELECTION_ACTION, selectedElection });