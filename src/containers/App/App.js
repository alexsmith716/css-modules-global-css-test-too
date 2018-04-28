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
                <a className="nav-link" href="#"><span className={`fa fa-headphones ${AppScss2.colorGoldLocal}`}></span><span className={AppScss2.colorGoldLocal}>Headphones!</span></a>
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
            <p className={`m-0 text-center ${AppCss.colorCrimsonCssLocal}`}>Copyright &copy; 2018 · Election App 2018!</p>
            <p className="m-0 text-center"><span className={`fa fa-headphones ${AppScss2.colorGoldLocal}`}></span><span className={AppScss2.colorGoldLocal}>Footer Headphones!</span></p>
          </div>
        </footer>

        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title colorGreenYellowGlobalCSS" id="exampleModalLabel">Modal Test</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Modal is working. This paragraph's font and the above modal-title font is 'Old English'. It is the default 'global' font for this app. It is overriding Bootstrap's default font 'font-family-sans-serif'. It's a hard to read font but easily recognizable for development purposes.</p>

                <p className="allerLightFont">This paragraph's '@font-face' is 'aller-light'.</p>

                <p className="bootstrapDefaultFont colorSalmonGlobal">This paragraph's '@font-face' is 'font-family-sans-serif'.</p>

                <p className="firaMonoRegularFont">This paragraph's '@font-face' is 'FiraMono-Regular'.</p>

                <p className="norwesterFont">This paragraph's '@font-face' is 'norwester'.</p>

                <p className="openSansLightFont colorCrimsonGlobal">This paragraph's '@font-face' is 'OpenSans-Light'.</p>

                <p className="scadaRegularFont">This paragraph's '@font-face' is 'Scada-Regular'.</p>

                <p className="sourcesansproRegularWebfontFont">This paragraph's '@font-face' is 'sourcesanspro-regular-webfont'.</p>

                <p className={`colorDarkgrayGlobal ${AppScss2.firaSansBookItalicFontGlobalToLocal}`}>This paragraph's '@font-face' is 'FiraSans-BookItalic'. It is scoped Global to Local.</p>

                <p className="colorOrangeredGlobal firaSansBookItalicFont">This paragraph's '@font-face' is 'FiraSans-BookItalic' It is scoped Global.</p>

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
