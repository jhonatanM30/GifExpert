import { useState, useEffect } from 'react'
import { GetGifs } from '../helpers/GetGifs';

export const useFetchGifs = ( category="DC Y MARVEL" ) => {

    const [stateWait, setWait] = useState(
        {
            data: [],
            loading: true
        });
   
        useEffect(() => {
            GetGifs( category ).then( gifs => {
                setWait({
                    data: gifs,
                    loading: false
                });
            })
        }, [ category ])
        
    return stateWait;
}
