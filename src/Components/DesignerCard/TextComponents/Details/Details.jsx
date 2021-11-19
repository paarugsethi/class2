import React from "react";
import styles from "./DetailsDiv.module.css"
import DetailText from "./DetailText";

export default function Details(){
    return (
        <div className={styles.DetailsDiv}>
            <DetailText text="265 Cal"/>
            <DetailText text="P/F/C: 12/10/31"/>
            <DetailText text="53.8 C"/>
        </div>
    )
}