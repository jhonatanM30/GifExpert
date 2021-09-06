import React  from 'react';
import { useCounter } from './hooks/useCounter';
import './index.css';


/*
    1. Se crea la component Funcion (FC) que es espera un props enviado por el FC PrimeraApp
    2. Se crea el useStage que cambiara el estado del contador iniciado con el prop recibibo
    3. Se crea una funcion que reacionara al evento onClick y cambiara el estado del contador dependiendo la accion del boton presionado.
    4. el boton llama la funcion como referencia en este caso seria lo mismo que  handleState()} 
    5. Al final se le da unas types a los props
*/
const Counter = () => {

   const {state, increment, decrement, reset} = useCounter();

    return (        
        <>
            <h1> ¿Cuantos deseas ver en esta sección? </h1> 
            {
                state > 0 &&
                <h2> { state } </h2>
            }                               
            <button className="btn btn-primary" onClick={increment}> +1 </button>
            <button className="btn btn-secondary" onClick={reset}> Reset </button>
            <button className="btn btn-warning" onClick={decrement}> -1 </button>
        </>
    )
}

export default Counter;