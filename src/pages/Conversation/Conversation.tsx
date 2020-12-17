import * as fs from "fs";
import prettier from "prettier";
import React from "react";
import ReactDOMServer from "react-dom/server";

interface ConvState {
  [key: string]: any;
}

interface ConvProps {
  
}

export default class Conversation extends React.Component<ConvProps, ConvState>{
  constructor(props: ConvProps){
    super(props);
    this.state = {
        userMatricule: '',
        userPassword: '',
    }
  }
  render() {
    return (
      <div>
          <h1>Hello world</h1>
          <div id="headerConvo">
            <div id="emetteur">
                id EMETTEUR = 7565
                FRAU
                AXEL
                CEX
                Priorité faible
            </div>
            <div id="infosConv">
                <button>Telecharger</button>
            </div>
            <div id="recepteur">
                id RECEPTEUR = 75675
                FIGARELLI
                Lisa
                CCO
                Priorité faible
            </div>
          </div>
          <div id="convo">
              vide normalement et on ajoute els messages
          </div>
          <div id="userButtons">
              <button>Confirmer</button>
              <button>Editer</button>
          </div>
      </div>
    );
  }
}