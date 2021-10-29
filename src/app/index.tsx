import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Main from '../app/components/main/main';
import ModalWrapper from "./containers/modal/modalWrapper";

const history = createBrowserHistory();

const Root: React.FC = () => (
    <Router history={history}>
        <>
            <Switch>
                <Route path="/" exact component={Main}/>
            </Switch>
            <ModalWrapper/>
        </>
    </Router>
);

export default Root;