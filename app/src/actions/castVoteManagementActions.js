export const CAST_VOTE_ELECTION_ACTION = 'CAST_VOTE_ELECTION';


export const createCastVoteElectionAction = castElectionVoteId =>
  ({ type: CAST_VOTE_ELECTION_ACTION, castElectionVoteId });