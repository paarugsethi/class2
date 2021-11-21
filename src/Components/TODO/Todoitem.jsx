const TodoItem = ({id, status, title, handleDelete, handleToggle}) => {
    return <div>
        <span>{`${title} - ${status}`}</span>
        <button onClick={() => handleDelete(id)}>DELETE</button>
        <button onClick={() => handleToggle(id)}>TOGGLE</button>
    </div>
}

export default TodoItem