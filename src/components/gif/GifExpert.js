import React, { useState, useContext } from 'react';
import { GifGrid } from './GifGrid';
import { AddCategory } from '../formCategory/AddCategory'
import { UserContext } from "../context/UserContext";

export const GifExpert = () => {

    const {user} = useContext(UserContext)
    const [category, setcategory] = useState('') 

    return (
        <div className="container border border-secondary rounded">
            <div className="title-main">               
                <h5>Hola {user}, Bienvenido a la seccion GifExpert donde puedes buscar los Gif de tus personajes preferidos </h5>
            </div>
            <AddCategory setcategory={setcategory}></AddCategory> <hr />
            <GifGrid category={category}></GifGrid>
        </div>
    )
}


