import React, { useEffect, useState } from 'react';

import {Table} from "../common/Table";
import {CastVoteBallotForm} from "../castVote/CastVoteBallotForm"


export const CastVoteManagementPage =  (props) => {
    const {onRefreshBallots, onRefreshElections, ballots,elections, onCastElectionVote, castVoteSelectedElection} = props;

    useEffect(() => {
        console.log('useEffect refreshElections');
        onRefreshElections();
        console.log('useEffect onRefreshBallots');
        onRefreshBallots();
    }, []);

    const displayCastVotePage = (election)  => {
        const userId = 1;
        let hasUser = ballots.filter(ballot => {
            return ballot.voterId === userId && ballot.electionName === election.name
        });
        //hasUser.length > 0  ? "jdhfjksdf" : onCastElectionVote(election);
        onCastElectionVote(election);
    }
    return <>
        {castVoteSelectedElection
          ?  <CastVoteBallotForm  buttonText="Cast Vote" electionSelectedForVote={castVoteSelectedElection}/>
          : <Table elections={elections} onActionSubmit={displayCastVotePage}/>}
    </>
}