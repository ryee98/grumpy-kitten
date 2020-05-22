import { combineReducers } from 'redux';

import {REFRESH_ELECTIONS_DONE, SAVE_QUESTIONS_ACTION, ADD_ELECTION_DONE_ACTION, CANCEL_ELECTION_ACTION} from '../actions/electionManagementActions';
import {REFRESH_BALLOTS_DONE } from '../actions/ballotManagementActions';
import {CAST_VOTE_SELECTED_ELECTION_ACTION } from '../actions/castVoteManagementActions';


export const ballotsReducer = (ballots = [], action) => {
    console.log('ballotsReducer', action.type, ballots);
    if (REFRESH_BALLOTS_DONE === action.type) {
        return action.ballots;
    };

    return ballots;
};

export const electionsReducer = (elections = [], action) => {
    console.log('electionsReducer', action.type, elections);
    if (REFRESH_ELECTIONS_DONE === action.type) {
        return action.elections;
    };

    return elections;
};

export const electionQuestionReducer = (questions = [], action) => {
    console.log('electionReducer', action.type, questions);
    if (SAVE_QUESTIONS_ACTION === action.type) {
        return questions.concat(action.question);
    };
    if (ADD_ELECTION_DONE_ACTION === action.type) {
        return []; // clear the old list of questions after an election save is performed
    };

    if (CANCEL_ELECTION_ACTION === action.type) {
        return [];
    };

    return questions;
};

export const castVoteSelectedElectionReducer = (castVoteSelectedElection = {}, action) => {

    if (action.type === CAST_VOTE_SELECTED_ELECTION_ACTION) {
      return action.selectedElection;
    } else{
        return null
    }
    return castVoteSelectedElection;
  };

export const votingSystemReducer = combineReducers({
    ballots: ballotsReducer,
    castVoteSelectedElection: castVoteSelectedElectionReducer,
    elections: electionsReducer,
    electionQuestions: electionQuestionReducer,

});

