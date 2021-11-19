import React from "react";
import styles from "./HeadDiv.module.css"
import Heading from "./Heading";
import Icons from "./Icons";

export default function Dish(){
    return (
        <div className={styles.HeadDiv}>
            <Heading/>
            <Icons/>
        </div>
    )
}