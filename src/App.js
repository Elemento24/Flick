import React from 'react';
import Layout from './hoc/Layout';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Landing from './components/Landing/Landing';
import asyncComponent from './hoc/asyncComponent';

const asyncSearch = asyncComponent(() => {
    return import('./components/SearchResults/SearchResults');
});

const asyncTrending = asyncComponent(() => {
    return import('./components/Trending/Trending');
});

const App = () => {
    
    let routes = (
        <Switch>
            <Route path='/trending' exact component={asyncTrending} />
			<Route path='/search' exact component={asyncSearch} />
			<Route path='/' exact render={() => <Landing /> } />
			<Redirect to='/' />
		</Switch>
    );
    
    return (
        <div className="App">
            <Layout>
                {routes}
            </Layout>
        </div>
    );
};

export default withRouter(App);
