import React from 'react';

import {DataCell } from '../election-mgmt/misc';

export const TableViewRow = (props) => {
    const { election, config, onActionSubmit } = props;

    console.log('TableViewRow');

    return (
        
        <tr>{config.columns.map((column) => {
                return (
                    <DataCell key={column.field}>{election[column.field]}</DataCell>
                );
            })}
            <DataCell><button type="button" onClick={() => onActionSubmit(election.id)} >Cast Vote</button></DataCell>
        </tr>
    )
}
