import React from 'react';

import { TableViewRow } from "../common/TableViewRow";
import './Table.css';
import { HeaderCell } from '../election-mgmt/misc';

const config = {
    headers: ["Id", "Name", "Action"],
    columns: [
        { caption: "Id", field: "id" },
        { caption: "Name", field: "name" },
    ]
}

    export const Table = (props) => {
        const { elections, onActionSubmit} = props;

        return (
            <table id="election-table">
                <thead>
                    <tr>
                        {config.headers.map(column => {
                            return (
                                <HeaderCell key={column}>{column}</HeaderCell>
                            )
                        })}

                    </tr>
                </thead>
                <tbody>
                    {elections.map(election =>
                        <TableViewRow key={election.id} election={election} config={config} onActionSubmit={onActionSubmit}/>
                    )}
                </tbody>
            </table>
        );
    };