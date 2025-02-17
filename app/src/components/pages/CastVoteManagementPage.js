import React, { useEffect } from 'react';

import { Table } from "../common/Table";
import { CastVoteBallotForm } from "../castVote/CastVoteBallotForm";
import { CastVoteBalletUserNameForm } from "../castVote/CastVoteBalletUserNameForm";

import { ErrorPage } from "../pages/ErrorPage";
import { SuccessPage } from "../pages/SuccessPage";

import './CastVoteManagementPage.css';
import { SectionHeader } from '../blocks/SectionHeader';
import { ContentSection } from '../blocks/ContentSection';


export const CastVoteManagementPage = (props) => {
    const {
        onRefreshBallots,
        onRefreshElections,
        onRefreshVoters,
        onBallotAdd,
        onUserActive,
        ballots,
        castVoteStep,
        voters,
        elections,
        onCastElectionVote,
        onCastVoteStep,
        castVoteSelectedElection,
        userActiveId
    } = props;

    useEffect(() => {
        onRefreshElections();
        onRefreshBallots();
        onRefreshVoters();
    }, []);

    const displayCastVotePage = (election) => {
        onCastVoteStep(castVoteStep + 1);
        onCastElectionVote(election);
    };

    const errorMessages = [
        "You are not registered. Please Register to vote",
        "You have already voted for this Election."
    ];


    const onUserNameSubmit = (email) => {
        let userExist = voters.filter(v => {
            return v.email === email;
        });

        if (userExist.length > 0) {

            let hasUserVoted = ballots.filter(ballot => {
                return ballot.voterId === userExist[0].id && ballot.electionName === castVoteSelectedElection.name
            });
            if (hasUserVoted.length > 0) {
                onCastVoteStep(-2);
            } else {
                onUserActive(userExist[0].id);
                onCastVoteStep(castVoteStep + 1);
            }
        } else {
            onCastVoteStep(-1);
        }
    }

    const cancelUserNameSubmit = (email) => {
        onCastVoteStep(0);
    }

    const castVoteSubmit = (ballotQuestionResponse) => {
        let ballotToAdd =
        {
            "id": ballots.length + 1,
            "voterId": userActiveId,
            "electionName": castVoteSelectedElection.name,
            "voterResponse": Object.values(ballotQuestionResponse)
        };
        onBallotAdd(ballotToAdd);
        onCastVoteStep(3);
    };

    const displayView = () => {
        let view = "";

        if (castVoteStep === 0) {
            view = <Table elections={elections} onActionSubmit={displayCastVotePage} />;
        } else if (castVoteStep === 1) {
            view = <CastVoteBalletUserNameForm
                onUserNameSubmit={onUserNameSubmit}
                buttonText="Enter UserName"
                onCancelUserNameSubmit={cancelUserNameSubmit}
            />;
        } else if (castVoteStep === 2) {
            view = <CastVoteBallotForm
                voters={voters} buttonText='Cast Vote'
                electionSelectedForVote={castVoteSelectedElection}
                castVoteSubmit={castVoteSubmit}
            />
        } else if (castVoteStep === 3) {
            view = <SuccessPage message="You have successfully voted!" />
        } else if (castVoteStep === -1) {
            view = <ErrorPage message={errorMessages[0]} />
        } else if (castVoteStep === -2) {
            view = <ErrorPage message={errorMessages[1]} />
        }

        return view;

    }
    return (<>
        <SectionHeader headerText='Cast a Vote' />
        <ContentSection headerText="Available Elections">
            {displayView()}
        </ContentSection>
    </>
    )
}