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
        return <div id="login">
            <input type="text" id="matricule" name="matricule" value="Matricule" required/>
            <input type="text" id="password" name="password" value="Entrer le mot de passe" required/>
            <button>Connexion</button>
        </div>
    }

}

