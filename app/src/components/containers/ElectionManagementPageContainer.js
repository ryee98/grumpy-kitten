import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { ElectionManagementPage } from '../pages/ElectionManagementPage';
import { refreshElections } from '../../actions/electionManagementActions';

export const ElectionManagementPageContainer = () => {
  const elections = useSelector(state => state.elections);
  console.log('ElectionManagementPageContainer elections', elections);

  const dispatchProps = bindActionCreators({
    onRefreshElections: refreshElections,
  }, useDispatch());

    return <ElectionManagementPage {...dispatchProps} elections={elections}/>;
  };
