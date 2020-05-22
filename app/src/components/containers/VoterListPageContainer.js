import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
    refreshVoters, 
    saveVoter, 
    deleteVoter,
    createEditVoterAction, createCancelVoterAction
} from '../../actions/voterActions';
  
import { VoterListPage } from '../pages/VoterListPage';
  
export const VoterListPageContainer = () => {

  const voters = useSelector(state => state.voters);
  const editVoterId = useSelector(state => state.editVoterId);

  const dispatchProps = bindActionCreators({
    onRefreshVoters: refreshVoters,
    onSaveVoter: saveVoter,
    onDeleteVoter: deleteVoter,
    onEditVoter: createEditVoterAction,
    onCancelVoter: createCancelVoterAction,
  }, useDispatch());


  return <VoterListPage
    {...dispatchProps}
    voters={voters}
    editVoterId={editVoterId}
    headerText="Voter List" />;
};


