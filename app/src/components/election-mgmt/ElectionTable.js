import React from 'react';

import { ElectionViewRow } from './ElectionViewRow';
import './ElectionTable.css';
import { HeaderCell } from './misc';

const config = {
    headers: ["Id", "Name", "Action"],
    columns: [
        { caption: "Id", field: "id" },
        { caption: "Name", field: "name" },
    ]
}

    export const ElectionTable = (props) => {
        const { elections} = props;

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
                        <ElectionViewRow key={election.id} election={election} config={config}/>
                    )}
                </tbody>
            </table>
        );
    };