import React from 'react'
import { Link } from 'react-router-dom';
import '../../style/heroes.css'



export const HeroesCard = ({ hero }) => {

    return (
        <div className="col-5 my-card ">
            <div className="row justify-content-start  p-3">
                <div className="col-md-6">
                    <img src={`./assets/heroes/${hero.id}.jpg`} className="card-img" alt={hero.superhero} />
                </div>
                <div className="col-md-6">
                    <div className="card-body card-heroes">
                        <h5 className="card-title"> {hero.superhero} </h5>
                        <p className="card-text text-ego">{hero.alter_ego}</p>
                        {
                            (hero.alter_ego !== hero.characters)
                            && <p className="card-text">{hero.characters}</p>
                        }
                        <p className="card-text">
                            <small className="text-mute">{hero.first_appearance}</small>
                        </p>
                    </div>
                    <Link to={`./heroe/${hero.id}`}>Ver mas...</Link>
                </div>
            </div>
        </div>

    )
}
