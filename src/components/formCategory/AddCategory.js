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
                <div class="col-auto"> <label for="nameCategory" >Nombre de la categoria : </label> </div>
                <div class="col-auto">
                    <input
                        type="text"
                        class="form-control"
                        name="nameCategory"
                        autoComplete="on"
                        value={nameCategory}
                        onChange={handleInputChange}
                    />
                </div>
                <div class="col-auto">
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>
        </div>
    )
}

