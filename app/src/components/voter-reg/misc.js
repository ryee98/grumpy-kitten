import React from 'react';

import tableStyles from './misc.module.css';

export const HeaderCell = (props) => 
  <th onClick={props.onClick} className={tableStyles.carTableHeaderCell} >{props.children}</th>

export const DataCell = ({ children }) => 
  <td className={tableStyles.carTableDataCell}>{children}</td>

  HeaderCell.defaultProps = {
    onClick: () => {},
  };