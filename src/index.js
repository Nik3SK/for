import React from 'react';
import * as ReactDomClient from 'react-dom/client'
import Menu from "./Menu";
import Mainmenu from "./Mainmenu/Mainmenu";
import { BrowserRouter } from 'react-router-dom';
const app = ReactDomClient.createRoot(document.getElementById('app'));
document.body.style.overflow = "hidden"
app.render(
<BrowserRouter>
    <Mainmenu/>
</BrowserRouter>
);

