import React from 'react';
import styles from './Blah.module.css';
// use this function to form the movielist page
function TopBanner(yadda: any) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col align-self-center text-start">
          <h1 className={styles.h1}>{yadda.saying}</h1>
        </div>
        <div className="col align-self-center text-start">
          <h4>
            This site lists all of the movies in Joel's database and directs
            traffic to the baconsale podcast.
          </h4>
          <p>Click on the navigation links to get started!</p>
        </div>
        <div className="col-2">
          <img src="./JoelHiltonHeadshot (1).jpg" alt="companyLogo" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default TopBanner;
