import React from "react";
import styles from "./Discount.module.css"

export default function Discount(){
    return <h3 className={styles.Discount} style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>$29.90</h3>
}