import React, { useEffect, useState } from 'react';

import {Table} from "../common/Table";
import {CastVoteBallotForm} from "../castVote/CastVoteBallotForm";
import {CastVoteBalletUserNameForm} from "../castVote/CastVoteBalletUserNameForm";


export const CastVoteManagementPage =  (props) => {
    const {
        onRefreshBallots, 
        onRefreshElections,
        onRefreshVoters, 
        ballots,
        castVoteStep,
        voters,
        elections, 
        onCastElectionVote,
        onCastVoteStep,
        castVoteSelectedElection
    } = props;

    useEffect(() => {
        onRefreshElections();
        onRefreshBallots();
        onRefreshVoters();
    }, []);

    const displayCastVotePage = (election)  => {
        onCastVoteStep(castVoteStep + 1);
        onCastElectionVote(election);
    };

    const onUserNameSubmit = (email)  => {
        let userExist = voters.filter(v => {
            return v.email === email
        });

        if(userExist.length > 0) {
            let hasUserVoted = ballots.filter(ballot => {
                return ballot.voterId === userExist[0].id && ballot.electionName === castVoteSelectedElection.name
            });
            if(hasUserVoted.length > 0) {
                onCastVoteStep(castVoteStep + 1);
            } else {
                onCastVoteStep(0);
            } 
        }
    }



    const displayView = () => {
        let view = "";
        
        if(castVoteStep === 0) {
            view = <Table elections={elections} onActionSubmit={displayCastVotePage} />;
        } else if (castVoteStep === 1) {
            view = <CastVoteBalletUserNameForm onUserNameSubmit={onUserNameSubmit} buttonText="Enter UserName"/>;
        }  else if (castVoteStep === 2) {
            view = <CastVoteBallotForm  voters={voters} buttonText='Cast Vote' electionSelectedForVote={castVoteSelectedElection}/>
        }   else if (castVoteStep > 3) {
            view =  "<div id='error'>You cannot vote</div>";
        } else {
            view = <Table elections={elections} onActionSubmit={displayCastVotePage} />;
        }

        return view;

    }
    return <>
      {displayView()}
   
    </>
}