import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import { HeroesList } from '../heroes/HeroesList'

export const Dc = () => {
    return (
        <Fragment>
            <h1>DC Comics</h1>
            <hr/>
            <HeroesList publisher='DC Comics'/>
        </Fragment>
    )
}
