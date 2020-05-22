import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { CastVoteManagementPage } from '../pages/CastVoteManagementPage';
import { refreshVoters } from '../../actions/voterActions';
import { refreshBallots } from '../../actions/ballotManagementActions';
import { refreshElections } from '../../actions/electionManagementActions';
import { createCastVoteSelectedElectionAction ,createCastVoteStepAction} from '../../actions/castVoteManagementActions';

export const CastVotePageContainer = () => {

   const {ballots, castVoteStep, elections, voters, castVoteSelectedElection} = useSelector(state => state);

  const dispatchProps = bindActionCreators({
    onCastVoteStep :createCastVoteStepAction,
    onRefreshVoters: refreshVoters,  
    onRefreshBallots:refreshBallots,
    onRefreshElections: refreshElections,
    onCastElectionVote:createCastVoteSelectedElectionAction
  }, useDispatch());

    return <CastVoteManagementPage 
        {...dispatchProps}
        castVoteStep={castVoteStep}
        elections={elections} 
        ballots={ballots} 
        voters={voters}
        castVoteSelectedElection={castVoteSelectedElection}
    />;
  };
