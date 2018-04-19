import React from 'react';

import ContentContainer from '../../components/ContentContainer/ContentContainer';

import AppScss from './AppScss.scss';
import AppCss from './AppCss.css';

import iconBar36 from './svg/icon-bar-36.svg';

// <span className="navbar-toggler-icon"></span>
// <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjNzc3Nzc3IiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0zIDE4aDE4di0ySDN2MnptMC01aDE4di0ySDN2MnptMC03djJoMThWNkgzeiIvPgo8L3N2Zz4=" alt="Nav Menu">
// <img src={iconBar36} alt="Nav Menu"/>

export class App extends React.Component {

  render () {

    return (
      <div>
        <div>

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a className="navbar-brand" href="#">Election App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <img src={iconBar36} alt="Nav Menu"/>
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
                  <a className="nav-link" href="#"><span className={`fa fa-headphones ${AppScss.colorGold}`}></span><span className={`${AppScss.colorGold}`}>Headphones!</span></a>
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

        </div>

        <div className="container">
          <ContentContainer />
        </div>

        <footer className="py-5 bg-dark">
          <div className="container">
            <p className={`m-0 text-center ${AppCss.colorCrimson}`}>Copyright &copy; 2018 · Election App 2018!</p>
          </div>
        </footer>

      </div>
    )
  };
};

export default App;
