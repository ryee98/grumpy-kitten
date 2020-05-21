import { combineReducers } from 'redux';

import { ADD_ELECTION_REQUEST_ACTION, UPDATE_ELECTION_REQUEST_ACTION, REFRESH_ELECTIONS_DONE,
CANCEL_ELECTION_ACTION, CANCEL_ELECTION_QUESTION_ACTION } from '../actions/electionManagementActions';

const initialElections = [
    {
        "id": 1,
        "name": "Election 1",
        "questions": [
          {
            "id": 1,
            "q": "do u like pasta"
          }
        ]
      }
];

export const electionsReducer = (elections = initialElections, action) => {
    console.log('electionsReducer', action.type, elections);
    if (REFRESH_ELECTIONS_DONE === action.type) {
        return action.elections;
    };
    return elections;

};

export const votingSystemReducer = combineReducers({
    elections: electionsReducer,
});

