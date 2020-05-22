import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  refreshVoters,
  saveVoter,
  deleteVoter, createSortVoterAction,
  createEditVoterAction, createCancelVoterAction
} from '../../actions/voterActions';

import { VoterListPage } from '../pages/VoterListPage';

export const VoterListPageContainer = () => {
  const FIRST_NAME = "FIRST_NAME";
  const LAST_NAME = "LAST_NAME";
  const voters = useSelector(state => {
    if (typeof state.voters !== 'undefined') {
      console.log('useSelector voters', state.voters);
      console.log('slice voters', state.voters.slice());
    
      const compareValues = (key, order = 'asc') => {
        return function innerSort(a, b) {
          if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
          }
      
          const varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
          const varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];
      
          let comparison = 0;
          if (varA > varB) {
            comparison = 1;
          } else if (varA < varB) {
            comparison = -1;
          }
          return (
            (order === 'desc') ? (comparison * -1) : comparison
          );
        };
      };
    switch (state.sortColumnId) {
      case FIRST_NAME:
        const comparefn = (a, b) => {
          console.log('a,b:', a, b);
          const fn_a = a.firstName.toUpperCase();
          const fn_b = b.firstName.toUpperCase();
          return fn_a - fn_b;
        }
        return state.voters.slice().sort(compareValues('firstName'));
      case LAST_NAME:
        const compareln = (a, b) => {
          const fn_a = a.lastName.toUpperCase();
          const fn_b = b.lastName.toUpperCase();
          return fn_a - fn_b;
        }
        return state.voters.slice().sort(compareValues('lastName'));
      default:
        return state.voters
    }}
    return state.voters;
  });

  const editVoterId = useSelector(state => state.editVoterId);

  const dispatchProps = bindActionCreators({
    onRefreshVoters: refreshVoters,
    onSaveVoter: saveVoter,
    onDeleteVoter: deleteVoter,
    onEditVoter: createEditVoterAction,
    onCancelVoter: createCancelVoterAction,
    onSort: createSortVoterAction,
  }, useDispatch());


  return <VoterListPage
    {...dispatchProps}
    voters={voters}
    editVoterId={editVoterId}
    headerText="Voter List" />;
};


