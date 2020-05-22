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

    switch (state.sortColumnId) {
      case FIRST_NAME:
        const comparefn = (a, b) => {
          const fn_a = a.firstName.toUpperCase();
          const fn_b = b.firstName.toUpperCase();
          return fn_a - fn_b;
        }
        return voters.slice().sort(comparefn());
      case LAST_NAME:
        const compareln = (a, b) => {
          const fn_a = a.lastName.toUpperCase();
          const fn_b = b.lastName.toUpperCase();
          return fn_a - fn_b;
        }
        return voters.slice().sort(compareln());
      default:
        return state.voters
    }
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


