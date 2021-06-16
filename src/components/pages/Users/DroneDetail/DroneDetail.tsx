import * as React from "react";

import { AnimatePresence, motion } from "framer-motion";
import * as moment from "moment";
import cx from "classnames";

import Api from "api";
import { ReportI } from "api/service/drones/interfaces";

import { SystemContext } from "context/SystemContext";
import { DesignLayout } from "context/SystemContext/SystemContext";

import Table from "components/common/Table";
import { TableColumnI } from "components/common/Table/Table";

import DroneImage from "assets/images/drone.png";

import * as styles from "./DroneDetail.scss";

function DroneDetail() {
  const systemContext = React.useContext(SystemContext) as SystemContext;

  const [droneDetails, setDroneDetails] = React.useState(
    null as null | ReportI[]
  );

  React.useEffect(() => {
    Api.service.drones.getDrone().then((res) => {
      setDroneDetails(res.reports);
    });
  }, []);

  const columns: TableColumnI[] = [
    {
      label: "time",
      dataKey: "time",
      width: 150,
      flexgrow: 2,
      fixed: true,
      renderer: timeCellRenderer,
    },
    {
      label: "Speed",
      dataKey: "speed",
      width: 100,
      flexgrow: 2,
      renderer: decimalCellRenderer,
    },
    {
      label: "Latitude",
      dataKey: "latitude",
      width: 120,
      flexgrow: 2,
      renderer: decimalCellRenderer,
    },
    {
      label: "Longitude",
      dataKey: "longitude",
      width: 120,
      flexgrow: 2,
      renderer: decimalCellRenderer,
    },
    {
      label: "Traffic",
      dataKey: "traffic_conditions",
      width: 200,
      flexgrow: 2,
      renderer: trafficCellRenderer,
    },
  ];

  function trafficCellRenderer({ cellData, rowData }: any) {
    return (
      <span
        className={cx(
          styles.condition,
          {
            [styles.light]: cellData === "LIGHT",
          },
          {
            [styles.heavy]: cellData === "HEAVY",
          },
          {
            [styles.moderate]: cellData === "MODERATE",
          }
        )}
      >
        <p
          className={cx(
            styles.text12,
            styles.lineHeight16,
            {
              [styles.green]: cellData === "LIGHT",
            },
            {
              [styles.error]: cellData === "HEAVY",
            },
            {
              [styles.warning]: cellData === "MODERATE",
            }
          )}
        >
          {systemContext.windowProps?.designLayout &&
          systemContext.windowProps?.designLayout <= DesignLayout.IphoneLarge
            ? cellData.charAt(0)
            : cellData}
        </p>
      </span>
    );
  }

  function decimalCellRenderer({ cellData, rowData }: any) {
    return cellData.toFixed(2);
  }

  function timeCellRenderer({ cellData, rowData }: any) {
    const date = moment(cellData).format("hh:mm a");
    return date;
  }

  return (
    <div className={styles.wrapper}>
      {/* Drone List header */}
      <div className={cx(styles.droneListHeader, styles.flex)}>
        <div className={cx(styles.text32, styles.bold, styles.black)}>
          DJI Air 2S
        </div>

        <img style={{ height: 40, marginLeft: 24 }} src={DroneImage} />
      </div>

      {/* Drone Details Table - With Motion animation */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className={styles.content}>
            <Table
              columns={columns}
              rowData={droneDetails && droneDetails ? droneDetails : []}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default DroneDetail;
