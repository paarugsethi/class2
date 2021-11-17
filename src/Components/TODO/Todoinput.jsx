import {userState} from "react";
import Button from ".../Button";

const TodoInput = ({ onTaskCreate }) => {
    const [text, setText] = userState("");
    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleClick = () => {
        onTaskCreate(text);
    };

    return <div>
        <input type="text"
        placeholder="Add Task"
        value = {text}
        onChange = {handleChange}
        />
        <Button title="ADD" onClick={handleChange}></Button>
    </div>

};

export default TodoInput;