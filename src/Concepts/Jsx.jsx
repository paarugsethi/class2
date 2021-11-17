import React from "react";
import styles from "./Concepts.module.css"

export default function Jsx(){
    return (
        <div className={styles.concept}>
            <h2>JSX</h2>
            <p>JSX is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.
                It produces React “elements”.
            </p>
        </div>
    )
}