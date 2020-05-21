import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { createAddAction, createSubtractAction, createMultiplyAction,
createDivideAction, createClearAction, createDeleteAction } from '../../actions/calcActions';
import { CalcToolPage } from '../pages/CalcToolPage';

export const CalcToolPageContainer = () => {

    const computedProps = useSelector(state => {
      return state.history.reduce((accumulators, entry) => {
        const {result, addCount, subCount, multCount, divCount} = accumulators;
        switch (entry.op) {
          case '+':
            return {...accumulators,
              result : accumulators.result += entry.val,
              addCount: accumulators.addCount + 1
            };
            break;
          case '-': 
          return {...accumulators,
              result: accumulators.result -= entry.val,
              subCount: accumulators.subCount + 1,
          }
              break;
          case '*':
              return {...accumulators,
                result: accumulators.result *= entry.val,
                multCount: accumulators.multCount + 1,
              }
              break;
          case '/':
              return {
                ...accumulators,
                result: accumulators.result /= entry.val,
                divCount: accumulators.divCount + 1,
              }
              break;
          default:
        }
      }, {result: 0, addCount:0,subCount:0,multCount:0,divCount:0});
    });
  
    const history = useSelector(state => state.history);
  
    const calcOps = (opVal) => {
      /*
      let count = 0;
      history.forEach((op) => {
        console.log('  op:', op.op, opVal, count);
        count = (opVal === op.op) ? ++count : count;
      });
      return count;
      */
     return history.reduce((count,event) => {
        return count = (opVal === event.op) ? ++count : count;
     }, 0);
    };
  
    const dispatch = useDispatch();
    const doAdd = value => dispatch(createAddAction(value));
    const doSubtract = value => dispatch(createSubtractAction(value));
    const doMultiply = value => dispatch(createMultiplyAction(value));
    const doDivide = value => dispatch(createDivideAction(value));
    const doClear = () => dispatch(createClearAction());
    const doDelete = (entryIndex) => dispatch(createDeleteAction(entryIndex));
  
    return <CalcToolPage {...computedProps} history={history} onAdd={doAdd} onSubtract={doSubtract} onMultiply={doMultiply} onDivide={doDivide} onClear={doClear} onDelete={doDelete}/>;
  
  };
  