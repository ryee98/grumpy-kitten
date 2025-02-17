import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
    refreshVoters, 
    addVoter, 
} from '../../actions/voterActions';
  
import { VoterRegistrationPage } from '../pages/VoterRegistrationPage';
  
export const VoterRegistrationPageContainer = () => {

  const voters = useSelector(state => state.voters);
  const editVoterId = useSelector(state => state.editVoterId);

  const dispatchProps = bindActionCreators({
    onRefreshVoters: refreshVoters,
    onAddVoter: addVoter,
  }, useDispatch());


  return <VoterRegistrationPage
    {...dispatchProps}
    voters={voters}
    editVoterId={editVoterId}
    headerText="Voter Registration" />;
};


