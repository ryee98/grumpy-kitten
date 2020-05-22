import React, { useEffect, useState } from 'react';

import {Table} from "../common/Table";
import {CastVoteBallotForm} from "../castVote/CastVoteBallotForm";
import {CastVoteBalletUserNameForm} from "../castVote/CastVoteBalletUserNameForm";

import {ErrorPage} from "../pages/ErrorPage";


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

    const errorMessages = [
        "You are not registered. Please Register to vote",
        "You have already voted for this Eelection"
    ];
    

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
                onCastVoteStep(-2);
            } 
        } else {
            onCastVoteStep(-1);
        }
    }

    const cancelUserNameSubmit = (email)  => {
        onCastVoteStep(0); 
    }



    const displayView = () => {
        let view = "";
        
        if(castVoteStep === 0) {
            view = <Table elections={elections} onActionSubmit={displayCastVotePage} />;
        } else if (castVoteStep === 1) {
            view = <CastVoteBalletUserNameForm onUserNameSubmit={onUserNameSubmit} buttonText="Enter UserName" onCancelUserNameSubmit={cancelUserNameSubmit} />;
        }  else if (castVoteStep === 2) {
            view = <CastVoteBallotForm  voters={voters} buttonText='Cast Vote' electionSelectedForVote={castVoteSelectedElection}/>
        }   else if (castVoteStep === -1) {
            view =  <ErrorPage message={errorMessages[0]} />
        } else if (castVoteStep === -2) {
            view =  <ErrorPage message={errorMessages[1]} />
        }

        return view;

    }
    return <>
      {displayView()}
   
    </>
}