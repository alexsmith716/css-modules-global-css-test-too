import React from 'react';

const ContentContainer = () => {

  const styles = require('./scss/ContentContainerScss.scss');

  return (

    <div>

        <header className={styles.masthead}>

          <div className="container">

            <div className={styles.content}>

              <h1 className={styles.heading}>Election App 2018</h1>

              <h2 className={styles.subheading}>The Midterms are almost here!</h2>

              <div className={styles.blurb}>What are you and others saying?</div>

              <div className={styles.blurbElipsis}>... join the conversation.</div>

              <div>

                <a className="btn btn-primary btn-lg" role="button" href="#">Sign Up Now »</a>

              </div>

            </div>

          </div>

        </header>

        <div className="container">

          <div className="row">

            <div className="col-md-4">
              <h2>Heading</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
              <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
            </div>

            <div className="col-md-4">
              <h2>Heading</h2>
              <p className="colorPurpleGlobal">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
              <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
            </div>

            <div className="col-md-4">
              <h2>Heading</h2>
              <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper.Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
              <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
            </div>

          </div>

        </div>


    </div>

  )
};

export default ContentContainer;
