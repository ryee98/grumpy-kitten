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
import { AboutPage } from './pages/AboutPage';
import { ElectionManagementPageContainer } from './containers/ElectionManagementPageContainer';
import { VoterRegistrationPageContainer } from './containers/VoterRegistrationPageContainer';

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
                    <Route path="/about" exact>
                        <AboutPage />
                    </Route>
                    <Route path="/election_mgmt" exact>
                        <Provider store={votingSystemStore}>
                        <ElectionManagementPageContainer />
                        </Provider>
                    </Route>
                    <Route path="/voter_reg" exact>
                        <Provider store={voterStore}>
                            <VoterRegistrationPageContainer />
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
                <Route path="/" >
                    <Sidebar className="home-page" />
                </Route>
            </Switch>
            <PageFooter />
        </PageLayout>
    );
};