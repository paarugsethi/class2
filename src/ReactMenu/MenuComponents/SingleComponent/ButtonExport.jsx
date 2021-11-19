import React from "react";
import Button from "./Buttons";
import styles from "./SingleLayout.module.css"

export default function SingleButtons(){
    return (
        <div>
            <h2>Single Component</h2>
            <div className={styles.Layout}>
                <Button title="JOIN US" bgColour="#1A98C9"></Button>
                <Button title="SETTINGS" bgColour="#6CA0AC"></Button>
                <Button title="LOGIN" bgColour="#F6A021"></Button>
                <Button title="CONTACT US" bgColour="#C22B39"></Button>
                <Button title="SEARCH" bgColour="#81B047"></Button>
                <Button title="HELP" bgColour="#5A5798"></Button>
                <Button title="HOME" bgColour="#ED5097"></Button>
                <Button title="DOWNLOAD" bgColour="#A98942"></Button>

            </div>
        </div>
    )
}