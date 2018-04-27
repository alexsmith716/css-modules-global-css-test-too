import React, { Component } from 'react';

import ContentContainer from '../../components/ContentContainer/ContentContainer';

export default class App extends Component {

  render () {

    const styles = require('./AppScss.scss');
    const AppScss2 = require('./AppScss2.scss');
    const AppCss = require('./AppCss.css');
    // const iconBar36 = require('./svg/icon-bar-36.svg');
    // <img src={iconBar36} alt="Nav Menu"/>
    // <span className="navbar-toggler-icon"></span>

    return (
      <div className={styles.app}>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
          <a className={`navbar-brand ${styles.brand}`} href="#">Election App</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link bootstrapDefaultFont" data-toggle="modal" data-target="#exampleModal">
                  <i className="fa fa-fw fa-sign-in"></i>Modal</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><span className={`fa fa-headphones ${AppScss2.colorGold}`}></span><span className={AppScss2.colorGold}>Headphones!</span></a>
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
            <p className="m-0 text-center"><span className={`fa fa-headphones ${AppScss2.colorGold}`}></span><span className={AppScss2.colorGold}>Footer Headphones!</span></p>
          </div>
        </footer>

        <div className="modal fade openSansLightFont" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal Test</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Modal is working.</p>
                <p>This modal is custom font '@mixin opensans-light-font'.</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                <a className="btn btn-primary" href="#">Button Somewhere</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  };
};
