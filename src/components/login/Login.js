import React, { useState, useContext, Fragment } from "react";
import "../../style/login.css";
import { types } from "../../types/types";
import { AuthContext } from "../context/AuthContext";


export const Login = ({history}) => {

  
  const [nameUser, setNameUser] = useState("");

  const handleInputChange = ({ target }) => {
    setNameUser(target.value);
  };

const {dispatch} = useContext(AuthContext);

  const handleClickButton = () => {

    const lastPage = localStorage.getItem('lastPage')

    dispatch({ 
      type: types.login,
      payload:{
        name: nameUser
      }
    
    });

    history.replace(lastPage);
  }

  return (
    <Fragment>
      <div className="container-fluid  animate__animated animate__flipInX">
        <div className="row main-content bg-success text-center">
          <div className="col-md-4 text-center company__info">
            <span className="company__logo">
              <h2>
                <span className="fa fa-android"></span>
              </h2>
            </span>
            <h4 className="company_title">Mi Portafolio</h4>
          </div>
          <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
            <div className="container-fluid">
              <div className="row row-login">
                <h2>Log In</h2>
              </div>
              <div className="row-form">
                <form control="" className="form-group">
                  <div className="row">
                    <input
                      type="text"
                      name="nameUser"
                      value={nameUser}
                          onChange={handleInputChange}
                      id="nameUser"
                      className="form__input"
                      placeholder="Username"
                    />
                  </div>
                  <div className="row">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form__input"
                      placeholder="Password"
                    />
                  </div>
                  <div className="row">
                    <input
                      type="submit"
                      value="Iniciar Sesión"
                      className="btn btn-login"
                      onClick={handleClickButton}
                    />
                  </div>
                </form>
              </div>
              <div className="row">
                <p>
                  Don't have an account? <a href="#">Register Here</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
