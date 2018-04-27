import React, { Component } from 'react';

import ContentContainer from '../../components/ContentContainer/ContentContainer';

export default class App extends Component {

  render () {

    const AppScss = require('./AppScss.scss');
    const AppCss = require('./AppCss.css');
    // const iconBar36 = require('./svg/icon-bar-36.svg');
    // <img src={iconBar36} alt="Nav Menu"/>
    // <span className="navbar-toggler-icon"></span>

    return (
      <div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href="#">Election App</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><span className={`fa fa-headphones ${AppScss.colorGold}`}></span><span className={AppScss.colorGold}>Headphones!</span></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu" aria-labelledby="dropdown01">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" placeholder="Search" aria-label="Search" type="text"></input>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>

        <div>
          <ContentContainer />
        </div>

        <footer className="py-5 bg-dark">
          <div className="container">
            <p className={`m-0 text-center ${AppCss.colorCrimson}`}>Copyright &copy; 2018 · Election App 2018!</p>
            <p className="m-0 text-center"><span className={`fa fa-headphones ${AppScss.colorGold}`}></span><span className={AppScss.colorGold}>Footer Headphones!</span></p>
          </div>
        </footer>

      </div>
    )
  };
};
