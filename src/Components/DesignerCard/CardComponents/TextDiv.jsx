import React from "react";
import Description from "../TextComponents/Description/DescriptionExport";
import Details from "../TextComponents/Details/Details";
import Dish from "../TextComponents/Heading/DishHead";
import Pricing from "../TextComponents/Pricing/Price";
import styles from "./TextDiv.module.css"

export default function Text(){
    return (
        <div>
            <div className={styles.Main}>
                <Dish/>
                <Description/>
                <Details/>
                <Pricing/>
            </div>
        </div>
    )
}