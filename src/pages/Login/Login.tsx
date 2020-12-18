import { Button, TextField } from '@material-ui/core';
import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import LoginProps from '../../Model/LoginProps';

interface LoginState {
    [key: string]: any;
}

export default class Login extends React.Component<LoginProps, LoginState>{
    constructor(props: LoginProps){
        super(props);
        this.state = {
            userMatricule: '',
            userPassword: '',
        }
    }
    render(){
        return <div>
            <TextField id="outlined-basic" label="Matricule" variant="outlined" required/><br/>
            <TextField id="outlined-basic" label="Password" variant="outlined" required/><br/><br/>
            <Button variant="contained" color="primary" href="/app">Connexion</Button>
        </div>
    }

}

