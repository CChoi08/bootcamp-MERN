import React, {useState} from 'react';
import '../App.css';

const List = (props) => {

    const strikeTodo = (e) => {
        if(props.todo[e.target.value].completed === false) {
            props.todo[e.target.value].completed = true;
        } else {
            props.todo[e.target.value].completed = false;
        }
        props.setTodo([...props.todo]);
    }

    const deleteTodo = (e) => {
        let todoList = props.todo;
        let newList = [];

        for(let i = 0; i < todoList.length; i++) {
            if(e.target.value != i) {
                newList.push(todoList[i])
            }
        }
        props.setTodo(newList);
    }

    return (
        <div>
            {
                props.todo.map((todo, i) =>
                <div key = {i}>
                    <span className = {todo.completed ? "strikeThrough" : "stillDoing"}>{todo.text}</span>
                    <input type = "checkbox" onClick = {strikeTodo} value = {i} />
                    <button onClick={deleteTodo} value={i}>Delete</button>
                    
                </div>
                )
            }
        </div>
    )
}


export default List;