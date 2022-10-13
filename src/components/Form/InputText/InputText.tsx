import React from "react";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

import "./InputText.css";

export interface InputProps {
  type: string;
  label: string;
  disabled: boolean;
  value?: string;
  error: boolean;
  errorMessage?: string;
  placeholder?: string;
  name?: string;
  required?: boolean;
  ref?: any;
  onChange: any;
}

const InputText = (props: InputProps) => {
  const [type, setType] = useState(props.type);
  const [seePassword, setSeePassword] = useState(true);

  return (
    <>
      <div className="form-container">
        <label htmlFor={props.name}>{props.label}</label>
        <div className="form-content">
          <div className="form-input">
            <input
              onChange={props.onChange}
              onKeyPress={
                type === "number"
                  ? (evt) => {
                      if (
                        (evt.which != 8 && evt.which != 0 && evt.which < 48) ||
                        evt.which > 57
                      ) {
                        evt.preventDefault();
                      }
                    }
                  : () => {}
              }
              defaultValue={props.value}
              required={props.required}
              type={type}
              id={props.name}
              name={props.name}
              disabled={props.disabled}
              placeholder={props.placeholder}
              ref={props.ref}
              className={
                props.error && props.type === "password"
                  ? "error-input"
                  : props.error && props.type !== "password"
                  ? "border-error"
                  : props.type !== "password"
                  ? "border"
                  : ""
              }
            ></input>
            {props.type === "password" && (
              <>
                {seePassword ? (
                  <FaEye
                    className={props.error ? "error-icon" : "icon"}
                    onClick={() => {
                      setSeePassword(!seePassword);
                      setType(seePassword ? "text" : "password");
                    }}
                  />
                ) : (
                  <FaEyeSlash
                    className={props.error ? "error-icon" : "icon"}
                    onClick={() => {
                      setSeePassword(!seePassword);
                      setType(seePassword ? "text" : "password");
                    }}
                  />
                )}
              </>
            )}
          </div>
          {props.error && (
            <span className="error-message">{props.errorMessage}</span>
          )}
        </div>
      </div>
    </>
  );
};

InputText.defaultProps = {
  type: "text",
  disabled: false,
  error: false,
  label: "Form",
};

export default InputText;
