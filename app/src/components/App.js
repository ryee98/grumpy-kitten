import React from 'react';

import {
    Switch, Route,
} from 'react-router-dom';

import { Provider } from 'react-redux';

import { PageLayout } from './blocks/PageLayout';
import { Sidebar } from './blocks/Sidebar';
import { Content } from './blocks/Content';
import { PageFooter } from './PageFooter';
import { PageHeader } from './PageHeader';
import { MainMenu } from './MainMenu';
import { HomePage } from './pages/HomePage';
import { CastVotePageContainer } from './containers/CastVotePageContainer';
import { ElectionManagementPageContainer } from './containers/ElectionManagementPageContainer';
import { VoterRegistrationPageContainer } from './containers/VoterRegistrationPageContainer';
import { VoterListPageContainer } from './containers/VoterListPageContainer';

import { votingSystemStore } from '../stores/electionSystemStore';
import { voterStore } from '../stores/voterStore';

export const App = () => {
    return (
        <PageLayout>
            <PageHeader />
            <MainMenu />
            <Content>
                <Switch>
                    <Route path="/" exact>
                        <HomePage />
                    </Route>
                    <Route path="/cast-vote" exact>
                        <Provider store={votingSystemStore}>
                            <CastVotePageContainer />
                        </Provider>
                    </Route>
                    <Route path="/election_mgmt" exact>
                        <Provider store={votingSystemStore}>
                            <ElectionManagementPageContainer />
                        </Provider>
                    </Route>
                    <Route path="/voter_reg" exact>
                        <Provider store={votingSystemStore}>
                            <VoterRegistrationPageContainer />
                        </Provider>
                    </Route>
                    <Route path="/voter_list" exact>
                        <Provider store={votingSystemStore}>
                            <VoterListPageContainer />
                        </Provider>
                    </Route>
                </Switch>
            </Content>
            <Switch>
                <Route path="/election_mgmt" exact>
                    <Sidebar className="election-mgmt-page" />
                </Route>
                <Route path="/voter_reg" exact>
                    <Sidebar className="voter-reg-page" />
                </Route>
                <Route path="/voter_list" exact>
                    <Sidebar className="voter-list-page" />
                </Route>
                <Route path="/" >
                    <Sidebar className="home-page" />
                </Route>
            </Switch>
            <PageFooter />
        </PageLayout>
    );
};