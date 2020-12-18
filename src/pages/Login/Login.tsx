import { Button, TextField } from '@material-ui/core';
import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import LoginProps from '../../Model/LoginProps';
import './Login.css'

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
        return (
            <div>
                <img className="img-login" src="https://storage.lebonguide.com/crop-1600x700/7/94/565CF6F3-EA3E-48DB-B255-668E5856CCEB.png" alt="background-image"/>
                <div className="frame-login">
                    <div className='title-login'><h2>CONNEXION</h2></div>
                    <div className="login-form">
                        <TextField className="input-login" id="outlined-basic" label="Matricule" variant="outlined" /><br/>
                        <TextField className='input-login' id="outlined-basic" label="Password" variant="outlined" /><br/><br/>
                        <Button className='button-login' variant="contained" color="primary" href="/app">Connexion</Button>
                    </div>
                </div>
            </div>
        )
    }

}

