import React  from 'react'
import ReactDOM from 'react-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { PrimeraApp } from './components/PrimeraApp';

/*
1. Se desestructura el ReactDOM para usar el renderizador
2. divRoot almacena el selector del div de la page principal que esta en index.html
3. Saludo almacena una etiqueta Html a reenderizar
4. El render renderiza saludos que tiene la etiqueta html, que tambien puede ser un componente importado
Y el selector donde se va a importar en este caso en el div del div.
5.El render tiene a PrimeraApp con un props que se ejecutara en el componente
*/ 
const { render } = ReactDOM;
const divRoot = document.getElementById( 'root' )

//const saludo = <h1>Hola Mundo</h1>;

render(<PrimeraApp/>, divRoot);



