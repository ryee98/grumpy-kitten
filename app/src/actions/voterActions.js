export const REFRESH_VOTERS_REQUEST_ACTION = 'REFRESH_VOTERS_REQUEST';
export const REFRESH_VOTERS_DONE_ACTION = 'REFRESH_VOTERS_DONE';

export const ADD_VOTER_REQUEST_ACTION = 'ADD_VOTER_REQUEST';
export const SAVE_VOTER_REQUEST_ACTION = 'SAVE_VOTER_REQUEST';
export const DELETE_VOTER_REQUEST_ACTION = 'DELETE_VOTER_REQUEST';

export const EDIT_VOTER_ACTION = 'EDIT_VOTER';
export const CANCEL_VOTER_ACTION = 'CANCEL_VOTER';

export const createRefreshVotersRequestAction = () =>
  ({ type: REFRESH_VOTERS_REQUEST_ACTION });
export const createRefreshVotersDoneAction = voters =>
  ({ type: REFRESH_VOTERS_DONE_ACTION, voters });

export const createAddVoterRequestAction = voter =>
  ({ type: ADD_VOTER_REQUEST_ACTION, voter });
export const createSaveVoterRequestAction = voter =>
  ({ type: SAVE_VOTER_REQUEST_ACTION, voter });
export const createDeleteVoterRequestAction = voterId =>
  ({ type: DELETE_VOTER_REQUEST_ACTION, voterId });
  
export const createEditVoterAction = voterId =>
  ({ type: EDIT_VOTER_ACTION, voterId });
export const createCancelVoterAction = () =>
  ({ type: CANCEL_VOTER_ACTION });

const VOTERS_ENDPOINT = 'http://localhost:3060/voters';

export const refreshVoters = () => {
  console.log('refresh voters');
  return dispatch => {
      console.log('before dispatch');
      dispatch(createRefreshVotersRequestAction());
      return fetch(VOTERS_ENDPOINT)
          .then(resp => resp.json())
          .then(voters => dispatch(createRefreshVotersDoneAction(voters)));
  };
};

