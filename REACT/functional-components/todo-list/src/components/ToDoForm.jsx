import React, {useState} from 'react';


const ToDoForm = (props) => {

    const [text, setText] = useState("");

    const handleToDoForm = (e) => {
        e.preventDefault()
        if(text.length == 0) {
            return;
        }
        const oneTask = {
            text : text,
            completed : false
        }
        props.todo.push(oneTask);
        props.setTodo([...props.todo]);
    }

    const handleText = (e) => {
        setText(e.target.value);
    }


    return (
        <div>
            <form action = "" onSubmit = {handleToDoForm}>
                <input type = "text" onChange = {handleText} />
                <button>Add</button>
            </form>
        </div>
    )
}


export default ToDoForm;