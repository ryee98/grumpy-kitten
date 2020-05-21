import { combineReducers } from 'redux';

import {REFRESH_ELECTIONS_DONE } from '../actions/electionManagementActions';

// const initialElections = [
//     {
//         "id": 1,
//         "name": "Election 1",
//         "questions": [
//           {
//             "id": 1,
//             "q": "do u like pasta"
//           }
//         ]
//       }
// ];

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

