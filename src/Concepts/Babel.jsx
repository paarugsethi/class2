import React from "react";
import styles from "./Concepts.module.css"

export default function Babel(){
    return (
        <div className={styles.concept}>
            <h2>Babel</h2>
            <p>Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Here are the main things Babel can do for you:</p>
            <ul>
                <li>Transform syntax</li>
                <li>Polyfill features that are missing in your target environment (through a third-party polyfill such as core-js)</li>
                <li>Source code transformations (codemods)</li>
            </ul>
        </div>
    )
}