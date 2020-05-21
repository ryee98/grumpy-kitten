import { combineReducers } from 'redux';

import {REFRESH_ELECTIONS_DONE, } from '../actions/electionManagementActions';

import {CAST_VOTE_SELECTED_ELECTION_ACTION } from '../actions/castVoteManagementActions';

export const electionsReducer = (elections = [], action) => {
    console.log('electionsReducer', action.type, elections);
    if (REFRESH_ELECTIONS_DONE === action.type) {
        return action.elections;
    };

    return elections;
};

export const castVoteSelectedElectionReducer = (castVoteSelectedElection = {}, action) => {

    if (action.type === CAST_VOTE_SELECTED_ELECTION_ACTION) {
      return action.selectedElection;
    } else{
        return null
    }
  
    // if ([
    //  
    //   
    // ].includes(action.type)) {
    //   return -1;
    // }
  
    return castVoteSelectedElection;
  
  };

export const votingSystemReducer = combineReducers({
    castVoteSelectedElection: castVoteSelectedElectionReducer,
    elections: electionsReducer,
});

