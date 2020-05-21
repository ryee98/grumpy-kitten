import React from 'react';

import {DataCell } from './misc';

export const ElectionViewRow = (props) => {
    const { election, config } = props;

    console.log('electionView');

    return (
        
        <tr>{config.columns.map((column) => {
            return (
            <DataCell key={column.field}>{election[column.field]}</DataCell>
            );
        })}
        <DataCell><button>View Results</button></DataCell>
        </tr>
    )
}
