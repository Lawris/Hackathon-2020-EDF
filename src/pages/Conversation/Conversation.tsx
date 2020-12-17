export{}
import * as fs from "fs";
import prettier from "prettier";
import React from "react";
import ReactDOMServer from "react-dom/server";

function render() {
    let html = ReactDOMServer.renderToStaticMarkup(<HelloWorldPage />);
    let htmlWDoc = "<!DOCTYPE html>" + html;
    let prettyHtml = prettier.format(htmlWDoc, { parser: "html" });
    let outputFile = "./output.html";
    fs.writeFileSync(outputFile, prettyHtml);
    console.log(`Wrote ${outputFile}`);
  }
  
  function HelloWorldPage() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <title>Messagerie</title>
        </head>
        <body>
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
        </body>
      </html>
    );
  }