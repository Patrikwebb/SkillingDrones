import { useHistory } from "react-router";
import * as React from "react";

import Button from "components/common/Button";
import Icon, { ICONS } from "components/common/Icon";

import cx from "classnames";

import DroneImage from "assets/images/drone.png";

import * as styles from "./Home.scss";
import { COLORS } from "variables";

function Home() {
  const history = useHistory();

  const [toggleSort, setToggleSort] = React.useState(false);

  return (
    <>
      <div className={styles.wrapper}>
        {/* Drone List header */}
        <div className={cx(styles.droneListHeader, styles.flex)}>
          <div className={cx(styles.text32, styles.bold, styles.black)}>
            Drone List
          </div>
          <div
            className={cx(styles.flex, styles.sortButtons, styles.mlAuto)}
            onClick={() => setToggleSort(!toggleSort)}
          >
            <Icon
              name={ICONS.sortAsCards}
              className={cx(styles.sortButton, styles.p13, {
                [styles.active]: toggleSort,
              })}
              svgStyle={{
                fill: COLORS.black,
                width: 14,
              }}
            />
            <Icon
              name={ICONS.sortAsList}
              className={cx(styles.sortButton, styles.p13, {
                [styles.active]: !toggleSort,
              })}
              svgStyle={{
                width: 14,
              }}
            />
          </div>
        </div>

        {/* List of Drones */}
        <div className={styles.cards}>
          {/* Drone Card */}
          <div className={styles.card}>
            <img className={styles.cardImage} src={DroneImage} />

            <span className={styles.cardContainer}>
              <div className={styles.cardInfo}>
                {/* Drone key props */}
                <div
                  className={cx(styles.flex, styles.flexOne, styles.flexColumn)}
                >
                  <p className={cx(styles.grey600, styles.textNormal)}>NAME:</p>
                  <p className={cx(styles.grey600, styles.textNormal)}>
                    BATTERY:
                  </p>
                  <p className={cx(styles.grey600, styles.textNormal)}>AGE:</p>
                </div>

                {/* Drone values */}
                <div
                  className={cx(styles.flex, styles.flexOne, styles.flexColumn)}
                >
                  <p className={cx(styles.textBold, styles.primary)}>
                    DJI Mavic Mini
                  </p>
                  <p className={cx(styles.textBold, styles.black)}>1200</p>
                  <p className={cx(styles.textBold, styles.black)}>1 Year</p>
                </div>
              </div>

              <Button
                onClick={() => history.push("/drone/1")}
                className={styles.mt16}
                type={Button.types.PRIMARY}
              >
                See Reports
              </Button>
            </span>
          </div>

          <div className={styles.card}>
            <img className={styles.cardImage} src={DroneImage} />
            <span className={styles.cardContainer}>
              <div className={styles.cardInfo}>
                {/* Drone key props */}
                <div
                  className={cx(styles.flex, styles.flexOne, styles.flexColumn)}
                >
                  <p className={cx(styles.grey600, styles.textNormal)}>NAME:</p>
                  <p className={cx(styles.grey600, styles.textNormal)}>
                    BATTERY:
                  </p>
                  <p className={cx(styles.grey600, styles.textNormal)}>AGE:</p>
                </div>

                {/* Drone values */}
                <div
                  className={cx(styles.flex, styles.flexOne, styles.flexColumn)}
                >
                  <p className={cx(styles.textBold, styles.primary)}>
                    DJI Mavic Mini
                  </p>
                  <p className={cx(styles.textBold, styles.black)}>1200</p>
                  <p className={cx(styles.textBold, styles.black)}>1 Year</p>
                </div>
              </div>

              <Button
                onClick={() => history.push("/drone/1")}
                className={styles.mt16}
                type={Button.types.PRIMARY}
              >
                See Reports
              </Button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
