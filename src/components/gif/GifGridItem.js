import React from 'react'

export const GifGridItem = ({ img }) => {
    return (
        <div className="col-md-6">
            <div className="card">
                <img src={img.url} alt={img.title} />
                <div className="card-body">
                    <h4 className="card-title"> {img.title} </h4>
                </div>
            </div>
        </div>
    )
}
