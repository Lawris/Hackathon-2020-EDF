import React, {Component} from 'react';

interface ZoneState {
    [key: string]: any;
}

interface ZoneProps {
    
}

export default class Zone extends React.Component<ZoneProps, ZoneState>{
    constructor(props: ZoneProps){
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