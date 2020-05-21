import { combineReducers } from 'redux';

import {REFRESH_ELECTIONS_DONE } from '../actions/electionManagementActions';

export const electionsReducer = (elections = [], action) => {
    console.log('electionsReducer', action.type, elections);
    if (REFRESH_ELECTIONS_DONE === action.type) {
        return action.elections;
    };

    return elections;
};

export const votingSystemReducer = combineReducers({
    elections: electionsReducer,
});

