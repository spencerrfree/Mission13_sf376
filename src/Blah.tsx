import React from 'react';
import styles from './Blah.module.css';

function TopBanner(yadda: any) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-2">
          <img src="./logo192.png" alt="companyLogo" />
        </div>
        <div className="col align-self-center text-start">
          <h1 className={styles.h1}>{yadda.saying}</h1>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TopBanner;
