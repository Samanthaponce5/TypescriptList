import React from "react";
import { Todo } from "../model";
import './styles.css'
import SingleTodoCard from "./TodoCard";

interface Props{
    todos:Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({todos, setTodos}) =>{

    return(
        <div className="todos">
            {todos.map(todo=>(
                <SingleTodoCard todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
            ))}
        </div>
    )
}

export default TodoList