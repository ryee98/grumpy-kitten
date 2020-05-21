import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { ElectionManagementPage } from '../pages/ElectionManagementPage';
import { refreshElections, createSaveQuestionAction } from '../../actions/electionManagementActions';

export const ElectionManagementPageContainer = () => {
  const elections = useSelector(state => state.elections);
  const questions = useState()
  console.log('ElectionManagementPageContainer elections', elections);

  const dispatchProps = bindActionCreators({
    onRefreshElections: refreshElections,
    onSubmitBallotIem: createSaveQuestionAction,

  }, useDispatch());

    return <ElectionManagementPage {...dispatchProps} elections={elections}/>;
  };
