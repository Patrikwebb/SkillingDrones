import * as React from "react";

import cx from "classnames";

import Icon, { IconReference, SvgStyle } from "components/common/Icon/Icon";

import * as styles from "./EmptyState.scss";

interface EmptyStateProps {
  title: string;
  icon: IconReference;
  svgStyle?: SvgStyle;
  message?: string;
  className?: string;
}

function EmptyState(props: EmptyStateProps) {
  return (
    <div className={cx(styles.card, props.className)}>
      <Icon
        className={styles.icon}
        svgStyle={{ className: styles.icon, ...props.svgStyle }}
        name={props.icon}
      />
      <h1 className={styles.header}>{props.title}</h1>
      {props.message && <p className={styles.message}>{props.message}</p>}
    </div>
  );
}

export default EmptyState;
