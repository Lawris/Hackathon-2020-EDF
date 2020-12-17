import { Divider, List, ListItem, ListItemText } from '@material-ui/core';
import React, {Component} from 'react';

interface SettingsState {
    [key: string]: any;
}

interface SettingsProps {}

export default class Settings extends React.Component<SettingsProps, SettingsState>{
    constructor(props: SettingsProps){
        super(props);
        this.state = {
            userMatricule: '',
            userPassword: '',
        }
    }
    render(){
        return <div> 
          <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink>
      </List>
        </div>
    }

}
