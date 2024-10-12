import React, {useEffect} from 'react';
import {FirstPage} from "./first-page/first-page";
import {Header} from "./header/header";
import styled from "styled-components";
import {Page, Page2, Page3} from "./page";
import {Statistic} from "./statistic/statistic";
import {BrowserRouter as Router, Switch, Route, useLocation} from 'react-router-dom';
import {ProblemAndSolutions} from "./problem-and-solutions/problem-and-solutions";
import {Perspective} from "./perspective/perspective";
import {ModelCard} from "./models/model-card";
import {Graph} from "./models/graph/graph";
import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import {BottomLinks} from "./links/links";

export let isRoot = localStorage?.getItem('engine/token') === 'Aephile1122_' ?? false;
export const ENV = {
    API_URL: 'http://77.37.124.61:2525'
}


const AppWrapper = styled.div`
  //margin: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`

const ExtraWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
`


const ModelComponent = () => {
    return (
        <>
            <Page backgroundHref={'images/model/model.png'}><Graph/> </Page>
            <Page3 short backgroundHref={'images/model/bottom.png'}><BottomLinks/></Page3>
        </>
    )
}

const PageWrapper = styled.div`
  height: 100%;
  width: 100%;
`

const HomeComponent = () => {

    useEffect(() => {
        const scrollToHash = () => {
            const hash = window.location.hash.substring(1); // Remove the '#' character
            if (hash) {
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({behavior: 'smooth'});
                }
            }
        };

        scrollToHash();

        window.addEventListener('hashchange', scrollToHash);

        return () => {
            window.removeEventListener('hashchange', scrollToHash);
        };
    }, []);

    return (
        <PageWrapper>
            <Page backgroundHref={'images/main/first.png'}><FirstPage/></Page>
            <Page backgroundHref={'images/main/second.png'}><Statistic/></Page>
            <Page backgroundHref={'images/main/third.png'}><ProblemAndSolutions/></Page>
            <Page backgroundHref={'images/main/fourth.png'}><Perspective/></Page>
            <Page2 backgroundHref={'images/main/fifth.png'}><BottomLinks/></Page2>
        </PageWrapper>
    )
}

const queryClient = new QueryClient()

function App() {
    return (
        <AppWrapper className="App">
            <ExtraWrapper>
                <QueryClientProvider client={queryClient}>
                    <Router>
                        <Header/>
                        <Switch key={'/models'}>
                            <Route exact path="/models" component={ModelComponent}/>
                        </Switch>
                        <Switch key={'/'}>
                            <Route exact path="/" component={HomeComponent}/>
                        </Switch>
                    </Router>
                </QueryClientProvider>
            </ExtraWrapper>
        </AppWrapper>
    );
}

export default App;
