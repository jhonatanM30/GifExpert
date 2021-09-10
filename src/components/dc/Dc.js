import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import { HeroesList } from '../heroes/HeroesList'


export const Dc = () => {
    return (
        <Fragment>
            <h1 className="animate__animated animate__fadeInDown ">DC Comics</h1>           
            <hr/>            
            <HeroesList publisher='DC Comics'/>
        </Fragment>
    )
}
