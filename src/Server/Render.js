import React from "react";
import { renderToString } from 'react-dom/server'
import App from '../App'
import {UrlImage} from '../Utils/UrlImag'

export default function Render() {

  const User = renderToString(
    <App />
  )

  const html = `<!DOCTYPE html>
    <html lang="en-us" >
    <head>
    <title>Fitness</title>         
    <meta property="og:description" content=" Här finns även tjejgym. Gymmet i Uppsala har, som alla våra andra gym, öppet dygnet runt för alla våra medlemmar, så att du kan träna när det passar dig." />
    <meta property="og:image" content=${UrlImage.person}  />
    <meta property="og:image:url"  content=${UrlImage.person}  />
    <meta property="twitter:image" content=${UrlImage.person}  />
    <link href="https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="/css/main.css" />
    <link rel="icon" type="image/x-icon" href=${UrlImage.Iconfitness}>
    <link rel="canonical" href="/" />
   </head>

    <body >
     <div id="fitness">
         ${User}
      </div>
      <script src="./client/bundle.js" defer ></script>
    </body>
  </html>
    `


  return html

}