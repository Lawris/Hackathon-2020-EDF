import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React, {Component} from 'react';
import './ConversationList.css'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import DraftsIcon from '@material-ui/icons/Drafts';

class ConvList extends React.Component {
    state = {
      conv1DisplayValue : "none",
      conv2DisplayValue : "none"
    }
    render (){
        let display1Class = "display"
        let display2Class = "display"
        console.log(this.state)
        if(this.state.conv1DisplayValue == "none") display1Class = "displayNone"
        if(this.state.conv2DisplayValue == "none") display2Class = "displayNone"
        return(
            <div>
                <div className="menu-conv">
                    <List component="nav" aria-label="main mailbox folders">
                    <ListItem>
                        <ListItemIcon>
                        <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary="Messages Télétransmis"/>
                    </ListItem>
                    </List>
                    <Divider />
                    <List component="nav" aria-label="secondary mailbox folders">
                    <ListItem button onClick={() => {this.setState({conv2DisplayValue: "none",conv1DisplayValue: "unset"})}}>
                        <ListItemText primary="CEX - Demande de mise en RNE - BOCPO"/>
                    </ListItem>
                    <ListItem button onClick={() => {this.setState({conv1DisplayValue: "none",conv2DisplayValue: "unset"})}}>
                        <ListItemText primary="CCO - Demande de mise en RESEAUX - BOCPO"/>
                    </ListItem>
                    </List>
                </div>
                <div className={display1Class}>
                    <h1>DISPLAY 1</h1>
                </div>
                <div className={display2Class}>
                    <h1>DISPLAY 2</h1>
                </div>
            </div>
        );
    }
}

export default ConvList;

