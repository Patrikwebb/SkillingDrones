import * as React from "react";

import Api from "api";
import { DroneI } from "api/service/drones/interfaces";

import Icon, { ICONS } from "components/common/Icon";
import { errorToast } from "components/common/Toast";

import cx from "classnames";

import { COLORS } from "variables";

import * as styles from "./Home.scss";
import DroneCard from "components/common/DroneCard";
import DropDown from "components/common/DropDown";

function Home() {
  const [toggleSort, setToggleSort] = React.useState(false);
  const [drones, setDrones] = React.useState(null as null | DroneI[]);

  React.useEffect(() => {
    // Get Drones
    Api.service.drones
      .getDrones()
      .then((res) => {
        // Add default sort by Age
        const drones = res.drones.sort((a, b) => {
          return a.age - b.age;
        });
        setDrones(drones);
      })
      .catch((error) => {
        errorToast(error);
      });
  }, []);

  const sortDroneList = (sortKey: string) => {
    switch (sortKey) {
      case "age":
        setDrones((oldDrones) => {
          let newDrones: DroneI[] = JSON.parse(JSON.stringify(oldDrones));
          return newDrones.sort((a, b) => a.age - b.age);
        });
        break;
      case "battery":
        setDrones((oldDrones) => {
          let newDrones: DroneI[] = JSON.parse(JSON.stringify(oldDrones));
          return newDrones.sort((a, b) => a.batery - b.batery);
        });
        break;
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* Drone List header */}
      <div className={cx(styles.droneListHeader, styles.flex)}>
        <div className={cx(styles.text32, styles.bold, styles.black)}>
          Drone List
        </div>
        <div className={cx(styles.flex, styles.mlAuto)}>
          <DropDown
            items={[
              { value: "age", label: "Sort by Age" },
              {
                value: "battery",
                label: "Sort by Battery",
              },
            ]}
            defaultInputValue={"Sort by Age"}
            onChange={(e) => {
              sortDroneList(e);
            }}
          />

          <div
            onClick={() => setToggleSort(!toggleSort)}
            className={cx(styles.sortButtons, styles.flex)}
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
      </div>

      {/* List of Drones */}
      <div className={styles.content}>
        {/* Drone Card */}

        {drones !== null &&
          drones.length > 0 &&
          drones?.map((drone, index) => {
            return (
              <DroneCard
                key={index}
                id={drone.id}
                image={drone.image}
                name={drone.name}
                battery={drone.batery}
                age={drone.age}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Home;
