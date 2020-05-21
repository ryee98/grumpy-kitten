import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { CarToolPage } from '../pages/CarToolPage';

import {
    refreshCars, addCar, updateCar, deleteCar, createEditAction, createCancelAction
} from '../../actions/carToolActions';

export const CarToolPageContainer = () => {

    const cars = useSelector(state => state.cars);
    console.log("cars", cars);
    const editCarId = useSelector(state => state.editCarId);

    const dispatchProps = bindActionCreators({
        onAddCar: addCar,
        onUpdateCar: updateCar,
        onDeleteCar: deleteCar,
        onEditCar: createEditAction,
        onCancelCar: createCancelAction,
        onRefreshCars: refreshCars,
    }, useDispatch());

    /* the above code is a replacement for doing this
    const dispatch = useDispatch();
    const doAdd = car => dispatch(createAddAction(car));
    const doUpdate = car => dispatch(createUpdateAction(car));
    const doDelete = id => dispatch(createDeleteAction(id));
    const doEdit = id => dispatch(createEditAction(id));
    const doCancel = () => dispatch(createCancelAction());
    */

    return <CarToolPage {...dispatchProps} cars={cars} editCarId={editCarId} />
};
