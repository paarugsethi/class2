import React from "react";
import styles from "./Button.module.css"

function Button({title, bgColour}){
    return (
        <>
            <button className={styles.Button} style={{backgroundColor: bgColour}}>{title}</button>
        </>
    )
}

export default Button