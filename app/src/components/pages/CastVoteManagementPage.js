import React, { useEffect } from 'react';

import {Table} from "../common/Table";


export const CastVoteManagementPage =  (props) => {
    const { onRefreshElections, elections, onCastElectionVote, castElectionVoteID} = props;

    let showCastVotePage = false,
        electionSelected = [];

    useEffect(() => {
        console.log('useEffect refreshElections');
        onRefreshElections();
    }, []);

    const displayCastVotePage = (electionId)  => {
        onCastElectionVote(electionId);
        electionSelected = elections.filter(e => e.id === electionId);
    }
    return <>
        {castElectionVoteID  > -1
          ?  <div>fodgdfigu</div>
          : <Table elections={elections} onActionSubmit={displayCastVotePage}/>}
    </>
}