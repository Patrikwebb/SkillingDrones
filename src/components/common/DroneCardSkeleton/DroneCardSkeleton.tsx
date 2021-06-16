import * as React from "react";
import Skeleton from "react-loading-skeleton";

import cx from "classnames";

import Button from "../Button";

import * as styles from "./DroneCardSkeleton.scss";

interface DroneCardSkeletonPropsI {
  // Props
  count: number;
  image?: boolean;
  name?: boolean;
  battery?: boolean;
  age?: boolean;

  // General
  className?: string;
}

const RenderComponent = (props: DroneCardSkeletonPropsI) => {
  const listOfElements: any = [];

  for (let index = 0; index < props.count; index++) {
    listOfElements.push(
      // Combine key cause drone.id can be the same
      <div key={index} className={styles.card}>
        <div className={styles.cardImage}>
          {props.image && <Skeleton height={138} />}
        </div>

        <span className={styles.cardContainer}>
          <div className={styles.cardInfo}>
            {/* Drone key props */}
            <div className={cx(styles.flex, styles.flexOne, styles.flexColumn)}>
              <p className={cx(styles.grey600, styles.textNormal)}>
                <Skeleton width={80} />
              </p>
              <p className={cx(styles.grey600, styles.textNormal)}>
                <Skeleton width={80} />
              </p>
              <p className={cx(styles.grey600, styles.textNormal)}>
                <Skeleton width={80} />
              </p>
            </div>

            {/* Drone values */}
            <div className={cx(styles.flex, styles.flexOne, styles.flexColumn)}>
              <p className={cx(styles.textBold, styles.primary)}>
                <Skeleton width={80} />
              </p>
              <p className={cx(styles.textBold, styles.black)}>
                <Skeleton width={80} />
              </p>
              <p className={cx(styles.textBold, styles.black)}>
                <Skeleton width={80} />
              </p>
            </div>
          </div>

          <Button className={styles.mt16} type={Button.types.PRIMARY}>
            <Skeleton />
          </Button>
        </span>
      </div>
    );
  }

  return listOfElements;
};

function DroneCardSkeleton(props: DroneCardSkeletonPropsI) {
  return <RenderComponent count={props.count} image={true} />;
}

export default DroneCardSkeleton;
