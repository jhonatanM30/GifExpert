import React from 'react';
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

    const { loading, data: imgs } = useFetchGifs(category);

    return (
            <div className="container">
                <div className="title-main">
                    <h2>{category} </h2>
                </div>
                <div className="row">
                    {
                        loading ? <p className="row animate__flash"> Cargando... </p>
                            : imgs.map((img) => (
                                <GifGridItem key={img.id} img={img} />
                            ))
                    }
                </div>
            </div>
    );
};
