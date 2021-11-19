import React from "react";
import Content from "./Content";
import styles from "./DescriptionDiv.module.css"

export default function Description(){
    return (
        <div className={styles.DescriptionDiv}>
            <Content/>
        </div>
    )
}