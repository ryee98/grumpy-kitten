import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { VoterRegistrationPage } from '../pages/VoterRegistrationPage';

// TOOO uncomment
// import {
//     refreshCars, addCar, updateCar, deleteCar, createEditAction, createCancelAction
// } from '../../actions/carToolActions';

export const VoterRegistrationPageContainer = () => {

    const voters = [];
    //useSelector(state => state.voters);
    console.log("voter", voters);
    const editVoterId = -1;
    //useSelector(state => state.editVoterId);

    // TODO -- uncomment
    const dispatchProps = [];
    //bindActionCreators({ 
    //     onAddCar: addCar,
    //     onUpdateCar: updateCar,
    //     onDeleteCar: deleteCar,
    //     onEditCar: createEditAction,
    //     onCancelCar: createCancelAction,
    //     onRefreshCars: refreshCars,
    // }, useDispatch());

    /* the above code is a replacement for doing this
    const dispatch = useDispatch();
    const doAdd = car => dispatch(createAddAction(car));
    const doUpdate = car => dispatch(createUpdateAction(car));
    const doDelete = id => dispatch(createDeleteAction(id));
    const doEdit = id => dispatch(createEditAction(id));
    const doCancel = () => dispatch(createCancelAction());
    */

    return <VoterRegistrationPage {...dispatchProps} voters={voters} editVoterId={editVoterId} />
};




