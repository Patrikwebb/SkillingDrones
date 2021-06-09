import * as React from "react";

import {
  AutoSizer,
  Column as VirtualColumn,
  Table as VirtualTable,
  TableCellRenderer,
  TableRowProps,
} from "react-virtualized";
import "react-virtualized/styles.css";

import cx from "classnames";

import * as styles from "./Table.scss";

interface SortSettingsI {
  sortFunction: any | undefined;
  sortBy: string | undefined;
  direction: string | undefined;
}

export interface TableColumnI {
  label: string;
  dataKey: any;
  width: number;
  flexgrow?: number;
  flexshrink?: number;
  renderer?: TableCellRenderer;
  fixed?: boolean;
}

interface TableProps {
  rowData: any[];
  columns: TableColumnI[];
  height?: number;
  sortSettings?: SortSettingsI;
}

function rowRenderer({ columns, index, ...props }: TableRowProps) {
  return (
    <div {...props} aria-rowindex={index + 1} role="row">
      {columns}
    </div>
  );
}

function getRowClassName({ index }: { [key: string]: number }): string {
  return cx(
    styles.tableRow,
    index === -1 ? styles.tableRowHeader : styles.tableTableRow
  );
}

function Table(props: TableProps): React.ReactElement {
  // Set up sort settings, either as undefined or supplied by props
  let sortSettings: SortSettingsI = {
    sortFunction: undefined,
    sortBy: undefined,
    direction: undefined,
  };

  if (props.sortSettings) {
    sortSettings = props.sortSettings as SortSettingsI;
  }
  const { sortFunction, sortBy, direction } = sortSettings;

  // Set the size of a wrapper div that sets a specific height or
  // expans to the available space of the parent
  const wrapHeight = props.height ?? "100%";

  return (
    <div style={{ height: wrapHeight }}>
      <AutoSizer>
        {({ height, width }: any) => (
          <VirtualTable
            width={width}
            height={height}
            headerHeight={56}
            rowHeight={56}
            rowCount={props.rowData.length}
            rowGetter={({ index }: any) => props.rowData[index]}
            headerClassName={styles.tableRowHeaderItem}
            rowClassName={getRowClassName}
            rowRenderer={rowRenderer}
            overscanRowCount={10}
            sort={sortFunction}
            sortBy={sortBy}
            sortDirection={direction && direction == "DESC" ? "DESC" : "ASC"}
          >
            {props.columns.map((item) => (
              <VirtualColumn
                className={styles.tableRowColumn}
                key={item.dataKey}
                label={item.label}
                dataKey={item.dataKey}
                flexGrow={item.flexgrow}
                flexShrink={item.flexshrink}
                width={item.width}
                cellRenderer={item.renderer}
              />
            ))}
          </VirtualTable>
        )}
      </AutoSizer>
    </div>
  );
}

export default Table;
