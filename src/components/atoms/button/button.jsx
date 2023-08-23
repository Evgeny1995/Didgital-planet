import React, { Children } from 'react'
import css from './button.module.css';


export const BUTTONS_VARIANT = {
    BTNSMALL: "BTNSMALL",
    BTNBIG: "BTNBIG",
    BTNBIGTRANSPARENT: "BTNBIGTRANSPARENT",
  };

function Button({variant = BUTTONS_VARIANT.BTNSMALL,title, ...props}) {
    const styles = {
        [BUTTONS_VARIANT.BTNSMALL]: css.btnSmall,
        [BUTTONS_VARIANT.BTNBIG]: css.btnBig,
        [BUTTONS_VARIANT.BTNBIGTRANSPARENT]: css.btnBigTansparent,
      }[variant];

  return (
   <button type='button' className={styles}>
    {title}
   </button>
  )
}

export default Button