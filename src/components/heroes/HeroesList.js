import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroesCard } from './HeroesCard'

export const HeroesList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher)

    return (

        <div className="row justify-content-center p-2">
            {
                heroes.map((hero) => (
                    <HeroesCard key={hero.id}
                                hero={hero}/>                   
                ))
            }
        </div>

    )
}
