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
        return <div> Hello Settings
        </div>
    }

}
