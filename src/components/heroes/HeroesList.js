import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroesCard } from "./HeroesCard";


export const HeroesList = ({ publisher }) => {

   const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  
    return (
        <div className="row justify-content-center p-2 animate__animated animate__fadeIn">                      
            {heroes.map((hero) => (
                <HeroesCard key={hero.id} hero={hero} />
            ))}
        </div>
    );
};
