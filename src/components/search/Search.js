import React, { useMemo } from 'react'
import { useForm } from '../../hooks/useForm'
import queryString from 'query-string';
import { useLocation, Redirect } from 'react-router';
import { getHeroesByName } from '../../selectors/getHeroesByName'
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { HeroesCard } from '../heroes/HeroesCard';
import { GifGridItem } from '../gif/GifGridItem';


export const Search = ({ history }) => {

  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  const [formValue, handleInputChange] = useForm({
    searchValues: q
  });

  const { searchValues } = formValue

  const heroeFilter = useMemo(() => getHeroesByName(q), [q]);
  const { data: gifs } = useFetchGifs(q);


  const handleClickButton = (e) => {
    e.preventDefault();
    history.push(`?q=${searchValues}`);
  }

  return (
    <div>
      <h1>Buscador general</h1>
      <div className="row justify-content-center">
        <div className="col-12">
          <form className="row" onSubmit={handleClickButton}>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                name="searchValues"
                placeholder="Buscar personaje..."
                autoComplete="on"
                value={searchValues}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-5">
              <button type="submit" className="btn btn-primary">Buscar...</button>
            </div>
          </form>
        </div>
      </div>
      <hr />
      <div className="row justify-content-center mt-3">
        {
          !q && <div className="alert alert-info text-align-center" role="alert">
            Busca tu personaje, encontraras gif, Heroes Dc o Heroes Marvel
          </div>
        }
        {
          heroeFilter.map(hero => (
            <HeroesCard key={hero.id}
              hero={hero} />
          ))
        }
        {
          gifs.map(gif => (
            <GifGridItem key={gif.id}
              gif={gif} />
          ))
        }
      </div>
    </div>
  )
}
