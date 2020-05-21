import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { CastVoteManagementPage } from '../pages/CastVoteManagementPage';
import { refreshBallots } from '../../actions/ballotManagementActions';
import { refreshElections } from '../../actions/electionManagementActions';
import { createCastVoteSelectedElectionAction } from '../../actions/castVoteManagementActions';

export const CastVotePageContainer = () => {

 const elections = useSelector(state => state.elections),
       {ballots, castVoteSelectedElection} = useSelector(state => state);

 console.log('CastVotePageContainer --- elections', elections);

  const dispatchProps = bindActionCreators({
    onRefreshBallots:refreshBallots,
    onRefreshElections: refreshElections,
    onCastElectionVote:createCastVoteSelectedElectionAction
  }, useDispatch());

    return <CastVoteManagementPage 
        {...dispatchProps} 
        elections={elections} 
        ballots={ballots} 
        castVoteSelectedElection={castVoteSelectedElection}
    />;
  };
