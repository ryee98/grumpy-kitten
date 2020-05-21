import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { ColorToolPage } from '../pages/ColorToolPage';

import { addColor, deleteColor, refreshColors, } from '../../actions/colorToolActions';

export const ColorToolPageContainer = () => {
    
    const colors = useSelector(state => state);

    console.log("ColorToolPageContainer: colors", colors);
 /*   const dispatch = useDispatch();
    const onAddColor = color => dispatch(createAddAction(color));
*/
    const dispatchProps = bindActionCreators({
        onRefreshColors: refreshColors,
        onAddColor: addColor,
        onDeleteColor: deleteColor,
    }, useDispatch());

    return <ColorToolPage {...dispatchProps} colors={colors}/>
};
