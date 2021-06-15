import * as React from "react";
import cx from "classnames";

import Icon from "components/common/Icon";

import * as styles from "./Input.scss";
import { SvgType } from "../Icon/icons";

interface InputProps {
  /** Optional title over the input field. */
  title?: string;

  /** Input field value */
  value: string | number;

  /** Input field placeholder */
  placeholder: string;

  /** Input field name */
  name?: string;

  /** Input type */
  type?: string;

  /** On change function */
  onChange?: (inputName: string, value: string) => any;

  /** Validate input field value */
  validate?: (value: string | number) => boolean;

  /** Use active validate state when you want show success, active and error states from validate() */
  activeValidateState?: boolean;

  /** Input field left icon */
  leftIcon?: string | SvgType;

  /** Input field right icon */
  rightIcon?: string | SvgType;

  /** Input field class */
  className?: string;

  /** Input field left icon style */
  leftIconStyle?: React.CSSProperties;

  /** Input field right icon style */
  rightIconStyle?: React.CSSProperties;

  /** If input field is disabled or not */
  disabled?: boolean;
}

function Input(props: InputProps) {
  let styleState: string = "";

  if (props.activeValidateState && props.validate) {
    styleState = props.validate(props.value) ? styles.success : styles.err;
  }

  return (
    <div className={cx(styles.input, props.className)}>
      {props.title && <span>{props.title}</span>}

      <div className={styles.inputWrapper}>
        {props.leftIcon && (
          <Icon
            name={props.leftIcon}
            className={cx(styles.leftIconPos, styleState)}
            style={props.leftIconStyle}
          />
        )}

        {props.disabled ? (
          <p className={styles.disabledTextField}>{props.value}</p>
        ) : (
          <input
            className={cx(styles.textField, styleState, {
              [styles.leftIcon]: props.leftIcon,
              [styles.rightIcon]: props.rightIcon,
            })}
            id={props.name}
            name={props.name || props.title}
            type={props.type || "text"}
            defaultValue={props.value}
            placeholder={props.placeholder}
            onBlur={(event) => {
              if (props.onChange) {
                props.onChange(event.target.name, event.target.value);
              }
            }}
            onChange={(event) => {
              if (props.onChange) {
                props.onChange(event.target.name, event.target.value);
              }
            }}
          />
        )}

        {props.rightIcon && (
          <Icon
            name={props.rightIcon}
            style={props.rightIconStyle}
            className={cx(styles.rightIconPos, styleState)}
          />
        )}

        {props.leftIcon && (
          <Icon
            name={props.leftIcon}
            style={props.leftIconStyle}
            className={cx(styles.leftIconPos, styleState)}
          />
        )}
      </div>
    </div>
  );
}

export default Input;
