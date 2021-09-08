import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import { HeroesList } from '../heroes/HeroesList'

export const Marvel = () => {
    return (
        <Fragment>
            <h1>Marvel Comics</h1>
            <hr/>
            <HeroesList publisher='Marvel Comics'/>            
        </Fragment>
    )
}
