import React from "react";
import styles from "./Card.module.css"
import Image from "./ImageDiv";
import Text from "./TextDiv";

export default function DesignerCard(){
    return (
        <>
            <div className={styles.Card}>
                <Image/>
                <Text/>
            </div>
        </>
    )
}