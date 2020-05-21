import React from 'react';
import {HeaderCell, DataCell} from '../car-tool/misc';
import { SectionHeader } from '../blocks/SectionHeader';

import { History } from '../../components/History';

import {createAddAction, createSubtractAction, createMultiplyAction, createDivideAction, createClearAction, createDeleteAction } from '../../actions/calcActions';
import { useForm } from '../../hooks/useForm';
import './CalcToolPage.css';
import { historyReducer } from '../../reducers/calcReducers';

export const CalcToolPage = ({result, addCount, subCount, multCount, divCount, history, onAdd, onSubtract, onMultiply, onDivide, onClear, onDelete}) => {
  const [calcForm, change, resetCalcForm] = useForm({ num: 0 });

  const clear = () => {
    onClear();
    resetCalcForm();
  }

//  const doDelete = (index) => {
//    console.log('doDelete');
//    onDelete(index);
 // }

  return <>
    <SectionHeader headerText="Calc Tool" />
    <section>
  <form>
    <div className="calc-tool">
      Result: {result}
    </div>
    <div>
      <input className="calc-tool" type="number" name="num" value={calcForm.num} onChange={change} />
    </div>
    <div>
      <button className="calc-tool" type="button" onClick={ () => onAdd(calcForm.num)}>+</button>
      <button className="calc-tool" type="button" onClick={ () => onSubtract(calcForm.num)}>-</button>
      <button className="calc-tool" type="button" onClick={ () => onMultiply(calcForm.num)}>*</button>
      <button className="calc-tool" type="button" onClick={ () => onDivide(calcForm.num)}>/</button>
      <button className="calc-tool" type="button" onClick={ () => onClear(clear)}>Clear</button>
    </div>
    </form>
    </section>
    <div className="calc-tool">
        <section>
   History:<History histList={history} onDelete={onDelete}/>
   
   {/*<ul>
      {history.map( (entry, i) => <li key={i} className="historyItem">
        {entry.op} {entry.val}&nbsp;
        <button type="button" onClick={() => onDelete(i)}>X</button>
      </li>)}
   </ul> */}
    </section>
    <section>
    <table id='calc-table'>
      <thead>
        <tr><HeaderCell>+</HeaderCell><HeaderCell>-</HeaderCell><HeaderCell>*</HeaderCell><HeaderCell>/</HeaderCell></tr>
      </thead>
      <tbody>
      <tr><DataCell>{addCount}</DataCell><DataCell>{subCount}</DataCell><DataCell>{multCount}</DataCell><DataCell>{divCount}</DataCell></tr>
      </tbody>
    </table>
    </section>
    </div>
  </>
};
