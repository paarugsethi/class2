import React from "react";
import styles from "./ImageDiv.module.css"

export default function Image(){
    return (
        <div className={styles.Image}>
            <img className={styles.Img} src="https://static.toiimg.com/photo/msid-51877762,width-96,height-65.cms"/>
        </div>
    )
}