import React from 'react';

const ContentContainer = () => {

  const styles = require('./ContentContainer.scss');

  return (

    <div>

      <main role="main">

        <div className={styles.masthead}>

          <div className={styles.introBody}>

            <div className={`container ${styles.introCont}`}>

              <h1 className={styles.introHeading}>Midtern Election App 2018</h1>

              <h2 className={styles.introHeadingSub}>The midterms are almost here!</h2> 

              <p className={styles.introText}><b>What are you and others saying?<br/>... join the conversation.</b></p> 

              <p><a className="btn btn-primary btn-lg" href="#" role="button">Sign Up Now &raquo;</a></p>

            </div>

          </div>

        </div>

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

          <hr/>

        </div>

      </main>

    </div>

  )
};

export default ContentContainer;
