import React from "react";
import styles from "./ListHeader.module.css"

// OR function ListHeader({title}){
function ListHeader(props){
    const {title} = props;
    return(
        <h2 className={styles.header}>{title}</h2>
    )
}

export default ListHeader;