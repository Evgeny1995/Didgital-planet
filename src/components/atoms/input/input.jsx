import React, { forwardRef } from "react";
import styles from "./input.module.css";
import { debounce, throttle } from "lodash-es";

const Input = forwardRef((props, ref) => {
  return (
    <div className={props.className}>
      <input
        ref={ref}
        {...props}
        className={[styles.input, props].join(" ")}
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
});

export default Input;
