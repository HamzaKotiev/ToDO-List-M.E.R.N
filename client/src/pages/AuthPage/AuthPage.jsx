import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./AuthPage.scss";

const AuthPage = () => {
  return (


        <React.Fragment>
          <div className="container">
            <div className="auth-page">
             <Route path="/login">
             <h3>Авторизация</h3>
              <form className="form form-login">
                <div className="row">
                  <div className="input-field col s12">
                    <input type="email" name="email" className="validate" />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-field col s12">
                    <input
                      type="password"
                      name="password"
                      className="validate"
                    />
                    <label htmlFor="password">Password/Пароль</label>
                  </div>
                </div>
                <div className="row">
                  <button className="wawes-effect wawes-light btn btn blue">
                    Войти
                  </button>
                  <Link to="/" className="btn-outline btn-reg">
                    Нет аккаунта?
                  </Link>
                </div>
              </form>
             </Route>

              <Route path="/registration">
              <h3>Регистрация</h3>
              <form className="form form-login">
                <div className="row">
                  <div className="input-field col s12">
                    <input type="email" name="email" className="validate" />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-field col s12">
                    <input
                      type="password"
                      name="password"
                      className="validate"
                    />
                    <label htmlFor="password">Password/Пароль</label>
                  </div>
                </div>
                <div className="row">
                  <button className="wawes-effect wawes-light btn  blue">
                    Регистрация
                  </button>
                  <Link to="/" className="btn-outline btn-reg">
                    Уже есть аккаунт ?
                  </Link>
                </div>
              </form>
              </Route>
            </div>
          </div>
        </React.Fragment>

    
  );
};

export default AuthPage;
