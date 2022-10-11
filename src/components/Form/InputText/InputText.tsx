import React from "react";
import { useState } from "react";
import "./InputText.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

library.add(faEye, faEyeSlash);

export interface InputProps {
  type: string;
  label: string;
  disabled?: boolean;
  value?: string;
  error?: boolean;
  errorMessage?: string;
  placeholder?: string;
  id?: string;
  required?: boolean;
}

const InputText = (props: InputProps) => {
  const [type, setType] = useState(props.type);
  const [seePassword, setSeePassword] = useState(true);
  const [eye, setEye] = useState(faEye);

  return (
    <>
      <div className="form-container">
        <label htmlFor={props.id}>{props.label}</label>
        <div className="form-input">
          <input
            required={props.required}
            type={type}
            id={props.id}
            name={props.id}
            disabled={props.disabled}
            value={props.value}
            placeholder={props.placeholder}
            className={props.error ? "error" : ""}
          ></input>
          {props.type === "password" && (
            <span className="icon">
              <FontAwesomeIcon
                onClick={() => {
                  setSeePassword(!seePassword);
                  setEye(seePassword ? faEyeSlash : faEye);
                  setType(seePassword ? "text" : "password");
                }}
                icon={eye}
              />
            </span>
          )}
          {props.error && (
            <span style={{ color: "red" }}>{props.errorMessage}</span>
          )}
        </div>
      </div>
    </>
  );
};

export default InputText;
