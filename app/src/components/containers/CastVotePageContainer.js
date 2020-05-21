import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { CastVoteManagementPage } from '../pages/CastVoteManagementPage';
import { refreshElections } from '../../actions/electionManagementActions';
import { createCastVoteSelectedElectionAction } from '../../actions/castVoteManagementActions';

export const CastVotePageContainer = () => {

 const elections = useSelector(state => state.elections);
 const castVoteSelectedElection = useSelector(state => state.castVoteSelectedElection);

 console.log('CastVotePageContainer --- elections', elections);

  const dispatchProps = bindActionCreators({
    onRefreshElections: refreshElections,
    onCastElectionVote:createCastVoteSelectedElectionAction
  }, useDispatch());

    return <CastVoteManagementPage {...dispatchProps} elections={elections} castVoteSelectedElection={castVoteSelectedElection}/>;
  };
