import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"; 
import { createBrowserHistory } from 'history';

import ROUTES from './routes';

const history = createBrowserHistory();

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter history={history}>
                <Switch>
                    {ROUTES.map(obj => (
                        <Route exact path={obj.path} key={obj.path} component={obj.component} />
                    ))}
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;
