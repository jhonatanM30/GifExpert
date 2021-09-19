import React from 'react'
import '../../style/gif-item.css'

export const GifGridItem = ({ gif }) => {
    return (
        <div className="col-11 col-sm-12 col-lg-5 my-card p-5">
             <div className="row row-card-title">
                    <p className="card-title"> {gif.title} </p>
            </div>
            <div className="row row-img">
                <img src={gif.url} alt={gif.title} />                
            </div>           
        </div>
    )
}
