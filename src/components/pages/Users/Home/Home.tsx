import * as React from "react";

import Api from "api";
import { DroneI } from "api/service/drones/interfaces";

import { SystemContext } from "context/SystemContext";
import { DesignLayout } from "context/SystemContext/SystemContext";

import Icon, { ICONS } from "components/common/Icon";
import { errorToast } from "components/common/Toast";
import DroneCard from "components/common/DroneCard";
import DropDown from "components/common/DropDown";
import Input from "components/common/Input";

import cx from "classnames";

import { COLORS } from "variables";

import * as styles from "./Home.scss";
import EmptyState from "components/common/EmptyState";

function Home() {
  const systemContext = React.useContext(SystemContext) as SystemContext;

  const [toggleSort, setToggleSort] = React.useState(false);
  const [drones, setDrones] = React.useState(null as null | DroneI[]);
  const [searchInput, setSearchInput] = React.useState("");
  const [isDroneListEmpty, setIsDroneListEmpty] = React.useState(false);

  React.useEffect(() => {
    // Get Drones
    Api.service.drones
      .getDrones()
      .then((res) => {
        // Add default sort by Age
        const drones = res.drones.sort((a, b) => {
          return a.age - b.age;
        });
        // Add show parameter that will be used in Search later
        for (var i = 0; i < drones.length; i++) {
          drones[i].show = true;
        }
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

  const filterDrones = (searchInput: string) => {
    // # TODO Make this cleaner
    if (drones) {
      let dronesCounter = 0;
      // Loop over all Drone and check if any values match search input
      setDrones((oldDrones) => {
        let newDrones: DroneI[] = JSON.parse(JSON.stringify(oldDrones));
        for (let i = 0; i < newDrones.length; i++) {
          let drone = newDrones[i];
          const searchInputLower = searchInput.toLowerCase();

          // Loop over all keys and search for input
          if (drone.age.toString().toLowerCase() === searchInputLower) {
            drone.show = true;
          } else if (
            drone.batery.toString().toLowerCase().includes(searchInputLower)
          ) {
            drone.show = true;
          } else if (
            drone.image.toString().toLowerCase().includes(searchInputLower)
          ) {
            drone.show = true;
          } else if (
            drone.name.toString().toLowerCase().includes(searchInputLower)
          ) {
            drone.show = true;
          } else {
            drone.show = false;
          }

          if (drone.show) {
            dronesCounter++;
          }
        }

        // Check if list if empty
        if (dronesCounter === 0) {
          setIsDroneListEmpty(true);
        } else {
          setIsDroneListEmpty(false);
        }
        return newDrones;
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* Search input field - position absolute */}
      {systemContext.windowProps.designLayout &&
        systemContext.windowProps.designLayout >= DesignLayout.WebLarge && (
          <Input
            className={styles.input}
            name="Search"
            placeholder="Search"
            value={searchInput}
            type="text"
            onChange={(name, value) => {
              setSearchInput(value);
              filterDrones(value);
            }}
            leftIcon={ICONS.searchInput}
          />
        )}

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
          drones
            ?.filter((drone) => drone.show)
            .map((drone, index) => {
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

        {/* Empty state for Drone list */}
        {isDroneListEmpty && (
          <div style={{ minHeight: 400, display: "flex" }}>
            <EmptyState
              icon={ICONS.logoFire}
              title="No result"
              message={"No match for search key: " + searchInput}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
