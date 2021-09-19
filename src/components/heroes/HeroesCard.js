import React from 'react'
import { Link } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';
import '../../style/heroes.css'

export const HeroesCard = ({ hero }) => {

    return (
        <div className="col-11 col-sm-12 col-lg-5 my-card ">
            <div className="row justify-content-center p-3">
                <div className="col-12 col-sm-6">
                    <img src={heroImages(`./${hero.id}.jpg`).default} className="card-img" alt={hero.superhero} />
                </div>
                <div className="col-12 col-sm-6">
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
