import React  from 'react';
import MainProps from './MainProps';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Settings from '../Settings/Settings';
import Conversation from '../Conversation/Conversation';


const Main: React.FunctionComponent<MainProps> = (props) => {
    return (
        <Router>
            <Link to="/app/settings">settings</Link>
            <Switch>
                <Route path="/app/settings" component={Settings} exact/>
                <Route path="/app/conversation" component={Conversation} exact/>
            </Switch>
        </Router>
    )
}

export default Main;