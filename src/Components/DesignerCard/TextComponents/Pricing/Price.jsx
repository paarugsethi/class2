import React from "react";
import Button from "./Button";
import Discount from "./Discount";
import styles from "./Pricing.module.css"
import Rate from "./Rate";

export default function Pricing(){
    return (
        <div className={styles.Pricing}>
            <Rate/>
            <Discount/>
            <Button/>
        </div>
    )
}