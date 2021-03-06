import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { heroImages } from '../../helpers/heroImages';
import { getHeroesById } from '../../selectors/getHeroesById'
import '../../style/heroes.css'

export const Heroes = ({ history }) => {

    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroesById(heroeId), [heroeId])

    const handleReturn = () => {
        history.length <= 2 ? history.push('/login')
            : history.goBack()
    }

    return (
        !hero ? <Redirect to='/login' />
            :
            <div className="col-11 col-sm-12 col-lg-10 my-card animate__animated animate__fadeIn">
                <div className='row p-3'>
                <div className="col-12 col-sm-6 col-lg-4">
                    <img  src={heroImages(`./${hero.id}.jpg`).default} className="card-img animate__animated animate__fadeInDown" alt={hero.superhero} />
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <h2>{hero.superhero}</h2>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Alter ego : </b>{hero.alter_ego}</li>
                        <li className="list-group-item"><b>Publisher : </b>{hero.publisher}</li>
                        <li className="list-group-item"><b>First apparence : </b>{hero.first_appearance}</li>
                    </ul>
                    <h5><b>Characters</b></h5>
                    <p>{hero.characters}</p>
                    <button className="btn btn-info" onClick={handleReturn}>
                        Regresar
                    </button>
                </div>
            </div>
            </div>
            
    )
}
