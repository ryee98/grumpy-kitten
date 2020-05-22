
const BALLOTS_ENDPOINT = 'http://localhost:3060/ballots';

export const REFRESH_BALLOTS_REQUEST_ACTION = "REFRESH_BALLOTS_REQUEST";
export const REFRESH_BALLOTS_DONE = "REFRESH_BALLOTS_DONE";


export const createRefreshBallotsRequestAction = () => ({ type: REFRESH_BALLOTS_REQUEST_ACTION });
export const createRefreshBallotsDoneAction = (ballots) => ({ type: REFRESH_BALLOTS_DONE, ballots });


export const refreshBallots = () => {
    console.log('refresh ballots');
    return dispatch => {
        console.log('before dispatching');
        dispatch(createRefreshBallotsRequestAction());
        return fetch(BALLOTS_ENDPOINT)
            .then(resp => resp.json())
            .then(ballots => dispatch(createRefreshBallotsDoneAction(ballots)));
    };
};