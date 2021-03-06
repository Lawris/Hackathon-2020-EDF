import React  from 'react';
import MainProps from './MainProps';
import { makeStyles } from '@material-ui/core/styles';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Settings from '../Settings/Settings';
import Conversation from '../Conversation/Conversation';
import { Button, Menu, MenuItem, AppBar, Toolbar, Typography, IconButton, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import MessageIcon from '@material-ui/icons/Message';
import RoomIcon from '@material-ui/icons/LocationOn';
import ConversationList from '../ConversationList/ConversationList';
import Zone from '../ZoneSpecification/ZoneSpecification';

const useStyles = makeStyles({
    wrapper:{
        position: 'absolute',
        width: '100%',
        bottom: '0',
    },
    label:{
        color: "#000000",
    },
    title:{
        margin: "0 4%",
    }
  });

const Main: React.FunctionComponent<MainProps> = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event: { currentTarget: React.SetStateAction<null>; }) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        EDF Messages Télétransmis
                    </Typography>
                    {/* <Typography variant="h6" className={classes.title}>CCO - U12345 - John Filippi</Typography> */}
                    <Typography variant="h6" className={classes.title}>CEX - U67890 - Olivier Tavera</Typography>
                </Toolbar>
            </AppBar>
            <div>
                <Router>
                    <Switch>
                        <Route path="/app" component={Zone} exact/>
                        <Route path="/app/conversationlist" component={ConversationList} exact/>
                        <Route path="/app/settings" component={Settings} exact/>
                    </Switch>
                </Router>
            </div>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.wrapper}>
                <BottomNavigationAction label="Zones" icon={<RoomIcon />} href="/app"/>
                <BottomNavigationAction label="Conversations" icon={<MessageIcon />} href="/app/conversationlist" />
                <BottomNavigationAction label="Paramètres" icon={<SettingsIcon />} href="/app/settings" />
            </BottomNavigation>
        </div>
    )
}

export default Main;


