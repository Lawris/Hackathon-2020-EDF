import React  from 'react';
import MainProps from './MainProps';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Settings from '../Settings/Settings';
import Conversation from '../Conversation/Conversation';
import { Button, Menu, MenuItem } from '@material-ui/core';


const Main: React.FunctionComponent<MainProps> = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: { currentTarget: React.SetStateAction<null>; }) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
        <Router>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>Menu</Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                    <MenuItem onClick={handleClose}><Link to="/app/conversationlist">Liste de Conversation</Link></MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            <Link to="/app/settings">settings</Link><br/>
            <Link to="/app/settings">settings</Link><br/>
            <Link to="/app/settings">settings</Link><br/>
            <Link to="/app/settings">settings</Link><br/>
            <Switch>
                <Route path="/app/conversation" component={Conversation} exact/>
                <Route path="/app/settings" component={Settings} exact/>
            </Switch>
        </Router>
    )
}

export default Main;


