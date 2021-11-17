import React from "react";
import styles from "./Concepts.module.css"

export default function Build(){
    return (
        <div className={styles.concept}>
            <h2>Build</h2>
            <p>It builds the app for production to the build folder.</p>
            <p>It correctly bundles React in production mode and optimizes the build for the best performance.</p>
            <p>The build is minified and the filenames include the hashes.</p>
            <p>The app is ready to be deployed.</p>
        </div>
    )
}