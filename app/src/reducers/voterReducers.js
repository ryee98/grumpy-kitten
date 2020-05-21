import { combineReducers } from "redux";

import {
  REFRESH_VOTERS_DONE_ACTION,
  EDIT_VOTER_ACTION,
  CANCEL_VOTER_ACTION,
} from '../actions/voterActions';

export const votersReducer = (voters = [], action) => {

  if (action.type === REFRESH_VOTERS_DONE_ACTION) {
    return action.voters;
  }

  return voters;
};

export const editVoterIdReducer = (editVoterId = -1, action) => {

  if (action.type === EDIT_VOTER_ACTION) {
    return action.voterId;
  }

  if (action.type === REFRESH_VOTERS_DONE_ACTION || action.type ===  CANCEL_VOTER_ACTION) {
    return -1;
  }

  return editVoterId;

};

export const voterReducer = combineReducers({
  voters: votersReducer,
  editVoterId: editVoterIdReducer,
});