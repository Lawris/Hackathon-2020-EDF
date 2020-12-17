import React, {Component} from 'react';

interface ListState {
    [key: string]: any;
}

interface ListProps {
    
}

export default class ConversationList extends React.Component<ListProps, ListState>{
    constructor(props: ListProps){
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
