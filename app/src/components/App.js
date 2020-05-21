import React from 'react';

import {
    Switch, Route,
} from 'react-router-dom';

import { PageLayout } from './blocks/PageLayout';
import { PageHeader } from './PageHeader';
import { MainMenu } from './MainMenu';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ElectionManagementPageContainer } from './containers/ElectionManagementPageContainer';

import { Sidebar } from './blocks/Sidebar';
import { PageFooter } from './PageFooter';
import { Content } from './blocks/Content';
import { Provider } from 'react-redux';

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
                        <ElectionManagementPageContainer />
                    </Route>
                </Switch>
            </Content>
            <Switch>
                <Route path="/election_mgmt" exact>
                    <Sidebar className="about-page" />
                </Route>
                <Route path="/" >
                    <Sidebar className="home-page" />
                </Route>
            </Switch>
            <PageFooter />
        </PageLayout>
    );
};