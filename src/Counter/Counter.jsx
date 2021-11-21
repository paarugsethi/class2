import React, { useState } from "react";
import styles from "./Counter.module.css";

export default function Counter(){
    const [counter, setCounter] = useState(0);

    function handleClick(num){
        setCounter(counter + num);
    };

    function handleDoubleClick(){
        setCounter(counter * 2);
    };

    return (
        <>
            <h1>Counter</h1>
            <h1>{counter}</h1>
            <div className={styles.ButtonDiv}>
                <button className={styles.Button} onClick={() => handleClick(1)}>Add</button>
                <button className={styles.Button} onClick={() => handleClick(-1)}>Subtract</button>
                <button className={styles.Button} onClick={() => handleDoubleClick()}>Double</button>
            </div>
        </>
    )

}