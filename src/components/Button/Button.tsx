import React from "react";
import { BiLoaderCircle } from "react-icons/bi";
import "./Button.css";

export interface ButtonProps {
  label: string;
  isPrimary: boolean;
  disabled: boolean;
  loading: boolean;
  onClick: any;
}

const Button = (props: ButtonProps) => {
  return (
    <>
      <button
        className={props.isPrimary ? "primary" : "secondary"}
        disabled={props.disabled || props.loading}
        onClick={props.onClick}
      >
        {props.loading && (
          <div>
            <BiLoaderCircle className="spin" />
          </div>
        )}
        {!props.loading && props.label}
      </button>
    </>
  );
};

Button.defaultProps = {
  label: "Tidak",
  isPrimary: true,
  disabled: false,
  loading: false,
};

export default Button;
