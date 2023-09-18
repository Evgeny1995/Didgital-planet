import React, { Children } from "react";
import css from "./button.module.css";

export const BUTTONS_VARIANT = {
  BTNSMALL: "BTNSMALL",
  BTNBIG: "BTNBIG",
  BTNBIGTRANSPARENT: "BTNBIGTRANSPARENT",
};

function Button({ variant = BUTTONS_VARIANT.BTNSMALL, title, icon, ...props }) {
  const styles = {
    [BUTTONS_VARIANT.BTNSMALL]: css.btnSmall,
    [BUTTONS_VARIANT.BTNBIG]: css.btnBig,
    [BUTTONS_VARIANT.BTNBIGTRANSPARENT]: css.btnBigTansparent,
  }[variant];

  return (
    <button
      {...props}
      type="button"
      className={[css.wrap, styles, props.className].join(" ")}
    >
      {icon && icon}
      <p>{title}</p>
    </button>
  );
}

export default Button;
