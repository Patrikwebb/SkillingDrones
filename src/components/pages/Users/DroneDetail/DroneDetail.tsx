import * as React from "react";

import cx from "classnames";

import Api from "api";
import { ReportI } from "api/service/drones/interfaces";

import DroneImage from "assets/images/drone.png";

import Table from "components/common/Table";
import { TableColumnI } from "components/common/Table/Table";

import * as styles from "./DroneDetail.scss";

const columns: TableColumnI[] = [
  {
    label: "time",
    dataKey: "time",
    width: 200,
    flexgrow: 2,
    fixed: true,
  },
  {
    label: "Speed",
    dataKey: "speed",
    width: 100,
    flexgrow: 2,
  },
  {
    label: "Latitude",
    dataKey: "latitude",
    width: 200,
    flexgrow: 2,
  },
  {
    label: "Longitude",
    dataKey: "longitude",
    width: 200,
    flexgrow: 2,
  },
  {
    label: "Traffic",
    dataKey: "traffic_conditions",
    width: 200,
    flexgrow: 2,
  },
];

function DroneDetail() {
  const [droneDetails, setDroneDetails] = React.useState(
    null as null | ReportI[]
  );

  React.useEffect(() => {
    Api.service.drones.getDrone().then((res) => {
      setDroneDetails(res.reports);
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* Drone List header */}
      <div className={cx(styles.droneListHeader, styles.flex)}>
        <div className={cx(styles.text32, styles.bold, styles.black)}>
          DJI Air 2S
        </div>

        <img style={{ height: 40, marginLeft: 24 }} src={DroneImage} />
      </div>

      {/* List of Drones */}
      <div className={styles.content}>
        <Table
          columns={columns}
          rowData={droneDetails && droneDetails ? droneDetails : []}
        />
      </div>
    </div>
  );
}

export default DroneDetail;
