import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React, {Component} from 'react';
import './ConversationList.css'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
                    <div className="Messages">
                        <div className='Message1'>
                            <p>Je te demande la mise en RNE du Départ 25 LUCCIANA du Poste Source CERVIONE</p>
                        </div>
                        <div className='Message2'>
                            <p>Je te demande la mise en RNE du Départ 25 LUCCIANA du Poste Source CERVIONE</p>
                            <p className="confirmed-message">message confirmé</p>
                        </div>
                    </div>
                </div>
                <div className={display2Class}>
                    <div className="Messages">
                        <div className='Message1'>
                            <p>Je te demande la mise en RESEAU du Départ 16MONTE ainsi que de la MC CASAMOZZA 2 du Poste Source LUCCIANA selon NITST n°20.crs.4369.A</p>
                        </div>
                        <div className='Message2'>
                            <p>Je te demande la mise en RESEAU du Départ 10MONTE  ainsi que de la MC CASAMOZZA 2 du Poste Source LUCCIANA</p>
                            <p className="confirmed-message">message édité</p>
                        </div>
                        <div className='Message3'>
                            <p>Je te demande la mise en RESEAU du Départ 10MONTE  ainsi que de la MC CASAMOZZA 2 du Poste Source LUCCIANA</p>
                        </div>
                        <div className='Message4'>
                            <p>Je te demande la mise en RESEAU du Départ 10MONTE  ainsi que de la MC CASAMOZZA 2 du Poste Source LUCCIANA</p>
                            <p className="confirmed-message">message confirmé</p>
                        </div>
                        <div className='Message5'>
                            <p>Je te demande la mise en RESEAU du Départ 10MONTE  ainsi que de la MC CASAMOZZA 2 du Poste Source LUCCIANA</p>
                            <Button className="validation-button" variant="contained" color="primary">
                                Confirmer
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ConvList;

