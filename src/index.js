// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';
// const container = document.getElementById('app');
// container.appendChild(element);
/* const name = 'pedrito'; */
//const element = <h1>Hello, Platzi Badges!</h1>;
//const element = React.createElement('a', {href:'https://www.google.com.ar'},'Ir a gooooogle')
//const element = React.createElement('h1', {}, `Hola soy ${name}`)
//const jsx = <h1>Hola! soy {name}</h1>
/* const jsx = <div>
    <h1>Hola, soy {name}</h1>
    <p>Estoy probando esto</p>
</div> */

import React from 'react';
import ReactDOM from 'react-dom';
//import Badge from './components/Badge';
import Badges from './components/pages/Badges';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
//import BadgeNew from './components/pages/badgeNew';



const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
    <Badges/>, 
    container);
