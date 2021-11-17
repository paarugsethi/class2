import React from "react";
import styles from "./Concepts.module.css"

export default function Question(){
    return (
        <div className={styles.concept}>
            <ul>
                <li>Create an app with create-react-app</li>
                <li>Understand the folder structure and files</li>
                <ul>
                    <li>src</li>
                    <ul>
                        <li>project files should be within this folder</li>
                        <li>index.js</li>
                    </ul>
                    <li>public</li>
                    <ul>
                        <li>static files, how to use files from static folder</li>
                    </ul>
                    <li>package.json</li>
                    <ul>
                        <li>what is it?</li>
                        <li>how do we use it</li>
                        <li>commands with npm</li>
                    </ul>
                    <li>start the project</li>
                    <li>stop the project</li>
                    <li>run a build</li>
                    <ul>
                        <li>explain what the build folder is used for</li>
                    </ul>
                    <li>edit a file and see how the application changes.</li>
                    <li>understanding of HMR</li>
                    <li>What does ReactDOM.render do?</li>
                    <li>understanding of JSX?</li>
                    <li>React without JSX</li>
                    <li>what is babel</li>
                </ul>
            </ul>
        </div>
    )
}