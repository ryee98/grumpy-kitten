import React, { useEffect, useState } from 'react';

import {Table} from "../common/Table";
import {CastVoteBallotForm} from "../castVote/CastVoteBallotForm"


export const CastVoteManagementPage =  (props) => {
    const { onRefreshElections, elections, onCastElectionVote, castVoteSelectedElection} = props;

    useEffect(() => {
        console.log('useEffect refreshElections');
        onRefreshElections();
    }, []);

    const displayCastVotePage = (election)  => {
        onCastElectionVote(election);
    }
    return <>
        {castVoteSelectedElection
          ?  <CastVoteBallotForm  buttonText="Cast Vote" electionSelectedForVote={castVoteSelectedElection}/>
          : <Table elections={elections} onActionSubmit={displayCastVotePage}/>}
    </>
}