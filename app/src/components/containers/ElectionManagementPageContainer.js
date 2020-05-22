import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { ElectionManagementPage } from '../pages/ElectionManagementPage';
import { refreshElections, addElection, createSaveQuestionAction, createCancelAction } from '../../actions/electionManagementActions';
import { refreshBallots } from '../../actions/ballotManagementActions';

export const ElectionManagementPageContainer = () => {
  const {elections, ballots, electionQuestions} = useSelector(state => state);
  console.log('ElectionManagementPageContainer elections', elections);

  const dispatchProps = bindActionCreators({
    onRefreshElections: refreshElections,
    onSubmitBallotItem: createSaveQuestionAction,
    onSubmitElection: addElection,
    onCancel: createCancelAction,
    onRefreshBallots: refreshBallots,
  }, useDispatch());

    return <ElectionManagementPage {...dispatchProps} elections={elections} ballots={ballots} electionQuestions={electionQuestions} headerText={"Election Management"}/>;
  };
