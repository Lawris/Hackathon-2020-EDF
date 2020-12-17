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
          <h1>Zone d'intervention</h1>
          <div>
              <div>
                <div id="texte">
                    Sélectionner vos zones et heures de travaux
                </div>
                <div id="carteCorse">
                </div>
              </div>
              <div id="selectionZone">
                    <input type="checkbox" id="BOGB" name="BOGB" value="BOGB"/>
                    <input type="checkbox" id="BOCPO" name="BOCPO" value="BOCPO"/>
                    <input type="checkbox" id="BOBA" name="BOBA" value="BOBA"/>
                    <input type="checkbox" id="BOES" name="BOES" value="BOES"/>
                    <input type="checkbox" id="BOVA" name="BOVA" value="BOVA"/>
                    <input type="checkbox" id="BOGA" name="BOGA" value="BOGA"/>
              </div>
              <div>
                    <button>Confirmer</button>
              </div>
          </div>
        </body>
      </html>
    );
  }