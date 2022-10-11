import React from "react";
import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";

export interface ButtonProps {
  label: string;
  isPrimary: boolean;
  disabled?: boolean;
  loading?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <>
      <button
        className={props.isPrimary ? "primary" : "secondary"}
        disabled={props.disabled || props.loading}
      >
        {props.loading && (
          <FontAwesomeIcon icon={solid("spinner")} spin={props.loading} />
        )}
        {!props.loading && props.label}
      </button>
    </>
  );
};

export default Button;
