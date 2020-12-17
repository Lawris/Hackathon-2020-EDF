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
          <h1>Login</h1>
          <div id="login">
            <input type="text" id="matricule" name="matricule" value="Matricule" required/>
            <input type="text" id="password" name="password" value="Entrer le mot de passe" required/>
          </div>
          <button>Connexion</button>
        </body>
      </html>
    );
  }