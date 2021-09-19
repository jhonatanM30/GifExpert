import React from 'react'
import queryString from 'query-string';
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm'
import { GifGridItem } from '../gif/GifGridItem';
import '../../style/form.css'

export const SearchGif = ({ history }) => {


    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [formValue, handleInputChange] = useForm({
        searchValues: q
    });

    const { data: gifs } = useFetchGifs(q);

    const { searchValues } = formValue


    const handleClickButton = (e) => {
        e.preventDefault();
        history.push(`?q=${searchValues}`);
    }

    return (
        <div className="animate__animated animate__fadeIn">
            <h1 className="animate__animated animate__fadeInDown">Gif Expert</h1>
            <div className="row justify-content-center">
                <form className="row" onSubmit={handleClickButton}>
                    <div className="col-7 col-sm-7 col-lg-5">
                        <input
                            type="text"
                            className="form-control"
                            name="searchValues"
                            placeholder="Buscar Gif..."
                            value={searchValues}
                            onChange={handleInputChange}
                        />
                    </div>                    
                    <div className="col-4 col-sm-4 col-lg-5">
                        <button type="submit" className="btn btn-primary">Buscar...</button>
                    </div>
                </form>
            </div>
            <hr />
            <div className="row justify-content-center">
                {
                    !q && <div className="alert alert-info text-align-center" role="alert">
                        Busca el Gif de tu personaje favorito
                    </div>
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

