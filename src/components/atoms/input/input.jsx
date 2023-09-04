import React from 'react'
import styles from "./input.module.css"

function Input({...props}) {
  return (
    <div className={props.className}>
        <input className={styles.input}  type="text" placeholder={props.placeholder}/>
    </div>
  )
}

export default Input