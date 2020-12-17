import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

//Import des pages à afficher en fonction de la route appelé par la homePage
import Login from '../Login/Login'
import Main from '../Main/Main';


const HomePage: React.FunctionComponent = () =>{
    return (
        <Router>
            {/*Le switch  est le répertoire des route de l'app*/}
            <Switch>
                {/* Route de base la page login */}
                <Route path="/" component={Login} exact/>
                {/* Route de la page post login/inscription */}
                <Route
                    path="/app"
                    component={Main}/>
            </Switch>
        </Router>
    );
};

export default (HomePage);