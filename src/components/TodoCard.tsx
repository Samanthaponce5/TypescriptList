import React from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete, AiOutlineCheck } from 'react-icons/ai';
interface Props{
    todo: Todo,
    todos:Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodoCard:React.FC <Props>= ({todo, todos, setTodos}) => {
    return(
        <form className="todos__single">
            <span className="todos__single--text">
                {todo.todo}
            </span>
            <div>
                <span className="icon">
                    <AiFillEdit />
                </span>
                <span className="icon">
                    <AiFillDelete />
                </span>
                <span className="icon">
                    <AiOutlineCheck />
                </span>
            </div>
        </form>
    )
}

export default SingleTodoCard