import { combineReducers } from 'redux';

import {REFRESH_ELECTIONS_DONE, } from '../actions/electionManagementActions';

import {CAST_VOTE_ELECTION_ACTION } from '../actions/castVoteManagementActions';

export const electionsReducer = (elections = [], action) => {
    console.log('electionsReducer', action.type, elections);
    if (REFRESH_ELECTIONS_DONE === action.type) {
        return action.elections;
    };

    return elections;
};

export const castELectionVoteIdReducer = (castElectionVoteId = -1, action) => {

    if (action.type === CAST_VOTE_ELECTION_ACTION) {
      return action.castElectionVoteId;
    } else{
        return -1
    }
  
    // if ([
    //  
    //   
    // ].includes(action.type)) {
    //   return -1;
    // }
  
    return castElectionVoteId;
  
  };

export const votingSystemReducer = combineReducers({
    castElectionVoteId: castELectionVoteIdReducer,
    elections: electionsReducer,
});

