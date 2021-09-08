import React, { useState } from 'react'

import '../../style/form.css'

export const AddCategory = ({ setcategory }) => {

    const [nameCategory, setnameCategory] = useState('')


    const handleInputChange = ({ target }) => {
        setnameCategory(
            target.value
        );
    }

    const handleClickButton = (e) => {
        e.preventDefault();
        if (nameCategory.trim() !== "") {
            setcategory(nameCategory);
            setnameCategory('')
        } else {
            alert('Ingrese una categoria valida')
        }
    }

    return (
        <div className="container">
            <form className="row justify-content-center" onSubmit={handleClickButton}>
                <div className="col-auto"> <label htmlFor="nameCategory" >Nombre de la categoria : </label> </div>
                <div className="col-auto">
                    <input
                        type="text"
                        className="form-control"
                        name="nameCategory"
                        autoComplete="on"
                        value={nameCategory}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>
        </div>
    )
}

