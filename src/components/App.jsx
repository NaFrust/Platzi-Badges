import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Badges from './pages/Badges';
import BadgeNew from './pages/badgeNew';
import Layout from './Layout';
import NotFound from './pages/NotFound';
import HomeBadge from './pages/HomeBadge';

function App(){
    return(
        <BrowserRouter>
        <Layout> 
            <Switch>
                <Route exact path="/" component={HomeBadge}/>
                <Route exact path="/badges" component={Badges} />
                <Route exact path="/badges/new" component={BadgeNew} />
                <Route component={NotFound}/>
            </Switch>

        </Layout>
        </BrowserRouter>
    )
}
export default App;