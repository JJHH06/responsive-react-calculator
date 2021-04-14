//Colocacion de utilidades
import "./style.scss"
import "bootstrap/dist/js/bootstrap"
import React from 'react';
import ReactDom from 'react-dom';
import Calculator from './Calculator.js';

ReactDom.render(
    <React.StrictMode>
        <Calculator/>
    </React.StrictMode>,
    document.getElementById("root")
);