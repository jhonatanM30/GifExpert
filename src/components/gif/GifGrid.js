import React from 'react';
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

    const { loading, data: gifs } = useFetchGifs(category);
    return (
            <div className="container">
                <div className="title-main">
                    <h2>{category} </h2>
                </div>
                <div className="row justify-content-center p-2">
                    {
                        loading ? <p className="row animate__flash"> Cargando... </p>
                            : gifs.map((gif) => (
                                <GifGridItem key={gif.id} gif={gif} />
                            ))
                    }
                </div>
            </div>
    );
};
