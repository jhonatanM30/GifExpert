import { useState, useEffect } from 'react'
import { GetGifs } from '../helpers/GetGifs';

export const useFetchGifs = ( category ) => {

    const [stateWait, setWait] = useState(
        {
            data: [],
            loading: true
        });
   
        useEffect(() => {
            GetGifs( category ).then( imgs => {
                setWait({
                    data: imgs,
                    loading: false
                });
            })
        }, [ category ])
        
    return stateWait;
}
