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
            userEmail: '',
            userPassword: '',
        }
    }
    render(){
        return <div>Hello</div>
    }

}

