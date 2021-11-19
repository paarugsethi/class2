import React from "react";
import styles from "./Icons.module.css"

export default function Icons(){
    return (
        <div className={styles.IconDiv}>
            <div className={styles.icon} style={{backgroundColor: "red"}}></div>
            <div className={styles.icon} style={{backgroundColor: "orange"}}></div>
        </div>
    )
}