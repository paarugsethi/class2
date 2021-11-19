import React from "react";
import styles from "./DetailText.module.css"

export default function DetailText({text}){
    return <p className={styles.DetailText}>{text}</p>
}