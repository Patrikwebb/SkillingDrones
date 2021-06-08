import * as React from "react";

import cx from "classnames";

import * as styles from "./DroneDetail.scss";

function DroneDetail() {
  return (
    <>
      <div className={cx(styles.clrBackground, styles.mx24)}>
        <h1 className={styles.black}>Drone Page</h1>
      </div>
    </>
  );
}

export default DroneDetail;
