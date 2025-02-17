import React, { useState } from 'react';

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
    const { elections, ballots } = props;
    const [electionResults, setElectionResults] = useState({electionName:'', questions:[]});

    const calculateElectionResults = (election) => {
        let results = {
            electionName: election.name, questions: []
        };
        const ballotFilter = (ballot) => {
            return election.name === ballot.electionName;
        }
        const electionBallots = ballots.filter(ballotFilter);
        const ballotResponses = Array.from(election.ballotItems, question => { return { "question": question, "y": 0, "n": 0 } });
        let i;
        for (i = 0; i < ballotResponses.length; i++) {
            ballotResponses[i].y = electionBallots.filter((b) => {
                return b.voterResponse[i]
            }).length;
        }
        results.questions = ballotResponses;
        results.responseCount = ballotResponses.length;
        console.log('results', results);
        setElectionResults(results);
    };

    return (
        <div className="view-cont">
            <div>
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
                            <ElectionViewRow key={election.id} election={election} electionResults={calculateElectionResults} config={config} />
                        )}
                    </tbody>
                </table>
            </div>
            {electionResults.electionName !== '' && 
            <div className="election-results">
            <h1>{electionResults.electionName}</h1>
            <table>
                <thead>
                    <tr><th>Question</th><th>Yes</th><th>No</th></tr>
                </thead>
            <tbody>
                {electionResults.questions.map((item,index) => {
                    return <tr key={index}><td>{item.question}</td><td>{item.y}</td><td>{electionResults.responseCount - item.y}</td></tr>
                })}
                </tbody>
            </table>
            </div>}
        </div>
    );
};
