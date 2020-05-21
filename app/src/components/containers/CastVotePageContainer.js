import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { CastVoteManagementPage } from '../pages/CastVoteManagementPage';
import { refreshElections } from '../../actions/electionManagementActions';
import { createCastVoteElectionAction } from '../../actions/castVoteManagementActions';

export const CastVotePageContainer = () => {

 const elections = useSelector(state => state.elections);
 const castElectionVoteID = useSelector(state => state.castElectionVoteId);

 console.log('CastVotePageContainer --- elections', elections);

  const dispatchProps = bindActionCreators({
    onRefreshElections: refreshElections,
    onCastElectionVote:createCastVoteElectionAction
  }, useDispatch());

    return <CastVoteManagementPage {...dispatchProps} elections={elections} castElectionVoteID={castElectionVoteID}/>;
  };
