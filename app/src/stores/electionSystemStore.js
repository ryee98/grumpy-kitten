import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { votingSystemReducer } from '../reducers/electionManagementReducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const votingSystemStore = createStore(votingSystemReducer,
    composeWithDevTools(applyMiddleware(thunk)));