import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroesById } from '../../selectors/getHeroesById'

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
            <div className='row m-5 p-3 my-card'>
                <div className="col-4">
                    <img src={`../assets/heroes/${heroeId}.jpg`} className="card-img animate__animated animate__fadeInDown" alt={hero.superhero} />
                </div>
                <div className="col-8">
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
    )
}
