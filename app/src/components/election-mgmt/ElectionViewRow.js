import React from 'react';

import {DataCell } from './misc';

export const ElectionViewRow = (props) => {
    const { election, electionResults, config } = props;

    const onViewResults = () => {
        console.log('onViewElectionResults', election);
        electionResults(election);
    }

    return (
        
        <tr>{config.columns.map((column) => {
            return (
            <DataCell key={column.field}>{election[column.field]}</DataCell>
            );
        })}
        <DataCell><button onClick={onViewResults}>View Results</button></DataCell>
        </tr>
    )
}
