import React from 'react';

import {
    Switch, Route,
} from 'react-router-dom';

import { PageLayout } from './blocks/PageLayout';
import { PageHeader } from './PageHeader';
import { MainMenu } from './MainMenu';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CarToolPageContainer } from './containers/CarToolPageContainer';
import { ColorToolPageContainer } from './containers/ColorToolPageContainer';
import { CalcToolPageContainer } from './containers/CalcToolPageContainer';
import { Sidebar } from './blocks/Sidebar';
import { PageFooter } from './PageFooter';
import { Content } from './blocks/Content';
import { Provider } from 'react-redux';
import { carToolStore } from '../store/carToolStore';
import { colorToolStore } from '../store/colorToolStore';
import { calcStore } from '../store/calcStore';

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
                    <Route path="/color-tool" exact>
                        <Provider store={colorToolStore}>
                            <ColorToolPageContainer />
                        </Provider>
                    </Route>
                    <Route path="/car-tool" exact>
                        <Provider store={carToolStore}>
                            <CarToolPageContainer />
                        </Provider>
                    </Route>
                    <Route path="/calc-tool" exact>
                        <Provider store={calcStore}>
                            <CalcToolPageContainer />
                        </Provider>
                    </Route>
                </Switch>
            </Content>
            <Switch>
                <Route path="/about" exact>
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