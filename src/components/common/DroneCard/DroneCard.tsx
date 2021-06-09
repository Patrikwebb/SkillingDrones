import * as React from "react";
import { useHistory } from "react-router";

import cx from "classnames";

import Button from "../Button";

import * as styles from "./DroneCard.scss";

interface DroneCardPropsI {
  // Props
  id: number;
  image: string;
  name: string;
  battery: number;
  age: number;

  // General
  className?: string;
}

function DroneCard(props: DroneCardPropsI) {
  const history = useHistory();

  return (
    // Combine key cause drone.id can be the same
    <div className={styles.card}>
      <img className={styles.cardImage} src={props.image} />

      <span className={styles.cardContainer}>
        <div className={styles.cardInfo}>
          {/* Drone key props */}
          <div className={cx(styles.flex, styles.flexOne, styles.flexColumn)}>
            <p className={cx(styles.grey600, styles.textNormal)}>NAME:</p>
            <p className={cx(styles.grey600, styles.textNormal)}>BATTERY:</p>
            <p className={cx(styles.grey600, styles.textNormal)}>AGE:</p>
          </div>

          {/* Drone values */}
          <div className={cx(styles.flex, styles.flexOne, styles.flexColumn)}>
            <p className={cx(styles.textBold, styles.primary)}>{props.name}</p>
            <p className={cx(styles.textBold, styles.black)}>
              {props.battery + " mA"}
            </p>
            <p className={cx(styles.textBold, styles.black)}>
              {props.age + " Years"}
            </p>
          </div>
        </div>

        <Button
          onClick={() => history.push(`/drone/${props.id}`)}
          className={styles.mt16}
          type={Button.types.PRIMARY}
        >
          See Reports
        </Button>
      </span>
    </div>
  );
}

export default DroneCard;
