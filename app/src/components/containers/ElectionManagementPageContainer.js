import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { ElectionManagementPage } from '../pages/ElectionManagementPage';
import { refreshElections, addElection, createSaveQuestionAction, createCancelAction } from '../../actions/electionManagementActions';

export const ElectionManagementPageContainer = () => {
  const {elections, electionQuestions} = useSelector(state => state);
  console.log('ElectionManagementPageContainer elections', elections);

  const dispatchProps = bindActionCreators({
    onRefreshElections: refreshElections,
    onSubmitBallotItem: createSaveQuestionAction,
    onSubmitElection: addElection,
    onCancel: createCancelAction,
  }, useDispatch());

    return <ElectionManagementPage {...dispatchProps} elections={elections} electionQuestions={electionQuestions}/>;
  };
